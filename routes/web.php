<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard', [
        'canUpdateProfile' => Features::canUpdateProfileInformation(),
        'canUpdatePassword' => Features::enabled(Features::updatePasswords()),
        'canManageTwoFactorAuthentication' => Features::canManageTwoFactorAuthentication(),
        'confirmsTwoFactorAuthentication' => Features::optionEnabled(Features::twoFactorAuthentication(), 'confirm'),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');
