import { queryParams, type QueryParams } from './../../../../../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\PasswordResetLinkController::store
* @see vendor/laravel/fortify/src/Http/Controllers/PasswordResetLinkController.php:35
* @route '/forgot-password'
*/
export const store = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ['post'],
    url: '/forgot-password',
}

/**
* @see \Laravel\Fortify\Http\Controllers\PasswordResetLinkController::store
* @see vendor/laravel/fortify/src/Http/Controllers/PasswordResetLinkController.php:35
* @route '/forgot-password'
*/
store.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\PasswordResetLinkController::store
* @see vendor/laravel/fortify/src/Http/Controllers/PasswordResetLinkController.php:35
* @route '/forgot-password'
*/
store.post = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'post',
} => ({
    url: store.url(options),
    method: 'post',
})

const PasswordResetLinkController = { store }

export default PasswordResetLinkController