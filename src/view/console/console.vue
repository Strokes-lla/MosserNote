<template>
  <div class="box_console">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <MaskModular :modularList="modularList" @getIndex="getIndex"></MaskModular>
      </swiper-slide>
      <swiper-slide>
        <consoles :modularIndex="modularIndex"></consoles>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import MaskModular from "../../components/MaskModular";
  import consoles from "../../components/console/consoles";

  export default {
    data() {
      return {
        modularIndex: null,
        modularList: [{
          icon: 'E',
          text: 'ECMAScript6',
        }, {
          icon: 'V',
          text: 'vue',
        }, {
          icon: 'I',
          text: 'Integration',
        }, {
          icon: 'H',
          text: 'highcharts',
        }, {
          icon: 'C',
          text: 'Canvas',
        }],
        swiperOptions: {
          mousewheel: true,
          direction: 'vertical',
        }
      }
    },
    filters: {},
    methods: {
      getIndex(index) {
        this.modularIndex = index;
        this.swiper.slideTo(1, 500, false)
      }
    },
    components: {
      MaskModular,
      consoles
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
  .box_console {
    height: 100%;
  }
</style>
