import { request } from './request'
export function sendMessage(body) {
    return request({
        url: '/sendMessage',
        method: 'post',
        data: body
    })
}
export function getMessages(userId,followId){
    return request({
        url:'/messages',
        params:{
            userId,
            followId
        }
    })
}