<template>
  <div class="box_warpper">
    <video src="" autoplay controls loop preload></video>
  </div>
</template>

<script>
  import home from "../../../api/home"

  export default {
    data() {
      return {}
    },
    filters: {},
    methods: {
      getVideo() {
        let data = {
          pageNo: 1,
          pageSize: 10
        };
        home.getVideo(data).then((res) => {
          console.log(res)
        })
      },
    },
    components: {},
    mounted() {
      this.getVideo()
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
    .playWnd {
      border: solid 1px red;
      width: 1000px;
      height: 600px;
    }
  }
</style>
