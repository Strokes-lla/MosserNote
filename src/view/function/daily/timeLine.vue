<template>
  <div class="box_warpper mt10">
    <div style="height:50px;" class="__relative w100">
      <span class="bold">如遇面试、打团或者其它突发情况则按照时间重新分配（备注：起床和锻炼时间不可做任何变化）</span>
      <span class="__absolute bold" style="right:30px;">Days: 0</span>
    </div>
    <el-timeline>
      <el-timeline-item v-for="(item,index) in list" :key="index" :timestamp="item.time" placement="top">
        <el-card>
          <h4>{{item.content}}</h4>
          <p v-if="item.remarks!==''">备注：{{item.remarks}}</p>
          <img v-if="item.img!==''" :src="item.img" alt="">
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // list: [
        //   {
        //     time: '2020/6/3 17:42',
        //     content: '高铁到上海虹桥站',
        //     remarks: '出站找住的地方，放行李',
        //     img: '',
        //   }, {
        //     time: '2020/6/3 19:00',
        //     content: '轻住酒店(雅悦店)上海市黄浦区山西南路280号',
        //     remarks: '地方不太好找，导航加摸路吧',
        //     img: '',
        //   }, {
        //     time: '-----',
        //     content: '此条以下所有时间，当遇到街头卖唱类场景时一率按需调整',
        //     remarks: '',
        //     img: '',
        //   }, {
        //     time: '2020/6/3 19:30',
        //     content: '外滩（2、10号线南京东路站）',
        //     remarks: '外滩观光隧道是个坑，千万别花冤枉钱。',
        //     img: require('../../../assets/img/shanghai/1.png'),
        //   }, {
        //     time: '2020/6/3 21:30',
        //     content: '坐车回酒店休息，想干点啥干点啥',
        //     remarks: '手机电量充满，明天早上8点的闹钟不要忘记定',
        //     img: '',
        //   }, {
        //     time: '2020/6/4 8:00',
        //     content: '喜马拉雅，起床洗漱，一个小时后出门',
        //     remarks: '打开电脑启动MosserNote，打开TeamView',
        //     img: '',
        //   }, {
        //     time: '2020/6/4 9:00',
        //     content: '出门',
        //     remarks: '出发东方明珠',
        //     img: '',
        //   }, {
        //     time: '2020/6/4 10:00',
        //     content: '东方明珠（2号线陆家嘴站）',
        //     remarks: '看看就行，我就不想上去了',
        //     img: '',
        //   }, {
        //     time: '2020/6/4 10:00-11:30',
        //     content: '周围逛逛，如果找到吃午饭的地方就吃饭',
        //     remarks: '',
        //     img: '',
        //   }, {
        //     time: '2020/6/4 12:30',
        //     content: '出发人民公园',
        //     remarks: '“小伙子，我闺女很不错的，985毕业月入两万你要不要考虑一下，你啥工作的呀？”“哦，我大专现在没工作刚辞职.....”',
        //     img: '',
        //   }, {
        //     time: '2020/6/4 14:00',
        //     content: '出发城隍庙/豫园（10号线豫园站）',
        //     remarks: '瞎鸡儿逛吧，反正本来就没有目标',
        //     img: '',
        //   }, {
        //     time: '2020/6/4 17:00',
        //     content: '如果可以的话折回东方明珠看夜景吧',
        //     remarks: '本来也只是为了散散心',
        //     img: '',
        //   }, {
        //     time: '2020/6/4 21:00',
        //     content: '回酒店休息到此，你肯定又造作了一天',
        //     remarks: '计算一下时间，5号是绍兴还是再留一天去‘爱情公寓’看看',
        //     img: '',
        //   }, {
        //     time: '2020/6/5 8:00',
        //     content: '起床洗漱，准备出门',
        //     remarks: '',
        //     img: '',
        //   }, {
        //     time: '2020/6/5 9:00',
        //     content: '爱情公寓（杨浦区文化佳园小区）',
        //     remarks: 'http://www.bilibili.com/video/av83472467?share_medium=android&share_source=qq&bbid=XY8E8458C397FD79DE9735CE82F8C6697C21E&ts=1591082155802',
        //     img: '',
        //   }
        // ]
        // list: [
        //   {
        //     time: '-----',
        //     content: '绍兴到达时间不定，所以按整天早晨计算',
        //     remarks: '',
        //     img: '',
        //   },
        //   {
        //     time: '2020/6/6 10:00',
        //     content: '鲁迅故里 ‘迅哥，我来看你了迅哥！’',
        //     remarks: '因为没有导游所以就自己逛吧，仔细逛/滑稽',
        //     img: '',
        //   },
        //   {
        //     time: '2020/6/6 11:30',
        //     content: '咸亨酒店，读书人的事情那能叫偷吗？',
        //     remarks: '能受到了就喝杯黄酒，不过吃饭就算了贵不贵不知道不过拐弯就是仓桥直街了',
        //     img: '',
        //   },
        //   {
        //     time: '2020/6/6 12:00',
        //     content: '仓桥直街，就在边上',
        //     remarks: '随便看看，为了吃点东西吧',
        //     img: '',
        //   },
        //   {
        //     time: '2020/6/6 13:00',
        //     content: '绍兴博物馆',
        //     remarks: '其他地方实在没啥可让我期待的',
        //     img: '',
        //   },
        //   {
        //     time: '2020/6/6 16:00',
        //     content: '回酒店',
        //     remarks: '对绍兴的期待好像只在于鲁迅故里，暂时就先写那么多吧',
        //     img: '',
        //   },
        // ],
        list: [
          {
            time: '8:00',
            content: '起床',
            remarks: '',
            img: '',
          },
          {
            time: '8:00 - 9:00',
            content: '洗漱',
            remarks: '',
            img: '',
          },
          {
            time: '9:00 - 9:40',
            content: '启动项目，查看微博知乎',
            remarks: '',
            img: '',
          },
          {
            time: '9:40 - 11:00',
            content: '刷文档，难点攻克',
            remarks: '',
            img: '',
          },
          {
            time: '11:00 - 13:00',
            content: '吃午饭，小憩',
            remarks: '',
            img: '',
          },
          {
            time: '13:00 - 17:00',
            content: '继续刷文档，持续难点攻克',
            remarks: '',
            img: '',
          },
          {
            time: '17:00 - 18:30',
            content: '吃晚饭，休息',
            remarks: '',
            img: '',
          },
          {
            time: '18:30 - 19:30',
            content: '锻炼，跑步(2q)、仰卧起坐(30)、俯卧撑(30)、平板支撑(2min)、深蹲(20)、运拳',
            remarks: '',
            img: '',
          },
          {
            time: '19:30 - 20:00',
            content: '洗澡',
            remarks: '',
            img: '',
          },
          {
            time: '20:00 - 21:30',
            content: '练琴',
            remarks: '',
            img: '',
          },
          {
            time: '21:30 - 23:00',
            content: 'DNF启动',
            remarks: '',
            img: '',
          },
          {
            time: '23:00',
            content: '睡觉',
            remarks: '',
            img: '',
          },
        ],
      }
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
  }
</style>
