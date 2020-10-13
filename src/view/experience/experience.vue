<template>
  <div class="box_warpper __absolute top0 right0 left0 bottom0" id="map">
  </div>
</template>

<script>

  export default {
    data() {
      return {}
    },
    filters: {},
    methods: {
      initMap() {
        // GL版命名空间为BMapGL
        // 按住鼠标右键，修改倾斜角和角度
        var map = new BMapGL.Map("map");    // 创建Map实例
        map.centerAndZoom(new BMapGL.Point(120.152629, 30.258635), 20);  // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        map.setHeading(64.5);
        map.setTilt(73);
        map.setMapType(BMAP_EARTH_MAP);
      }
    },
    components: {},
    mounted() {
      this.initMap()
    },

  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
