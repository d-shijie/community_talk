import { request } from './request'
export function getUserDetail(userId) {
    return request({
        url: '/userDetail/' + userId
    })
}
export function putUserDetail(body){
    return request({
        url:'/userDetail',
        method:'post',
        data:body
    })
}