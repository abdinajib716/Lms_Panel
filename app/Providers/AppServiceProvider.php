<?php

namespace App\Providers;

use App\Models\Page;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\URL;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton('system_settings', function (): ?Setting {
            try {
                if (isDBConnected() && Schema::hasTable('settings')) {
                    return Setting::where('type', 'system')->first();
                }

                return null;
            } catch (\Throwable $th) {
                return null;
            }
        });

        $this->app->singleton('intro_page', function (): ?Page {
            try {
                if (isDBConnected() && Schema::hasTable('settings')) {
                    $home = Setting::where('type', 'home_page')->first();

                    $page = Page::where('id', $home->fields['page_id'])
                        ->with(['sections' => function ($query) {
                            $query->orderBy('sort', 'asc');
                        }])
                        ->first();

                    return $page;
                }

                return null;
            } catch (\Throwable $th) {
                return null;
            }
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Schema::defaultStringLength(191);

        $this->configureRateLimiting();

        ResetPassword::createUrlUsing(function (User $user, string $token) {
            return env('FRONTEND_URL') . '/reset-password?token=' . $token . '&email=' . $user->email;
        });

        // Trust proxies when running behind a reverse proxy (e.g., Docker, nginx)
        // This allows Laravel to correctly detect HTTPS when behind a proxy
        if (config('app.env') !== 'local' || request()->hasHeader('X-Forwarded-Proto')) {
            request()->setTrustedProxies(
                ['*'],
                \Illuminate\Http\Request::HEADER_X_FORWARDED_FOR |
                    \Illuminate\Http\Request::HEADER_X_FORWARDED_HOST |
                    \Illuminate\Http\Request::HEADER_X_FORWARDED_PORT |
                    \Illuminate\Http\Request::HEADER_X_FORWARDED_PROTO |
                    \Illuminate\Http\Request::HEADER_X_FORWARDED_PREFIX
            );
        }

        // Force HTTPS scheme for URLs when accessed via HTTPS
        // This ensures assets load with the correct protocol
        if (request()->header('X-Forwarded-Proto') === 'https' || request()->secure()) {
            URL::forceScheme('https');
        }
    }

    protected function configureRateLimiting(): void
    {
        // Default API rate limit - 60 requests per minute for authenticated users
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip())
                ->response(function (Request $request, array $headers) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Too many requests. Please try again later.',
                        'retry_after' => $headers['Retry-After'] ?? 60,
                    ], 429, $headers);
                });
        });

        // Strict rate limit for authentication endpoints - prevent brute force
        RateLimiter::for('auth', function (Request $request) {
            return Limit::perMinute(5)->by($request->ip())
                ->response(function (Request $request, array $headers) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Too many login attempts. Please try again in a minute.',
                        'retry_after' => $headers['Retry-After'] ?? 60,
                    ], 429, $headers);
                });
        });

        // Strict rate limit for password reset - prevent abuse
        RateLimiter::for('password-reset', function (Request $request) {
            return Limit::perMinute(3)->by($request->ip())
                ->response(function (Request $request, array $headers) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Too many password reset attempts. Please try again later.',
                        'retry_after' => $headers['Retry-After'] ?? 60,
                    ], 429, $headers);
                });
        });

        // Rate limit for public course browsing - higher limit
        RateLimiter::for('public', function (Request $request) {
            return Limit::perMinute(120)->by($request->ip())
                ->response(function (Request $request, array $headers) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Too many requests. Please try again later.',
                        'retry_after' => $headers['Retry-After'] ?? 60,
                    ], 429, $headers);
                });
        });

        // Rate limit for sensitive operations (submissions, reviews, etc.)
        RateLimiter::for('sensitive', function (Request $request) {
            return Limit::perMinute(10)->by($request->user()?->id ?: $request->ip())
                ->response(function (Request $request, array $headers) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Too many requests. Please slow down.',
                        'retry_after' => $headers['Retry-After'] ?? 60,
                    ], 429, $headers);
                });
        });

        // Rate limit for file uploads
        RateLimiter::for('uploads', function (Request $request) {
            return Limit::perMinute(5)->by($request->user()?->id ?: $request->ip())
                ->response(function (Request $request, array $headers) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Too many upload requests. Please wait before uploading again.',
                        'retry_after' => $headers['Retry-After'] ?? 60,
                    ], 429, $headers);
                });
        });
    }
}
