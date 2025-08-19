import { queryParams, type QueryParams } from './../../wayfinder'
import login from './login'
/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:42
* @route '/two-factor-challenge'
*/
export const login = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ['get','head'],
    url: '/two-factor-challenge',
}

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:42
* @route '/two-factor-challenge'
*/
login.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:42
* @route '/two-factor-challenge'
*/
login.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: login.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::login
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticatedSessionController.php:42
* @route '/two-factor-challenge'
*/
login.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: login.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
* @route '/user/two-factor-authentication'
*/
export const enable = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: enable.url(options),
    method: 'post',
})

enable.definition = {
    methods: ['post'],
    url: '/user/two-factor-authentication',
}

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
* @route '/user/two-factor-authentication'
*/
enable.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return enable.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::enable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:21
* @route '/user/two-factor-authentication'
*/
enable.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: enable.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
export const confirm = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: confirm.url(options),
    method: 'post',
})

confirm.definition = {
    methods: ['post'],
    url: '/user/confirmed-two-factor-authentication',
}

/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
confirm.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return confirm.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::confirm
* @see vendor/laravel/fortify/src/Http/Controllers/ConfirmedTwoFactorAuthenticationController.php:19
* @route '/user/confirmed-two-factor-authentication'
*/
confirm.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: confirm.url(options),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
* @route '/user/two-factor-authentication'
*/
export const disable = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: disable.url(options),
    method: 'delete',
})

disable.definition = {
    methods: ['delete'],
    url: '/user/two-factor-authentication',
}

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
* @route '/user/two-factor-authentication'
*/
disable.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return disable.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::disable
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorAuthenticationController.php:35
* @route '/user/two-factor-authentication'
*/
disable.delete = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'delete',
} => ({
    url: disable.url(options),
    method: 'delete',
})

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
export const qrCode = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: qrCode.url(options),
    method: 'get',
})

qrCode.definition = {
    methods: ['get','head'],
    url: '/user/two-factor-qr-code',
}

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
qrCode.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return qrCode.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
qrCode.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: qrCode.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::qrCode
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorQrCodeController.php:16
* @route '/user/two-factor-qr-code'
*/
qrCode.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: qrCode.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:18
* @route '/user/two-factor-secret-key'
*/
export const secretKey = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: secretKey.url(options),
    method: 'get',
})

secretKey.definition = {
    methods: ['get','head'],
    url: '/user/two-factor-secret-key',
}

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:18
* @route '/user/two-factor-secret-key'
*/
secretKey.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return secretKey.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:18
* @route '/user/two-factor-secret-key'
*/
secretKey.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: secretKey.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::secretKey
* @see vendor/laravel/fortify/src/Http/Controllers/TwoFactorSecretKeyController.php:18
* @route '/user/two-factor-secret-key'
*/
secretKey.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: secretKey.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:20
* @route '/user/two-factor-recovery-codes'
*/
export const recoveryCodes = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: recoveryCodes.url(options),
    method: 'get',
})

recoveryCodes.definition = {
    methods: ['get','head'],
    url: '/user/two-factor-recovery-codes',
}

/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:20
* @route '/user/two-factor-recovery-codes'
*/
recoveryCodes.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return recoveryCodes.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:20
* @route '/user/two-factor-recovery-codes'
*/
recoveryCodes.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: recoveryCodes.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\RecoveryCodeController::recoveryCodes
* @see vendor/laravel/fortify/src/Http/Controllers/RecoveryCodeController.php:20
* @route '/user/two-factor-recovery-codes'
*/
recoveryCodes.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: recoveryCodes.url(options),
    method: 'head',
})

const twoFactor = {
    login,
    enable,
    confirm,
    disable,
    qrCode,
    secretKey,
    recoveryCodes,
}

export default twoFactor