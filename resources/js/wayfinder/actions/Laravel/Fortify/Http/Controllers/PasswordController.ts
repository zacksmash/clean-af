import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
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

/**
* @see \Laravel\Fortify\Http\Controllers\PasswordController::update
* @see vendor/laravel/fortify/src/Http/Controllers/PasswordController.php:22
* @route '/user/password'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \Laravel\Fortify\Http\Controllers\PasswordController::update
* @see vendor/laravel/fortify/src/Http/Controllers/PasswordController.php:22
* @route '/user/password'
*/
updateForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

const PasswordController = { update }

export default PasswordController