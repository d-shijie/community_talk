import { request } from './request'
export function getUserDetail(userId) {
    return request({
        url: '/userDetail/' + userId
    })
}