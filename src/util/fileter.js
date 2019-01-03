/*
 * @Author: Arvin
 * @Date: 2018-11-02 14:02:22
 * @Last Modified by: Arvin
 * @Last Modified time: 2018-11-02 18:08:46
 * 过滤器
 */
 const filters = {
  //  过滤时间
  formatDate: function(time) {
    if(!time) {
      return '获取时间中, 请稍等......'
    }
    const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    const isTwoNumber = (number) => { return number >= 10 ? number : `0${number}` }
    const date = new Date(time)
    const year = date.getFullYear()
    const month = isTwoNumber(date.getMonth() + 1)
    const day = isTwoNumber(date.getDate())
    const dfw = week[date.getDay()]
    const hour = isTwoNumber(date.getHours())
    const minutes = isTwoNumber(date.getMinutes())
    const seconds = isTwoNumber(date.getSeconds())
    return `${year}年${month}月${day}日 ${dfw} ${hour}:${minutes}:${seconds}`
  }
 }


 export default filters