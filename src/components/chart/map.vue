/*
 * @Author: Arvin
 * @Date: 2018-11-02 15:48:21
 * @Last Modified by: Arvin
 * @Last Modified time: 2018-11-03 15:13:14
 * 地图数据表
 */

<template>
<div class="mapComponent">
  <div id="map" :style="style"></div>
  <table class="table">
    <tr class="thead">
      <th>排名</th>
      <th>城市</th>
      <th>登陆会员占比</th>
    </tr>
    <tr v-for="(item, index) in chartData.slice(0,10)" :key="index">
      <td>{{index +  1}}</td>
      <td>{{item.name}}</td>
      <td>{{item.value}}</td>
    </tr>
  </table>
</div>
</template>

<script>
import '@echarts/component/geo'
import '@echarts/component/tooltip'
import '@echarts/chart/effectScatter'
// 引入地图经纬度数据
import { mapln } from '../../assets/json/map.js'

export default {
  name: 'mapChart',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    chartData: {
      type: Array,
      require: true
    },
    options: {
      type: Object,
      default() {
        return {
          tooltip: {
              trigger: 'item',
              formatter: function (params) {
                  return params.name + ' : ' + params.value[2];
              }
          },
          geo: {
            name: '中国地图',
            map: 'china',
            left: '10',
            top: '5%',
            itemStyle: {
              areaColor: 'RGBA(32, 215, 255, 0.16)',
              borderColor: 'RGBA(69, 165, 212, 0.5)'
            },
            // 高亮状态
            emphasis: {
              label: {
                show: false
              },
              itemStyle: {
                areaColor: '#051339'
              }
            },
            regions: [{
              name:"南海诸岛",
                itemStyle:{
                  normal:{opacity:0}
                }
            }]
          },
          series: [
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              effectType: 'ripple',
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              data: [],
              symbolSize: 10,
              label: {
                  normal: {
                      show: false
                  },
                  emphasis: {
                      show: false
                  }
              },
              itemStyle: {
                color: '#60E6EF'
              },
              emphasis: {
                  borderColor: '#60E6EF',
                  borderWidth: 1,
              }
          }]
        }
      }
    }
  },
  data() {
    return {
    }
  },
  computed: {
    style() {
      return {
        width: this.width,
        height: this.height
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  methods: {
    initChart: function() {
      const el = document.querySelector('#map')
      const mapChart = this.$chart.init(el)
      const newdata = this.formatData(this.chartData)
      this.options.series[0].data = (newdata)
      mapChart.setOption(this.options)
      //  监听窗口变化
      window.addEventListener('resize', () => {
        mapChart.resize()
      })
    },
    formatData: function(data) {
      let res = []
      for(let i = 0; i < data.length; i++) {
        let hasData =  mapln[data[i].name]
        if(hasData) {
          res.push({
            name: data[i].name,
            value: hasData.concat(data[i].value)
          })
        }
      }
      return res
    }
  },
  watch: {
    chartData: {
      handler() {
        this.initChart()
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.mapComponent{
  width: 100%;
  height: 100%;
  position: relative;
  .table{
    position: absolute;
    border-collapse:collapse;
    right: 0;
    bottom: 10px;
    color: #fff;
    text-align: center;
    tr{
      border-bottom: dashed #fff 1px;
      &:first-child{
        border: none;
      }
      td{
        padding: 3px 0;
      }
    }
    .thead{
      color: #60e6ef;
      background: rgba(17, 77, 134, .8);
      th{
        padding: 5px 10px;
      }
    }
  }
}
</style>
