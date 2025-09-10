# clean af 🧼 - A Laravel starter kit that's clean af

[![Latest Version on Packagist](https://img.shields.io/packagist/v/zacksmash/clean-af.svg?style=flat-square)](https://packagist.org/packages/zacksmash/clean-af)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/zacksmash/clean-af/tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/zacksmash/clean-af/actions?query=workflow%3Arun-tests+branch%3Amain)
[![GitHub Code Style Action Status](https://img.shields.io/github/actions/workflow/status/zacksmash/clean-af/lint.yml?branch=main&label=code%20style&style=flat-square)](https://github.com/zacksmash/clean-af/actions?query=workflow%3A"Fix+PHP+code+style+issues"+branch%3Amain)
[![Total Downloads](https://img.shields.io/packagist/dt/zacksmash/clean-af.svg?style=flat-square)](https://packagist.org/packages/zacksmash/clean-af)

- Minimal Tailwind styles, that can be completely removed in the app.css if you want.
- Uses [Laravel Fortify](https://laravel.com/docs/12.x/fortify) to handle authentication, 2FA, etc.
- Uses [Laravel Wayfinder](https://github.com/laravel/wayfinder) for routing
- Intentially bare-bones so you can install whatever frontend you'd like without having to strip out existing components and structures.

## Screenshots
![Login Screen](https://github.com/zacksmash/assets/blob/main/clean-af/img/login-screen.png)
![Dashboard Screen](https://github.com/zacksmash/assets/blob/main/clean-af/img/dashboard-screen.png)

## Installation
### Via Laravel Herd
One-click install a new application using this starter kit through [Laravel Herd](https://herd.laravel.com):

<a href="https://herd.laravel.com/new?starter-kit=zacksmash/clean-af"><img src="https://img.shields.io/badge/Install%20with%20Herd-fff?logo=laravel&logoColor=f53003" alt="Install with Herd"></a>

### Via the Laravel Installer
Create a new Laravel application using this starter kit through the official [Laravel Installer](https://laravel.com/docs/12.x/installation#installing-php):

```bash
laravel new my-app --using=zacksmash/clean-af
```

## Configuration
If you run into errors, you'll probably need to review the [Laravel Fortify](https://laravel.com/docs/12.x/fortify) docs. This just a frontend starter kit, so nothing is configured for things like 2FA or Email Verification out of the box.

### Email Verification
- Visit `app/Models/User.php` and implement the `MustVerifyEmail` interface.
- Visit `app/Providers/FortifyServiceProvider.php` and uncomment `Fortify::verifyEmailView`
- Visit `config/fortify.php` and uncomment `Features::emailVerification()`
- Visit `resources/js/pages/auth/VerifyEmail.vue` and uncomment the import

### Two-Factor Authentication
- Visit `app/Models/User.php` and use the `TwoFactorAuthenticatable` trait
- Visit `app/Providers/FortifyServiceProvider.php` and uncomment `Fortify::twoFactorChallengeView`
- Visit `config/fortify.php` and uncomment `Features::twoFactorAuthentication()`
- Visit `resources/js/pages/auth/TwoFactorChallenge.vue` and uncomment the import
- Visit `resources/js/pages/settings/TwoFactorAuth.vue` and uncomment the imports

### Wayfinder Issues
If you run into Node error screens, you may need to compile the Wayfinder types again.

```bash
composer wayfinder
```

### Other Helper Commands
Run ESLint
```bash
npm run lint
```

Run Pint
```bash
composer lint
```
