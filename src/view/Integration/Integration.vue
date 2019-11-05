<template>
  <div class="box_warpper">
    <div v-html="libraryHtml"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        libraryHtml: "",
        id: 10,
      }
    },
    filters: {},
    methods: {
    },
    components: {},
    mounted() {
      let arr = [1, 2, 3, 4, 5, 6];
      // some()是对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true。
      console.log(arr.some((item, index, array) => {
        console.log('item=' + item + ',index=' + index + ',array=' + array);
        return item > 3;
      }));

      // every()是对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true。
      console.log(arr.every((item, index, array) => {
        console.log('item=' + item + ',index=' + index + ',array=' + array);
        return item > 3;
      }));


      // 常量声明对于复合类型的数据只能保证这个指针是固定的（即总是指向另
      // 一个固定的地址），至于它指向的数据结构是不是可变的，
      // 就完全不能控制了 需要时刻可以使用freeze冻结对象
      const testArr = Object.freeze([{
        name: "yy",
        age: 18,
        sex: "n"
      }]);

      // testArr[1]="yw";

      // 但也只能冻结外层，对于数组中的对象无作用仍然可以修改
      // testArr[0].name="yw";

      // console.log(testArr)


      //展开运算符 数组带入max
      // let a=[1,2,3,4,5];
      // console.log(Math.max(...a))

      // arguments代表函数内所有的参数
      // let test = [[7, 8, 9, 0], 2, 3, 4, 5, 6];

      // function f(test) {
      //   for (let i = 0; i < test.length; i++) {
      //     console.log(arguments)
      //   }
      // }
      // f(test)


      function ags() {
        console.log(arguments)
      }

      let s = "123";
      let z = "456";

      ags`a s d ${s} as ${z}`;

      // f(1,2,3,4,5)

      // js 能精确显示的最大数值9007199254740992
      // console.log(9007199254740993)

      // 箭头函数没有this，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
      // let obj = {
      //   age: 18,
      //   jian: () => {
      //     console.log(this.age)
      //   }
      // };
      //
      // obj.jian();

     //  函数直接或间接调用自身称之为递归
     //  function factorial(n) {
     //    if (n === 1) return 1;
     //    return n * factorial(n - 1);
     //  }
     //
     // console.log(factorial(5))

      let arrayLike = {
        '1': 'a',
        '0': 'b',
        '2': 'c',
        length: 3
      };
      // console.log(arrayLike.filter((x)=> x))
      // console.log(Array.from(arrayLike))
      // console.log([...arrayLike])


      Number.prototype.testNum=function (val) {
        console.log(val);
        console.log(this)
      };

      let num=0.95;
      num.testNum(5)
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
