<template>
  <div class="box_warpper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <MaskModular :modularList="modularList"></MaskModular>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  import MaskModular from "../../components/MaskModular";

  export default {
    data() {
      return {
        modularList: [{
          icon: 'el-icon-edit',
          text: 'string'
        }],
        swiperOptions: {
          direction: 'vertical',
        }
      }
    },
    filters: {},
    methods: {},
    components: {
      MaskModular
    },
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
    height: 100%;
  }
</style>
