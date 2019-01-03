/*
 * @Author: Arvin
 * @Date: 2018-11-01 15:35:08
 * @Last Modified by: Arvin
 * @Last Modified time: 2018-11-02 11:38:58
 * 菜单
 */
 <template>
   <div class="menu">
     <Menu width="auto" theme="dark" :class="['menu-item', isCollapsed ? 'collapsed-menu' : '']" active-name="member">
       <menu-item v-for="(item, index) in menus" :name="item.path" :title="item.meta.title" :key="index" :to="item.path">
         <Icon :type="item.meta.icon" />
         <span>{{item.meta.title}}</span>
       </menu-item>
     </Menu>
   </div>
 </template>

 <script>
 import { routes } from '../route/index'

 export default {
  data() {
    return {
      menus: routes[0].children
    }
  },
  props: {
    isCollapsed: {
      type: Boolean,
      required: true
    }
  }
 }
 </script>

 <style lang="scss" scoped>
 .menu{
  height: 100%;
  .menu-item{
    width: 200px;
    height: 100%;
    background: none;
    span{
      display: inline-block;
      overflow: hidden;
      width: 80%;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width .2s ease .2s;
    }
    i{
      transform: translateX(0px);
      transition: font-size .2s ease, transform .2s ease, marign .2s ease;
      vertical-align: middle;
      font-size: 16px;
      margin-right: 12px;
    }
    a{
      color: #fff;
      &:hover{
        color: #2d8cf0;
        background: none;
      }
    }
  }

  .collapsed-menu{
    span{
      width: 0px;
      transition: width .2s ease;
    }
    i{
      transform: translateX(-5px);
      transition: font-size .2s ease .2s, transform .2s ease .2s, marign .2s ease;
      vertical-align: middle;
      font-size: 18px;
    }
    a{
      height: 56px;
    }
  }
 }
 </style>

