import { request } from './request'
export function follow(username, followId,userId) {
    return request({
        url: '/follow',
        method: 'post',
        data: {
            username,
            followId,
            userId
        }
    })
}
export function getFollowList(userId){
    return request({
        url:'/followList',
        params:{
            userId
        }
    })
}
export function getFollowedList(followId){
    return request({
        url:'/followedList',
        params:{
            followId
        }
    })
}
export function deleteFollow(body){
    return request({
        url:'/deleteFollow',
        method:'post',
        data:body
    })
}