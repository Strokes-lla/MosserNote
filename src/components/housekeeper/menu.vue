<template>
	<div ref="content" class="box_content">
		<div :style="{top:-(index*81)+'px'}" class="__relative box mb20 top0 transition"
				 v-for="(item,index) in list">
			<div class="inlineBlock pointer" @click="Jump(item.url)">
				<img v-if="item.ico!==''" :src="item.ico" class="inlineBlock mr10"/>
				<img v-else src="../../assets/img/defico.png" class="inlineBlock mr10"/>
				<span>{{item.str}}</span>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {
            ico: '',
            str: 'WS 破解',
            url: 'http://lookdiv.com/'
          }, {
            ico: "https://csdnimg.cn/public/favicon.ico",
            str: 'REM配置方法',
            url: 'https://blog.csdn.net/a419419/article/details/78415151'
          }, {
            ico: "",
            str: 'vue移动端口访问设置',
            url: 'https://www.jianshu.com/p/93d63e4d679a'
          }, {
            ico: "https://www.html.cn/favicon.ico",
            str: 'CSS3 Flexbox 布局完全指南(图解 Flexbox 布局详细教程)',
            url: 'https://www.html.cn/archives/8629'
          }, {
            ico: "https://www.html.cn/favicon.ico",
            str: 'CSS Grid 布局完全指南(图解 Grid 详细教程)',
            url: 'https://www.html.cn/archives/8510'
          }, {
            ico: "https://csdnimg.cn/public/favicon.ico",
            str: 'assgin深浅拷贝问题',
            url: 'https://blog.csdn.net/weixin_33897722/article/details/88205555'
          }, {
            ico: "",
            str: 'class的私有方法',
            url: 'https://www.jianshu.com/p/36b7885d4a1e'
          }, {
            ico: "",
            str: 'JSON文件读写',
            url: 'https://www.cnblogs.com/gamedaybyday/p/9906542.html'
          }, {
            ico: "https://csdnimg.cn/public/favicon.ico",
            str: 'node server',
            url: 'https://blog.csdn.net/chen_soldier/article/details/87855187'
          }, {
            ico: "",
            str: 'express-generator',
            url: 'https://www.jianshu.com/p/a77b806b0d14'
          }, {
            ico: "",
            str: '响应式图片',
            url: 'http://www.ruanyifeng.com/blog/2019/06/responsive-images.html'
          }, {
            ico: "",
            str: 'colorize 一个能给黑白照上色的网站',
            url: 'https://colorize.cc/'
          }, {
            ico: "",
            str: '构造函数',
            url: 'https://www.jianshu.com/p/95a5faee17f1'
          }, {
            ico: "",
            str: '原型对象',
            url: 'https://www.jianshu.com/p/dee9f8b14771'
          }, {
            ico: "https://www.fancynode.com.cn/siteicon/PxCook.png",
            str: 'pxcook',
            url: 'https://www.fancynode.com.cn/pxcook'
          }, {
            ico: "",
            str: 'github仓库管理',
            url: 'https://www.jianshu.com/p/6681695da45b'
          }, {
            ico: "",
            str: 'three.js中文文档1',
            url: 'http://www.hewebgl.com/article/articledir/1'
          }, {
            ico: "",
            str: 'three.js中文文档2',
            url: 'http://www.yanhuangxueyuan.com/threejs/docs/index.html#manual/zh/introduction/Creating-a-scene'
          }, {
            ico: "",
            str: '逐行剖析 Vue.js 源码',
            url: 'https://nlrx-wjc.github.io/Learn-Vue-Source-Code/start/'
          }, {
            ico: "",
            str: '显示所有在天上的飞机的位置',
            url: 'https://www.rainymood.com/'
          }, {
            ico: "http://www.cbaigui.com/wp-content/uploads/2020/04/cropped-%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200216143649-32x32.jpg",
            str: '中国妖怪百集',
            url: 'http://www.cbaigui.com/'
          }, {
            ico: "http://www.cbaigui.com/wp-content/uploads/2020/04/cropped-%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200216143649-32x32.jpg",
            str: '中国妖怪百集',
            url: 'http://www.cbaigui.com/'
          }, {
            ico: "https://csdnimg.cn/public/favicon.ico",
            str: 'js-cookie',
            url: 'https://blog.csdn.net/qq_20802379/article/details/81436634'
          }
        ],
      }
    },
    filters: {},
    methods: {
      Jump(url) {
        window.open(url)
      },
    },
    components: {},
    mounted() {
      setTimeout(() => {
        this.$nextTick(() => {
          this.$refs.content.childNodes.forEach((item, index) => {
            item.style.top = 0
          })
        })
      }, 100)
    }
  }
</script>

<style lang="less" scoped>
	.box_content {
		text-align: right;
		height: 600px;
		overflow-y: scroll;

		.transition {
			transition: all 0.5s;
			-moz-transition: all 0.5s; /* Firefox 4 */
			-webkit-transition: all 0.5s; /* Safari 和 Chrome */
			-o-transition: all 0.5s; /* Opera */
		}

		.box {
			> div {
				border-radius: 5px;
				box-shadow: 0 3px 12px rgba(27, 31, 35, .15), 0 0 1px rgba(27, 31, 35, .2);
				background: white;
				padding: 20px;
				overflow: hidden;
			}

			> div:hover {
				span {
					text-decoration: underline;
				}
			}

			img {
				vertical-align: middle;
				width: 17px;
				height: 17px;
			}
		}
	}
</style>
