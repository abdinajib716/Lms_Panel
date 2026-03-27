<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class VerifyEmailController extends Controller
{
    /**
     * Mark the user's email address as verified from a signed link.
     */
    public function __invoke(Request $request, string $id, string $hash): Response|RedirectResponse
    {
        $user = User::findOrFail($id);

        if (! hash_equals((string) $hash, sha1($user->getEmailForVerification()))) {
            abort(403, 'Invalid verification link.');
        }

        if ($user->hasVerifiedEmail()) {
            if (Auth::id() === $user->id) {
                Auth::logout();
            }

            return Inertia::render('auth/verify-email-success', [
                'title' => 'Email Already Verified',
                'description' => 'This email address is already verified. You can close this browser and return to the mobile app.',
            ]);
        }

        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }

        if (Auth::id() === $user->id) {
            Auth::logout();
        }

        return Inertia::render('auth/verify-email-success', [
            'title' => 'Email Verified Successfully',
            'description' => 'Your email has been verified successfully. You can close this browser and return to the mobile app.',
        ]);
    }
}
