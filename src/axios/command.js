import { request } from './request'
export function putCommand(body) {
    return request({
        url: '/command',
        method: 'post',
        data: body
    })
}
export function getCommands(id) {
    return request({
        url: '/command',
        params: {
            id
        }
    })
}