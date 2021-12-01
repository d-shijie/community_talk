import { request } from './request'
export function getEvents(category, page) {
    return request({
        url: '/events/' + category + "/" + page
    })
}
export function getUserEvents(id) {
    return request({
        url: '/userEvents',
        params: {
            id
        }
    })
}
export function deleteEvent(query){
    return request({
        url:'/eventDelete',
        method:'post',
        data:query
    })
}