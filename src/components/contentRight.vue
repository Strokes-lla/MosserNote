<template>
	<div class="box_warpper inlineBlock __relative">
		<div class="boxTop">

		</div>
		<div class="boxBottom mt20">

		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    filters: {},
    methods: {},
    components: {},
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
	.box_warpper {
		vertical-align: top;
		left: 10px;

		> div {
			width: 290px;
			border-radius: 10px;
			background: rgba(242, 245, 248, 0.95);
			padding: 10px;
		}

		.boxTop {
			height: 300px;
		}

		.boxBottom {
			height: 500px;
		}
	}
</style>
