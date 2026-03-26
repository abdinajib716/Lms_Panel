<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureApiEmailIsVerified
{
    /**
     * Handle an incoming request.
     * Returns 403 JSON if user email is not verified.
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->user() || !$request->user()->hasVerifiedEmail()) {
            return response()->json([
                'success' => false,
                'message' => 'Your email address is not verified. Please verify your email before continuing.',
                'error_code' => 'EMAIL_NOT_VERIFIED',
            ], 403);
        }

        return $next($request);
    }
}
