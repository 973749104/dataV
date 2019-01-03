/*
 * @Author: Arvin
 * @Date: 2018-11-02 14:25:01
 * @Last Modified by: Arvin
 * @Last Modified time: 2018-11-02 14:38:39
 * 工具类
 */
 import iviewComponent from '../components/iview'
 import filter from './fileter'
//  返回插件（compoent or filter）
 const plugins = {
  //  模块组件
  component: (Vue) => {
    if(!iviewComponent || iviewComponent.length <= 0) {
      return
    }
    Object.keys(iviewComponent).forEach(item => {
      Vue.component(item, iviewComponent[item])
    })
  },
  // 过滤器
  filter: (Vue) => {
    if(!filter || filter.length <= 0) {
      return
    }
    Object.keys(filter).forEach(item => {
      Vue.filter(item, filter[item])
    })
  }
 }

//  其它

 export {plugins}