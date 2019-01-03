<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  div{
    box-sizing: border-box;
  }
  /* 全局样式 */
  .ivu-layout-sider-trigger{
    background: #051339 !important;
    .ivu-icon{
      font-size: 18px !important;
    }
  }
  // 选中的menu
  .ivu-menu-item-active{
    background: none !important;
    &::after{
      content: none !important;
    }
  }
  // 图表标题
  .chartTitle{
    width: 100%;
    height: 28px;
    line-height: 28px;
    color: #60e6ef;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    word-spacing: 1px;
    text-indent: 15px;
    background: url(./assets/image/chartTitle.png) no-repeat;
    background-size: 100% 100%;
  }
  .chartContent{
    margin-top: 5px;
    background: url(./assets/image/box.png) no-repeat;
    background-size: 100% 100%;
    height: calc(100% - 28px);
  }
</style>
