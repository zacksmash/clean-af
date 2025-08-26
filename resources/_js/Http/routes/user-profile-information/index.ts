import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\ProfileInformationController::update
* @see vendor/laravel/fortify/src/Http/Controllers/ProfileInformationController.php:21
* @route '/user/profile-information'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/user/profile-information',
} satisfies RouteDefinition<["put"]>

/**
* @see \Laravel\Fortify\Http\Controllers\ProfileInformationController::update
* @see vendor/laravel/fortify/src/Http/Controllers/ProfileInformationController.php:21
* @route '/user/profile-information'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\ProfileInformationController::update
* @see vendor/laravel/fortify/src/Http/Controllers/ProfileInformationController.php:21
* @route '/user/profile-information'
*/
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

const userProfileInformation = {
    update,
}

export default userProfileInformation