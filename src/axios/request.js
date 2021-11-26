import axios from 'axios'
axios.defaults.withCredentials = true
export function request(config) {
    const instance = axios.create({
        timeout: 30000,
        baseURL: '/api',
    })
    return instance(config)
}
