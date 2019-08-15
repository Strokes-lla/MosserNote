<template>
  <div class="box_warpper">
    <p v-for="(item,index) in arr" @click="change(index)">{{item}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arr:[1,2,3,4,5,6,7],
        obj: {},
        test: {
          ['h' + 'ello']() {
            console.log("属性名表达式可用于方法名拼接")
          }
        },
        obj1: {
          get foo() {
          },
          set foo(x) {
          }
        },
        yy: {
          name: "yy",
          sex: "女",
          age: 18,
          '喜欢': "yw",
        }
      }
    },
    filters: {},
    methods: {
      change(index){
        // this.arr[index]=9;
        // this.$set(object,key,value);
        this.$set(this.arr,index,9);
        console.log(this.arr);
      },
      f(x, y) {
        return {x: x, y: y};
      },
      Set() {
        this.obj.foo = true;
        this.obj['这是一个Key'] = 123;
        this.obj['这是一个拼接的' + 'Key'] = 123;
        return this.obj
      },
      sayName() {
        console.log('hello!');
      },
      test1() {
        alert(1)
      }
    },
    components: {},
    mounted() {
      //简介表达式
      console.log(this.f(1, 2));
      //属性名表达式
      // console.log(this.Set(1, 2));
      // console.log('这是一个Key   ' + this.obj['这是一个Key']);
      this.test.hello();


      //注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]，这一点要特别小心。
      const keyA = {a: 1};
      const keyB = {b: 2};

      const myObject = {
        [keyA]: 'valueA',
        [keyB]: 'valueB'
      };
      console.log(myObject);

      //方法的name属性
      console.log(this.sayName.name);

      // 如果对象的方法使用了取值函数（getter）和存值函数（setter）， *****
      // 则name属性不是在该方法上面，而是该方法的属性的描述对象的get和
      // set属性上面，返回值是方法名前加上get和set。

      // obj.foo.name
      // TypeError: Cannot read property 'name' of undefined

      let descriptor = Object.getOwnPropertyDescriptor(this.obj1, 'foo');
      console.log(descriptor.get.foo);
      console.log(descriptor.set.foo);


      this.yy[Symbol()] = 'yy love';
      this.yy[Symbol()] = 'yw love';
      let a = Symbol();
      this.yy[a] = 'yo love';
      console.log(this.yy);

      //按位非 适用于其他所有基本数据类型唯独不实用于Symbol
      // console.log(~'1');

      //Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
      console.log(Object.keys(this.yy));

      //Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
      console.log(Object.getOwnPropertyNames(this.yy));

      //Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。
      console.log(Object.getOwnPropertySymbols(this.yy));
      console.log(this.yy[a]);
      console.log(this.yy[Object.getOwnPropertySymbols(this.yy)[0]]);
      //Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。
      console.log(Reflect.ownKeys(this.yy));


      // super 关键字  *****
      // const proto = {
      //   foo: 'hello'
      // };
      //
      // const obj = {
      //   foo: 'world',
      //   find() {
      //     return super.foo;
      //   }
      // };
      //
      // Object.setPrototypeOf(obj, proto);
      // console.log(obj);
      // console.log(obj.find())


      // 注意，解构赋值的拷贝是浅拷贝，即如果一个键的值是复合类型的值（数组、对象、函数）、
      // 那么解构赋值拷贝的是这个值的引用，而不是这个值的副本。

      let obj = {a: {b: 1}};
      let {...x} = obj;
      obj.a.b = 2;
      // console.log(x.a.b);


      // console.log("=======================");


      // let o1 = { a: 1 };
      // let o2 = { b: 2 };
      // o2.__proto__ = o1;
      // console.log(o2);
      // let { ...o3 } = o2;
      // console.log(o3);
      // console.log(o3.a);

      // var person = function(name){
      //   this.name = name
      // };
      //
      // function yy(){
      //
      // }
      //
      // person.prototype.getName = function(){
      //   return this.name;
      // };
      // var Li = new person('LiMing');
      //
      // console.log(Li)
      console.log(this.$store.state.token);
    }
  }
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
