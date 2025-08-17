<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard', [
        'twoFactorQrCodeSvg' => auth()->user()->two_factor_secret
            ? auth()->user()->twoFactorQrCodeSvg()
            : null,
        'twoFactorQrCodeUrl' => auth()->user()->two_factor_secret
            ? auth()->user()->twoFactorQrCodeUrl()
            : null,
        'twoFactorRecoveryCodes' => auth()->user()->two_factor_recovery_codes
            ? json_decode(decrypt(auth()->user()->two_factor_recovery_codes), true)
            : [],
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
