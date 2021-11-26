import { request } from './request'
export function search(keywords) {
    return request({
        url: '/search/' + keywords,
    })
}