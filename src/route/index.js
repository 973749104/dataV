/*
 * @Author: Arvin
 * @Date: 2018-11-01 11:32:49
 * @Last Modified by: Arvin
 * @Last Modified time: 2018-11-01 17:56:11
 * 路由
 */
import Layout from '../layout/index.vue'
import NotFound from '../view/notfound.vue'
import VueRouter from 'vue-router'
 // 路由懒加载
const _lazy = file => () => import(`@/${file}`)

const routes = [{
                path: '/',
                redirect: '/member',
                name: 'layout',
                component: Layout,
                children: [{
                  path: 'member',
                  name: 'member',
                  component: _lazy('member'),
                  meta: { title: '登陆会员看板', icon: 'ios-people' }
                }, {
                  path: 'turnover',
                  name: 'turnover',
                  component: _lazy('turnover'),
                  meta: { title: '营业额看板', icon: 'md-pie' }
                }, {
                  path: 'order',
                  name: 'order',
                  component: _lazy('order'),
                  meta: { title: '订单看板', icon: 'logo-pinterest' }
                }, {
                  path: 'passorder',
                  name: 'passorder',
                  component: _lazy('passorder'),
                  meta: { title: '客单价看板', icon: 'ios-pie' }
                }]
              }, {
                path: '/404',
                name: 'notfound',
                component: NotFound
              }, {
                path: '*',
                redirect: '/404'
              }]

const router = new VueRouter({routes})

export {router, routes}