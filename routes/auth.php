<?php

use Inertia\Inertia;

Route::middleware('guest')->group(function () {
    Route::get('register', function () {
        return Inertia::render('Auth/Register');
    })->name('register');

    Route::get('login', function () {
        return Inertia::render('Auth/Login');
    })->name('login');

    Route::get('forgot-password', function () {
        return Inertia::render('Auth/ForgotPassword');
    })->name('password.request');

    Route::get('reset-password/{token}', function () {
        return Inertia::render('Auth/ResetPassword', [
            'token' => request()->route('token'),
            'email' => request()->query('email'),
        ]);
    })->name('password.reset');

    Route::get('two-factor-challenge', function () {
        return Inertia::render('Auth/TwoFactorChallenge');
    })->name('two-factor.login');
});

Route::middleware('auth')->group(function () {
    Route::get('verify-email', function () {
        return request()->user()->hasVerifiedEmail()
            ? redirect()->intended(route('dashboard', absolute: false))
            : Inertia::render('Auth/VerifyEmail', ['status' => request()->session()->get('status')]);
    })->name('verification.notice');

    Route::get('confirm-password', function () {
        return Inertia::render('Auth/ConfirmPassword');
    })->name('password.confirm');
});
