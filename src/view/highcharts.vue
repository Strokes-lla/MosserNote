<template>
  <div class="box_warpper">
    <div id="container"></div>
  </div>
</template>

<script>
  import Highcharts from 'highcharts'

  export default {
    data() {
      return {}
    },
    filters: {},
    methods: {
      init() {
        Highcharts.chart('container', {
          xAxis: {
            min: -0.5,
            max: 5.5
          },
          yAxis: {
            min: 0,
            plotLines: [{
              color: 'black',
              dashStyle: 'dot',
              width: 2,
              value: 3,
              label: {
                align: 'right',
                style: {
                  fontStyle: 'italic'
                },
                text: '正常糖的摄入量 50g/天',
                x: 2
              },
              zIndex: 3
            },{
              color: 'black',
              dashStyle: 'dot',
              width: 2,
              value: 5,
              label: {
                align: 'right',
                style: {
                  fontStyle: 'italic'
                },
                text: '正常糖的摄入量 50g/天',
                x: 2
              },
              zIndex: 3
            }]
          },
          title: {
            text: '包含趋势线的散点图'
          },
          series: [{
            type: 'line',
            name: '回归线',
            data: [[0, 1.11], [5, 4.51]],
            marker: {
              enabled: false
            },
            states: {
              hover: {
                lineWidth: 0
              }
            },
            enableMouseTracking: false
          }, {
            type: 'scatter',
            name: '观测值',
            data: [1, 5],
            marker: {
              radius: 4
            }
          }]
        });
      }
    },
    components: {},
    mounted() {
      this.init()
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
    #container{
      margin-top:30px;
      width:800px;
      height:500px;
    }
  }
</style>
