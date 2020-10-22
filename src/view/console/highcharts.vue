<template>
	<div class="box_highcharts __absolute view">
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
          "xAxis": {},
          "yAxis": {
            "min": 43.91,
            "max": 166.11,
            "plotLines": [{
              "color": "black",
              "dashStyle": "dot",
              "width": 2,
              "value": 108.71,
              "label": {"align": "right", "style": {"fontStyle": "italic"}, "text": "N+S=108.71", "x": 2},
              "zIndex": 3
            }, {
              "color": "black",
              "dashStyle": "dot",
              "width": 2,
              "value": 101.31,
              "label": {"align": "right", "style": {"fontStyle": "italic"}, "text": "N-S=101.31", "x": 2},
              "zIndex": 3
            }, {
              "color": "black",
              "dashStyle": "dot",
              "width": 2,
              "value": 112.41,
              "label": {"align": "right", "style": {"fontStyle": "italic"}, "text": "N+2S=112.41", "x": 2},
              "zIndex": 3
            }, {
              "color": "black",
              "dashStyle": "dot",
              "width": 2,
              "value": 97.61,
              "label": {"align": "right", "style": {"fontStyle": "italic"}, "text": "N-2S=97.61", "x": 2},
              "zIndex": 3
            }, {
              "color": "black",
              "dashStyle": "dot",
              "width": 2,
              "value": 116.11,
              "label": {"align": "right", "style": {"fontStyle": "italic"}, "text": "N+3S=116.11", "x": 2},
              "zIndex": 3
            }, {
              "color": "black",
              "dashStyle": "dot",
              "width": 2,
              "value": 93.91,
              "label": {"align": "right", "style": {"fontStyle": "italic"}, "text": "N-3S=93.91", "x": 2},
              "zIndex": 3
            }, {
              "color": "black",
              "dashStyle": "dot",
              "width": 2,
              "value": 105.01,
              "label": {"align": "right", "style": {"fontStyle": "italic"}, "text": "N=105.01", "x": 2},
              "zIndex": 3
            }]
          },
          "title": {"text": ""},
          "series": [{
            "type": "spline",
            "name": "",
            "data": [[0, 100], [1, 102], [2, 103], [3, 102], [4, 101], [5, 100], [6, 108], [7, 110], [8, 105], [9, 106], [10, 104], [11, 103], [12, 105], [13, 108], [14, 107], [15, 101], [16, 105], [17, 99], [18, 111], [19, 102], [20, 101], [21, 106], [22, 104], [23, 106], [24, 108], [25, 110], [26, 115], [27, 110], [28, 104], [29, 105]],
            "marker": {"enabled": false},
            "states": {"hover": {"lineWidth": 0}},
            "enableMouseTracking": false
          }, {"type": "scatter", "name": "", "data": [109, 105, 109, 151], "marker": {"radius": 4}}]
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
	.box_highcharts {
		#container {
			margin-top: 30px;
			width: 800px;
			height: 500px;
		}
	}
</style>
