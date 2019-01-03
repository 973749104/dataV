/*
 * @Author: Arvin
 * @Date: 2018-11-03 14:20:36
 * @Last Modified by: Arvin
 * @Last Modified time: 2018-11-07 09:28:49
 * 折线图
 */
 <template>
   <div class="line">
     <div id="line" :style="style"></div>
   </div>
 </template>

<script>
import '@echarts/component/tooltip'
import '@echarts/component/legend'
import '@echarts/component/title'
import '@echarts/chart/line'

export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    // chartData: {
    //   type: Array,
    //   require: true
    // },
    options: {
      type: Object,
      default() {
        return {
          title: {
              text: '登陆会员数/人',
              textStyle: {
                color: '#fff'
              },
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              textStyle: {
                color: '#fff'
              },
              data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
          },
          grid: {
              left: '0',
              right: '5%',
              bottom: '2%',
              containLabel: true
          },
          toolbox: {
              feature: {
                  saveAsImage: {}
              }
          },
          xAxis: {
              type: 'category',
              boundaryGap: false,
              axisLine: {
                lineStyle: {
                  color: '#fff'
                }
              },
              data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: '#fff'
                }
              },
          },
          series: [
              {
                  name:'邮件营销',
                  type:'line',
                  stack: '总量',
                  data:[120, 132, 101, 134, 90, 230, 210]
              },
              {
                  name:'联盟广告',
                  type:'line',
                  stack: '总量',
                  data:[220, 182, 191, 234, 290, 330, 310]
              }
          ]
        }
      }
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
      const el = document.querySelector('#line')
      const lineChart = this.$chart.init(el)
      lineChart.setOption(this.options)
      //  监听窗口变化
      window.addEventListener('resize', () => {
        lineChart.resize()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.line{
  width: 100%;
  height: 100%;
}
</style>
