import { request } from './request'
export function register(query) {
    return request({
        url: '/register',
        method: 'post',
        data: query
    })
}