import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\PasswordController::update
* @see vendor/laravel/fortify/src/Http/Controllers/PasswordController.php:22
* @route '/user/password'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/user/password',
} satisfies RouteDefinition<["put"]>

/**
* @see \Laravel\Fortify\Http\Controllers\PasswordController::update
* @see vendor/laravel/fortify/src/Http/Controllers/PasswordController.php:22
* @route '/user/password'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\PasswordController::update
* @see vendor/laravel/fortify/src/Http/Controllers/PasswordController.php:22
* @route '/user/password'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

const PasswordController = { update }

export default PasswordController