/*
 * @Author: Arvin
 * @Date: 2018-11-03 15:02:49
 * @Last Modified by: Arvin
 * @Last Modified time: 2018-11-07 09:29:05
 *饼状图
 */
 <template>
   <div class="pie">
     <div id="pie" :style="style"></div>
   </div>
 </template>

 <script>
 import '@echarts/component/tooltip'
 import '@echarts/component/legend'
 import '@echarts/chart/pie'
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
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              x: 'left',
              textStyle: {
                color: '#fff'
              },
              data:['直接访问','邮件营销']
          },
          series: [
              {
                  name:'访问来源',
                  type:'pie',
                  radius: ['50%', '70%'],
                  avoidLabelOverlap: false,
                  label: {
                    show: true,
                    color: '#fff',
                    position: 'center',
                    formatter: '默认显示数据'
                  },
                  data:[
                      {value:335, name:'直接访问'},
                      {value:120, name:'邮件营销'}
                  ]
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
      const el = document.querySelector('#pie')
      const pieChart = this.$chart.init(el)
      pieChart.setOption(this.options)
      //  监听窗口变化
      window.addEventListener('resize', () => {
        pieChart.resize()
      })
    },
  },
 }
 </script>

 <style lang="scss" scoped>
 .pie{
   width: 100%;
   height: 100%;
 }
 </style>

