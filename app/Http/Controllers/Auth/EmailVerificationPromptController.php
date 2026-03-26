<?php

namespace App\Http\Controllers\Auth;

use App\Enums\UserType;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EmailVerificationPromptController extends Controller
{
    /**
     * Show the email verification prompt page.
     */
    public function __invoke(Request $request): Response|RedirectResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            if ($request->user()->role === UserType::STUDENT->value) {
                return redirect()->intended(route('category.courses', ['category' => 'all'], absolute: false));
            }
            return redirect()->intended(route('dashboard', absolute: false));
        }

        return Inertia::render('auth/verify-email', ['status' => $request->session()->get('status')]);
    }
}
