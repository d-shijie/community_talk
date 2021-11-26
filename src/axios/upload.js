import { request } from './request'
export function publish(formdata) {
    return request({
        method: 'post',
        url: '/publish',
        data: formdata,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

}
