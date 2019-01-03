/*
import { setInterval } from 'timers';
import { setInterval } from 'timers';
 * @Author: Arvin
 * @Date: 2018-11-01 16:30:00
 * @Last Modified by: Arvin
 * @Last Modified time: 2018-11-07 09:31:16
 * 头部内容
 */
 <template>
   <div class="header">
     <div class="logo">
       LOGO
     </div>
     <div class="data">
       <img src="../assets/image/top.png" alt="logo">
       <div class="dataTab">
         <slot>数据块</slot>
       </div>
     </div>
     <div class="time">
       {{ time | formatDate }}
     </div>
   </div>
 </template>

 <script>
 export default {
   data() {
     return {
       time: ''
     }
   },
   created() {
     this.refreshTime()
   },
   methods: {
     getTime: function() {
       const date = new Date()
       this.time = date.getTime()
     },
     refreshTime: function() {
       setInterval(this.getTime, 1000)
     }
   }
 }
 </script>

 <style lang="scss" scoped>
  .header{
    display: flex;
    height: 150px;
    .logo{
      width: 180px;
      margin-right: 50px;
      height: 100%;
      color: #fff;
      img{
        width: 180px;
        margin-right: 50px;
        height: auto;
      }
    }
    .data{
      flex: 3;
      // min-width: 742px;
      img{
        margin-top: 15px;
        width: 100%;
        height: auto;
      }
      .dataTab{
        top: -60px;
        margin: 0 30px;
        position: relative;
        height: 85px;
      }
    }
    .time{
      min-width: 120px;
      height: 100%;
      color: #fff;
      font-size: 16px;
      padding-top: 12px;
      padding-right: 10px;
      text-align: right;
    }
  }
 </style>

