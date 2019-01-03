/*
 * @Author: Arvin
 * @Date: 2018-11-03 15:40:56
 * @Last Modified by: Arvin
 * @Last Modified time: 2018-11-07 10:01:22
 * 柱状图
 */
 <template>
   <div class="bar">
     <div id="bar" :style="style"></div>
   </div>
 </template>

<script>
import '@echarts/component/tooltip'
import '@echarts/component/legend'
import '@echarts/chart/bar'

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
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '0',
                right: '5%',
                top: '10%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisLine: {
                  lineStyle: {
                    color: '#fff'
                  }
                },
            },
            yAxis: {
                type: 'category',
                axisLine: {
                  lineStyle: {
                    color: '#fff'
                  }
                },
                data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
            },
            series: [
                {
                    type: 'bar',
                    data: [182, 234, 290, 190, 744, 230]
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
      const el = document.querySelector('#bar')
      const barChart = this.$chart.init(el)
      barChart.setOption(this.options)
      //  监听窗口变化
      window.addEventListener('resize', () => {
        barChart.resize()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.bar{
  width: 100%;
  height: 100%;
}
</style>
