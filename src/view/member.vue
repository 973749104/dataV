/*
 * @Author: Arvin
 * @Date: 2018-11-01 11:30:42
 * @Last Modified by: Arvin
 * @Last Modified time: 2018-11-07 10:05:58
 * 登陆会员看板
 */
<template>
  <div class="member">
    <Header>
      <div class="tabData">
        <div class="a">1</div>
        <div class="b">2</div>
        <div class="c">3</div>
      </div>
    </Header>
    <div class="main">
      <div class="area">
        <div class="chartTitle">
          登陆会员地域分布
        </div>
        <div class="mapChart">
          <MapChart :chartData="mapData" width="90%" height="90%"/>
        </div>
      </div>
      <div class="loginmember">
        <div class="chartTitle">
          登陆会员数实时趋势
        </div>
        <div class="lineChart">
          <LineChart width="100%" height="100%" />
        </div>
        <div class="otherChart">
          <div class="pieChart">
            <div class="chartTitle">
              首登会员数占比例
            </div>
            <div class="chartContent">
              <PieChart width="100%" height="100%"/>
            </div>
          </div>
          <div class="barChart">
            <div class="chartTitle">
              首登会员数占比例
            </div>
            <div class="chartContent">
              <BarChart width="100%" height="100%"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/header'
import MapChart from '../components/chart/map'
import LineChart from '../components/chart/line'
import PieChart from '../components/chart/pie'
import BarChart from '../components/chart/bar'
// 引入模拟数据
import { mapDemo } from '../assets/json/mock.js'


export default {
  components: {
    Header,
    MapChart,
    LineChart,
    PieChart,
    BarChart
  },
  data() {
    return {
      mapData: []
    }
  },
  created() {
    setInterval(this.slice, 3000)
    // this.slice()
  },
  destroyed() {

  },
  methods: {
    slice: function() {
      // 数据裁剪
      // this.mapData = mapDemo.filter((item, index)=> index < 10)
      this.mapData = mapDemo.slice(0, Math.round(Math.random() * 10))
    }
  }
}
</script>

<style lang="scss" scoped>
.member{
  width: 100%;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  .tabData{
    width: 100%;
    height: 100%;
    display: flex;
    div{
      flex: 1;
      background: saddlebrown;
      height: 100%;
      color: #Fff;
      margin-right: 18px;
      &:first-child{
        margin-left: 18px;
        background: sandybrown;
      }
      &:last-child{
        margin-right: none;
        background: salmon;
      }
    }
  }
  .main{
    width: 100%;
    height: calc(100% - 150px);
    flex: 1;
    display: flex;
    .area{
      min-width: 50%;
      min-height: 100%;
      padding: 0 10px;
      .mapChart{
        width: 100%;
        height: calc(100% - 28px);
      }
    }
    .loginmember{
      // flex: 1;
      min-width: 50%;
      padding: 0 10px;
      min-height: 100%;
      .lineChart{
        width: 100%;
        height: calc(50% - 38px);
        padding: 10px;
        box-sizing: border-box;
        margin-top: 5px;
        background: url(../assets/image/box.png) no-repeat;
        background-size: 100% 100%;
      }
      .otherChart{
        display: flex;
        height: calc(50% - 10px);
        .pieChart{
          width: 50%;
          margin-top: 5px;
          margin-right: 5px;
          height: 100%;
        }
        .barChart{
          margin-left: 5px;
          width: 50%;
          margin-top: 5px;
          height: 100%;
        }
      }
    }
  }
}
</style>

