<template>
  <div ref="content" class="box_content">
    <div :style="{top:-(index*81)+'px'}" class="__relative box mb20 top0 transition5"
         v-for="(item,index) in list">
      <div class="inlineBlock pointer" @click="Jump(item.url)">
        <img v-if="item.ico!==''" :src="item.ico" class="inlineBlock mr10 __relative" style="top:-1px;"/>
        <img v-else src="../../assets/img/defico.png" class="inlineBlock mr10 __relative" style="top:-1px;"/>
        <span :title="item.str">{{item.str}}</span>
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
            str: '色輪、調色盤產生器 | Adobe Color',
            url: 'https://color.adobe.com/zh/create/color-wheel'
          },
          {
            ico: 'https://www.remove.bg/favicon-32x32.png',
            str: '消除图片中的背景 – remove.bg',
            url: 'https://www.remove.bg/zh'
          },
          {
            ico: 'https://www.pexels.com/favicon.ico',
            str: '免费素材图片',
            url: 'https://www.pexels.com/zh-cn/'
          },
          {
            ico: 'http://report.seedsufe.com/favicon.ico',
            str: '报告查一查',
            url: 'http://report.seedsufe.com/#/report'
          },
          {
            ico: 'https://myicon.io/favicons/apple-touch-icon.png',
            str: 'My Icon',
            url: 'https://myicon.io/'
          },
          {
            ico: '',
            str: 'Goobe - 为程序员服务的互联网搜索引擎',
            url: 'https://goobe.io/'
          },
          {
            ico: 'https://renzhezhilu.gitee.io/kakacss/favicon.png',
            str: 'KalaCss',
            url: 'https://renzhezhilu.gitee.io/kakacss/'
          },
          {
            ico: 'https://animate.style/img/favicon.ico',
            str: 'Animate',
            url: 'https://animate.style/'
          },
          {
            ico: 'https://authing.cn/favicon.ico',
            str: 'Authing 第三方登录',
            url: 'https://authing.cn/pricing'
          },
          {
            ico: 'https://www.airpano.ru/favicon.ico',
            str: '云旅游',
            url: 'http://www.airpano.com/360photo/orenburg-shaytan-tau/'
          },
          {
            ico: 'https://www.deepl.com/img/favicon/favicon_16.png',
            str: 'DeepL 翻译',
            url: 'https://www.deepl.com/translator'
          },
          {
            ico: 'https://www.wikihow.com/skins/WikiHow/wH-initials_152x152.png',
            str: 'wikiHow 你可以信赖的万事指南',
            url: 'https://zh.wikihow.com/%E9%A6%96%E9%A1%B5#'
          },
          {
            ico: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1560855683137/85XtBDDa2.png?auto=format&q=60&fm=png',
            str: '您可能想使用的10个鲜为人知的Web API',
            url: 'https://blog.greenroots.info/10-lesser-known-web-apis-you-may-want-to-use-ckejv75cr012y70s158n85yhn'
          },
          {
            ico: '',
            str: 'css 渐变魔法',
            url: 'https://www.gradientmagic.com/'
          },
          {
            ico: '',
            str: '奇点云',
            url: 'http://test-jenkins.startdt.com/'
          },
          {
            ico: '',
            str: '管理系统',
            url: 'http://doc.startdt.net/pages/viewpage.action?pageId=2230509'
          },
          {
            ico: '',
            str: '奇点云gitLab',
            url: 'http://git.startdt.net/'
          },
          {
            ico: '',
            str: '一个听下雨声的网站',
            url: 'https://rainymood.com/'
          },
          {
            ico: 'http://www.ruanyifeng.com/favicon.ico',
            str: '阮一峰个人网站',
            url: 'http://www.ruanyifeng.com/home.html'
          },
          {
            ico: 'https://y.qq.com/favicon.ico',
            str: '五月天-五月天 突然好想见到你 Mayday 2020 live in the sky 线上演唱会 (Live)',
            url: 'https://y.qq.com/n/yqq/mv/v/k0034mj6ty2.html'
          },
          {
            ico: 'https://www.avatardata.cn/favicon.ico',
            str: '阿凡达数据',
            url: 'https://www.avatardata.cn/'
          }, {
            ico: 'https://es6.ruanyifeng.com/favicon.ico',
            str: 'ECMAScript6 入门',
            url: 'https://es6.ruanyifeng.com/'
          }, {
            ico: 'https://assets.segmentfault.com/v-5eaa9db5/global/img/static/touch-icon.png',
            str: '给自己的网站添加网易云音乐歌单',
            url: 'https://segmentfault.com/a/1190000016786093'
          }, {
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
            ico: "http://www.ruanyifeng.com/favicon.ico",
            str: 'Flex布局教程：语法篇',
            url: 'http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html'
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
            str: '下雨天的声音',
            url: 'https://www.rainymood.com/'
          }, {
            ico: "http://www.cbaigui.com/wp-content/uploads/2020/04/cropped-%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200216143649-32x32.jpg",
            str: '中国妖怪百集',
            url: 'http://www.cbaigui.com/'
          }, {
            ico: "https://www.allhistory.com/favicon.ico",
            str: '全历史',
            url: 'https://www.allhistory.com/'
          }, {
            ico: "https://www.remove.bg/favicon.ico?v=YAXaAv7pao",
            str: '一个抠图网站',
            url: 'https://www.remove.bg/zh'
          }, {
            ico: "https://www.airpano.ru/favicon.ico",
            str: '全球风景360°',
            url: 'https://www.airpano.com/'
          }, {
            ico: "https://www.yikm.net/logo.png",
            str: '小霸王，其乐无穷',
            url: 'https://www.yikm.net/'
          }, {
            ico: "https://www.ear0.com/public/images/favicon.ico",
            str: '耳聆网',
            url: 'https://www.ear0.com/'
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

    .box {
      > div {
        max-width: 350px;
        border-radius: 5px;
        box-shadow: 0 3px 12px rgba(27, 31, 35, .15), 0 0 1px rgba(27, 31, 35, .2);
        background: white;
        padding: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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
