/*
 * @Author: Arvin
 * @Date: 2018-11-01 11:38:38
 * @Last Modified by: Arvin
 * @Last Modified time: 2018-11-07 10:30:23
 * layout
 */
 <template>
   <div class="layout">
     <Layout :style="{minHeight: '100vh'}">
       <Sider class="sider" collapsible :collapsed-width="60" v-model="isCollapsed">
         <SideMenu :isCollapsed="isCollapsed"/>
       </Sider>
       <Layout>
        <Content class="content">
            <router-view />
            <div class="fullBtn" title="点击全屏" v-if="!isFullScreen" @click="fullScreen"></div>
        </Content>
       </Layout>
     </Layout>
   </div>
 </template>

 <script>
 import SideMenu from './menu'
 export default {
   name: 'layout',
   components: {
     SideMenu
   },
   mounted() {
    //  监听变化
    window.addEventListener('resize', () => {
      const isFull = this.checkIsFull()
      if(!isFull) {
        this.isFullScreen = false
        return
      }
    })
   },
   data() {
     return {
       isCollapsed: true,
       isFullScreen: false
     }
   },
   methods: {
     fullScreen: function() {
       const content = document.querySelector('.content')
       const isFull = content.requestFullScreen || content.webkitRequestFullScreen || content.mozRequestFullScreen || content.msRequestFullscreen
       if(typeof isFull != "undefined" && isFull) {
          isFull.call(content)
          this.isFullScreen = true
       }else{
          console.log('不能全屏')
       }
     },
     checkIsFull: function() {
        const isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled
        return isFull
     }
   }
 }
 </script>

 <style lang="scss" scoped>
  .layout{
    .sider{
     width: 120px;
     background: #051339;
    }
    // 主要内容
    .content{
      min-width: 1000px;
      background: #fff;
      position: relative;
      padding: 0;
      background: url(../assets/image/bg.png) no-repeat;
      background-size: 100% 100%;
    }
    // 悬浮全屏按钮
    .fullBtn{
      position: absolute;
      z-index: 99;
      width: 32px;
      height: 32px;
      background: url(../assets/image/fullScreen.png) no-repeat;
      background-size: 100% 100%;
      right: 10px;
      bottom: 10px;
      cursor: pointer;
    }
  }
 </style>

