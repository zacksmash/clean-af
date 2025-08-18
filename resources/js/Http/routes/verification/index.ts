import { queryParams, type QueryParams } from './../../wayfinder'
/**
* @see routes/auth.php:31
* @route '/verify-email'
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
    url: '/verify-email',
}

/**
* @see routes/auth.php:31
* @route '/verify-email'
*/
notice.url = (options?: { query?: QueryParams, mergeQuery?: QueryParams }) => {
    return notice.definition.url + queryParams(options)
}

/**
* @see routes/auth.php:31
* @route '/verify-email'
*/
notice.get = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'get',
} => ({
    url: notice.url(options),
    method: 'get',
})

/**
* @see routes/auth.php:31
* @route '/verify-email'
*/
notice.head = (options?: { query?: QueryParams, mergeQuery?: QueryParams }): {
    url: string,
    method: 'head',
} => ({
    url: notice.url(options),
    method: 'head',
})

const verification = {
    notice,
}

export default verification