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
          "xAxis": {"min": -0.5, "max": 5.5},
          "yAxis": {
            min:-200,
            max:200,
            "plotLines": [{
              "color": "black",
              "dashStyle": "dot",
              "width": 2,
              "value": 108.9,
              "label": {"align": "right", "style": {"fontStyle": "italic"}, "text": "N+S=108.9", "x": 2},
              "zIndex": 3
            }, {
              "color": "black",
              "dashStyle": "dot",
              "width": 2,
              "value": -50.69,
              "label": {"align": "right", "style": {"fontStyle": "italic"}, "text": "N-S=-50.69", "x": 2},
              "zIndex": 3
            }, {
              "color": "black",
              "dashStyle": "dot",
              "width": 2,
              "value": 188.7,
              "label": {"align": "right", "style": {"fontStyle": "italic"}, "text": "N+2S=188.7", "x": 2},
              "zIndex": 3
            }, {
              "color": "black",
              "dashStyle": "dot",
              "width": 2,
              "value": -130.5,
              "label": {"align": "right", "style": {"fontStyle": "italic"}, "text": "N-2S=-130.5", "x": 2},
              "zIndex": 3
            }, {
              "color": "black",
              "dashStyle": "dot",
              "width": 2,
              "value": 268.5,
              "label": {"align": "right", "style": {"fontStyle": "italic"}, "text": "N+3S=268.5", "x": 2},
              "zIndex": 3
            }, {
              "color": "black",
              "dashStyle": "dot",
              "width": 2,
              "value": -210.29,
              "label": {"align": "right", "style": {"fontStyle": "italic"}, "text": "N-3S=-210.29", "x": 2},
              "zIndex": 3
            }, {
              "color": "black",
              "dashStyle": "dot",
              "width": 2,
              "value": "29.1",
              "label": {"align": "right", "style": {"fontStyle": "italic"}, "text": "N=29.1", "x": 2},
              "zIndex": 3
            }]
          },
          "title": {"text": ""},
          "series": [{
            "type": "line",
            "name": "",
            "data": [[1, 1], [2, 2], [3, 3], [4, 6], [5, 9], [6, 4], [7, 8], [8, 2], [9, 5], [10, 2], [11, 4], [12, 8], [13, 52], [14, 5], [15, 8], [16, 30], [17, 5], [18, 54], [19, 5], [20, 6], [21, 2], [22, 4], [23, 55], [24, 2], [25, 5], [26, 85], [27, 25], [28, 25], [29, 5], [30, 445]],
            "marker": {"enabled": false},
            "states": {"hover": {"lineWidth": 0}},
            "enableMouseTracking": false
          }, {"type": "scatter", "name": "", "data": [1, 2, 3, 4, 5, 6], "marker": {"radius": 4}}]
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
    #container {
      margin-top: 30px;
      width: 800px;
      height: 500px;
    }
  }
</style>
