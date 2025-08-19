import { queryParams, type QueryParams } from './../../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationPromptController::notice
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationPromptController.php:18
* @route '/email/verify'
*/
export const notice = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: notice.url(options),
    method: 'get',
})

notice.definition = {
    methods: ['get','head'],
    url: '/email/verify',
}

/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationPromptController::notice
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationPromptController.php:18
* @route '/email/verify'
*/
notice.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return notice.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationPromptController::notice
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationPromptController.php:18
* @route '/email/verify'
*/
notice.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: notice.url(options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationPromptController::notice
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationPromptController.php:18
* @route '/email/verify'
*/
notice.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: notice.url(options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\VerifyEmailController::verify
* @see vendor/laravel/fortify/src/Http/Controllers/VerifyEmailController.php:18
* @route '/email/verify/{id}/{hash}'
*/
export const verify = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: verify.url(args, options),
    method: 'get',
})

verify.definition = {
    methods: ['get','head'],
    url: '/email/verify/{id}/{hash}',
}

/**
* @see \Laravel\Fortify\Http\Controllers\VerifyEmailController::verify
* @see vendor/laravel/fortify/src/Http/Controllers/VerifyEmailController.php:18
* @route '/email/verify/{id}/{hash}'
*/
verify.url = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    if (Array.isArray(args)) {
        args = {
            id: args[0],
            hash: args[1],
        }
    }

    const parsedArgs = {
        id: args.id,
        hash: args.hash,
    }

    return verify.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{hash}', parsedArgs.hash.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\VerifyEmailController::verify
* @see vendor/laravel/fortify/src/Http/Controllers/VerifyEmailController.php:18
* @route '/email/verify/{id}/{hash}'
*/
verify.get = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: verify.url(args, options),
    method: 'get',
})

/**
* @see \Laravel\Fortify\Http\Controllers\VerifyEmailController::verify
* @see vendor/laravel/fortify/src/Http/Controllers/VerifyEmailController.php:18
* @route '/email/verify/{id}/{hash}'
*/
verify.head = (args: { id: string | number, hash: string | number } | [id: string | number, hash: string | number ], options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: verify.url(args, options),
    method: 'head',
})

/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationNotificationController::send
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationNotificationController.php:19
* @route '/email/verification-notification'
*/
export const send = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: send.url(options),
    method: 'post',
})

send.definition = {
    methods: ['post'],
    url: '/email/verification-notification',
}

/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationNotificationController::send
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationNotificationController.php:19
* @route '/email/verification-notification'
*/
send.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return send.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\EmailVerificationNotificationController::send
* @see vendor/laravel/fortify/src/Http/Controllers/EmailVerificationNotificationController.php:19
* @route '/email/verification-notification'
*/
send.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: send.url(options),
    method: 'post',
})

const verification = {
    notice,
    verify,
    send,
}

export default verification