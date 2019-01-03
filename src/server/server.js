/*
 * @Author: Arvin
 * @Date: 2018-09-17 11:47:22
 * @Last Modified by: Arvin
 * @Last Modified time: 2018-11-08 11:20:17
 * axios 封装
 */
import axios from 'axios'
import baseUrl from '../config/config'

// 设置axios默认配置
axios.defaults.baseURL = baseUrl.apiUrl // 请求路径

axios.defaults.timeout = 10000 // 请求超时
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequset', // 默认请求类型
    'Content-Type': 'application/json;charset=UTF-8' // 默认数据格式
}

// 设定取消多次请求
let cancel = {}
let pending = {}
// 创建取消请求令牌
const CancelToken = axios.CancelToken


// 请求拦截器
axios.interceptors.request.use(config => {
    // 发起请求时，取消掉当前正在进行的相同请求
    if (pending[config.url]) {
        pending[config.url] = cancel
    }else{
        pending[config.url] = cancel
    }
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(response => {
    return response
}, error => {
    if (error && error.response) {
        console.log(error)
    }else{
        console.log('连接服务器失败')
    }
    return Promise.resolve(error.response)
})

export default {
    // get请求
    get (url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: param,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    },
    // post请求
    post (url, param) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url,
                params: param,
                cancelToken: new CancelToken(c => {
                    cancel = c
                })
            }).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

