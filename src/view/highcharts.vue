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
                        min: -3,
                        max: 23,
                        plotLines: [{
                            color: 'black',
                            dashStyle: 'dot',
                            width: 2,
                            value: 12,
                            label: {
                                align: 'right',
                                style: {
                                    fontStyle: 'italic'
                                },
                                text: '+1倍标准差（+1a）',
                                x: 2
                            },
                            zIndex: 3
                        }, {
                            color: 'black',
                            dashStyle: 'dot',
                            width: 2,
                            value: 6,
                            label: {
                                align: 'right',
                                style: {
                                    fontStyle: 'italic'
                                },
                                text: '-1倍标准差（+1a）',
                                x: 2
                            },
                            zIndex: 3
                        }, {
                            color: 'black',
                            dashStyle: 'dot',
                            width: 2,
                            value: 18,
                            label: {
                                align: 'right',
                                style: {
                                    fontStyle: 'italic'
                                },
                                text: '+2倍标准差（+2a）',
                                x: 2
                            },
                            zIndex: 3
                        }, {
                            color: 'black',
                            dashStyle: 'dot',
                            width: 2,
                            value: 2,
                            label: {
                                align: 'right',
                                style: {
                                    fontStyle: 'italic'
                                },
                                text: '-2倍标准差（-2a）',
                                x: 2
                            },
                            zIndex: 3
                        }, {
                            color: 'black',
                            dashStyle: 'dot',
                            width: 2,
                            value: 22,
                            label: {
                                align: 'right',
                                style: {
                                    fontStyle: 'italic'
                                },
                                text: '+3倍标准差（+3a）',
                                x: 2
                            },
                            zIndex: 3
                        }, {
                            color: 'black',
                            dashStyle: 'dot',
                            width: 2,
                            value: -3,
                            label: {
                                align: 'right',
                                style: {
                                    fontStyle: 'italic'
                                },
                                text: '-3倍标准差（-3a）',
                                x: 2
                            },
                            zIndex: 3
                        }, {
                            color: 'black',
                            dashStyle: 'dot',
                            width: 2,
                            value: 12,
                            label: {
                                align: 'right',
                                style: {
                                    fontStyle: 'italic'
                                },
                                text: '平均值',
                                x: 2
                            },
                            zIndex: 3
                        }]
                    },
                    title: {
                        text: ''
                    },
                    series: [{
                        type: 'line',
                        name: '',
                        data: [[0, 1.11], [3, 4.51], [5, 4.51], [7, 2.1]],
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
                        name: '',
                        data: [1, 3, 4, 5, 6, 7, 8, 9],
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
    #container {
      margin-top: 30px;
      width: 800px;
      height: 500px;
    }
  }
</style>
