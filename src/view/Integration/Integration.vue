<template>
	<div class="box_warpper">
		<div v-if="show" ref="divShow"></div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
      }
    },
    filters: {},
    methods: {},
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


      Number.prototype.testNum = function (val) {
        console.log(val);
        console.log(this)
      };

      let num = 0.95;
      num.testNum(5)


      try {
        console.log('success');
        throw new Error('error')
      } catch (e) {
        console.log('1');
        console.log(e)
      }

      // console.clear();
      console.log(Math.E);


      Number.prototype.toFixed46 = function (decimalPlaces, Judge = false, revision = false) {
        let num = this; //将调用该方法的数字转为字符串
        let numStr = this + '';
        if (numStr.includes('.')) {
          let splitArr = numStr.split(".");
          if (Judge) {
            if ([...splitArr[0]][0] > 0) {
              if (splitArr[0].length >= decimalPlaces) {
                decimalPlaces = 0;
              } else if (splitArr[0].length < decimalPlaces) {
                decimalPlaces = decimalPlaces - splitArr[0].length;
              }
            } else {
              let index = [...splitArr[1]].findIndex((item, index) => item > 0);
              decimalPlaces = decimalPlaces + index;
            }
            decimalPlaces = decimalPlaces >= 0 ? decimalPlaces : 0;
          }
        }
        let d = decimalPlaces || 0;
        let m = Math.pow(10, d);
        let n = +(d ? num * m : num).toFixed(8); // Avoid rounding errors
        let i = Math.floor(n), f = n - i;
        let e = 1e-8; // Allow for rounding errors in f
        let r = (f > 0.5 - e && f < 0.5 + e) ?
                ((i % 2 == 0) ? i : i + 1) : Math.round(n);
        let result = d ? r / m : r;


        if (revision) {
          let surplus = 0;
          let resultArr = (result + '').split('.');
          if (resultArr.length > 1 && resultArr[1].length < d) {
            surplus = d - resultArr[1].length;
            for (let k = 0; k < surplus; k++) {
              result = result + '' + 0
            }
          } else if (resultArr.length === 1) {
            surplus = d;
            let zero = '';
            if (surplus > 0) {
              for (let k = 0; k < surplus; k++) {
                zero += '0'
              }
              result = result + '.' + zero;
            }
          }
        }
        return result;
      };

      let number = 0.02995;
      console.log(number.toFixed46(2, true, true));


      class c {
        static cc(n) {
          this.n = n;
        }

        constructor({n = 'g'} = {}) {
          this.n = n
        }

      }

      let nc = new c({n: 'p'});

      // console.log(nc.cc('new之前执行'));
      console.log(c.cc('未new执行'))


      function f({n = 'g'}) {
        console.log(n);
        console.log(arguments)
      }


      f({});

      let json = [1, 0, 0, 0, 0, 0, 2, 3, 0, 4, 5, 6, 0, 7, 8, 9];
      json.forEach((item, index) => {
        if (item === 0) {
          json.splice(index, 1)
        }
      });
      console.log(json);
      setTimeout(() => {
        this.show = true;
        this.$nextTick(() => {
          console.log(this.$refs.divShow)
        });
      }, 1000)


      console.log(this)
    }
  }
</script>

<style lang="less" scoped>
	.box_warpper {
		.box {
			width: 500px;
			height: 500px;
			position: relative;

			.content {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				/*margin:auto;*/
				width: 100px;
				height: 100px;
				background: red;
			}
		}
	}
</style>
