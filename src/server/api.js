/*
 * @Author: Arvin
 * @Date: 2018-09-17 11:47:28
 * @Last Modified by: Arvin
 * @Last Modified time: 2018-09-26 13:44:33
 * api接口
 */
import http from './server'

export const demoApi = (url, param) => {
    return http.post(url, param)
}
