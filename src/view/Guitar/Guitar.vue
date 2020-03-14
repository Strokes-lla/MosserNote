<template>
  <div class="box_warpper">
    <p class="f28 bold">音调:</p>
    <div class="__relative ml50 mt20" style="line-height: 32px;">
      <div class="box tc f22 inlineBlock __relative"
           v-for="(item,index) in tone">
        <p>{{item.num}}</p>
        <p>{{item.str}}</p>
        <p>{{item.letter}}</p>
        <div v-if="item.half" class="__absolute line heightCenter" style="margin-top: -1px;right:-10px;"></div>
      </div>
    </div>
    <p class="f28 bold">弦:</p>
    <div class="__relative mt20" style="line-height: 32px;margin-left:65px;">
      <div class="right tc f22">
        <div v-for="(item,index) in string" class="mb30" v-html="separate(item)"></div>
      </div>
      <div class="__absolute content">
        <div v-for="(item,index) in 6"
             class="__relative w100"
             :class="index!==5 ? 'borderBottom':''"
             style="height:63px;">
          <div v-for="(val,num) in 3"
               class="t0 Full tc"
               :class="num!==2 ? (index!==5 ? 'borderRight __absolute':'__absolute'):'__relative'"
               style="width:33.333%;"
               :style="{left:(num*33.333)+'%'}">
            <span class="f22 __relative cover">{{index,num | toDot}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tone: [
          {
            num: 1,
            str: '哆',
            letter: 'C'
          }, {
            num: 2,
            str: '瑞',
            letter: 'D'
          }, {
            num: 3,
            str: '咪',
            letter: 'E',
            half: true
          }, {
            num: 4,
            str: '发',
            letter: 'F'
          }, {
            num: 5,
            str: '梭',
            letter: 'G'
          }, {
            num: 6,
            str: '拉',
            letter: 'A'
          }, {
            num: 7,
            str: '西',
            letter: 'B',
            half: true
          }, {
            num: 1,
            str: '哆',
            letter: 'C'
          }
        ],
        string: ['E 咪 3˙', 'B 西 7', 'G 梭 5', 'D 瑞 2', 'A 拉 6.', 'E 咪 3.'],
      }
    },
    filters: {
      toDot(x, y) {
        let Location = [
          {
            x: 0,
            y: 0,
            str: '4˙'
          }, {
            x: 0,
            y: 2,
            str: '5˙'
          }, {
            x: 1,
            y: 0,
            str: '1˙'
          }, {
            x: 1,
            y: 2,
            str: '2˙'
          }, {
            x: 2,
            y: 1,
            str: '6'
          }, {
            x: 3,
            y: 1,
            str: '3'
          }, {
            x: 3,
            y: 2,
            str: '4'
          }, {
            x: 4,
            y: 1,
            str: '7'
          }, {
            x: 4,
            y: 2,
            str: '1'
          }, {
            x: 5,
            y: 0,
            str: '4.'
          }, {
            x: 5,
            y: 2,
            str: '5.'
          }
        ];
        let obj = Location.find((item, index) => item.x === x && item.y === y);
        if (obj) {
          return obj.str
        }
        return '';
      },
    },
    methods: {
      separate(item) {
        let str = item.split(' ');
        let dom = `<span class="force">${str[0]}</span><span class="force">${str[1]}</span><span class="force">${str[2]}</span>`;
        return dom
      }
    },
    components: {},
    mounted() {
      // .˙

    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
    .box {
      width: 70px;
    }

    .line {
      width: 20px;
      height: 2px;
      background: black;
    }

    .right {
      width: 90px;
    }

    .content {
      width: 750px;
      height: 315px;
      border: solid 1px black;
      border-bottom: none;
      top: 15px;
      left: 100px;
    }

    .borderBottom {
      border-bottom: 1px solid black;
    }

    .borderRight {
      border-right: 1px solid black;
    }

    .cover {
      background: #F2F5F8;
      top: -17px;
    }
  }
</style>
