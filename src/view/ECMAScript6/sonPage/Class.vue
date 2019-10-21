<template>
  <div class="box_warpper">
    <img
      srcset="../../../assets/img/bg_1.jpg 1920w"
      sizes="(max-width: 440px) 100vw,
            (max-width: 900px) 33vw,
            1000px"
      src="../../../assets/img/bg_1.jpg"/>
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
      class Point {
        constructor(x, y) {
          this.x = x;
          this.y = y;
        }

        toString() {
          return '(' + this.x + ', ' + this.y + ')';
        }
      }

      let p = new Point();
      console.log(p.constructor(1, 2));
      console.log(p.toString());

      //hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性
      let obj = {
        a: 1,
        b: 2,
        c: 3
      };
      console.log(obj.hasOwnProperty('a'));


      class Logger {
        constructor() {
          this.printName = this.printName.bind(this);
        }

        printName(name = 'there') {
          this.print(`Hello ${name}`);
        }

        print(text) {
          console.log(text);
        }
      }

      const logger = new Logger();
      console.log(logger.printName());
      const {printName} = logger;
      console.log(printName());


      class Foo {
        static classMethod() {
          return 'hello';
        }

        cos() {
          return 'cos'
        }
      }

      console.log(Foo.classMethod());// 'hello'
      // console.log(Foo.cos()); // 报错
      let foo = new Foo();
      console.log(foo.cos());

      // foo.classMethod() //报错


      class soo {
        static bar() {
          this.bz();
        }

        static bz() {
          console.log('111');
        }

        baz() {
          console.log('world');
        }
      }

      soo.bar(); // hello

      this.cos()


      let close = {
        name: "yy",
        age: function (r) {
          return r
        }
      };
      console.log(close.age());

      class s {
        constructor() {
          let i = Symbol('i'), z = 'num';

          class t {
            static is = "hello";

            constructor() {
              this[i] = "my Symbol";
              this[z] = 2
            }

            getI() {
              return this[i] = 1
            }

            setI(num) {
              this[i] = num
            }
          }

          // this.t=t;
          return new t()
        }


        // getT(){
        //    return this.t
        // }
      }

      let test = new s();
      test.num = 3;
      // console.log(test[i]);  error
      console.log(test[Object.getOwnPropertySymbols(test)[0]]);

      // console.log(test[z]);  3
      // console.log(test.num)
      // console.log(test.getT().is);


      //继承
      class yy {
        constructor() {
          this.name = "yy";
          this.age = 18;
        }
      }

      class yw extends yy {
        constructor(data) {
          super(data);
          this.sex = "n";
        }
      }

      let ys = new yw();
      console.log(ys.constructor());
      // Object.getPrototypeOf方法可以用来从子类上获取父类。
      console.log(Object.getPrototypeOf(yw) === yy);


      class A {
        constructor() {
          this.p = 2;
        }
        s() {
          return this.p
        }
      }

      class B extends A {
        constructor(data) {
          super(data);
        }

        t() {
          return super.s()
        }
        get m() {
          return super.s();
        }

        static f() {
          return super.prototype
        }
      }
      let b = new B();
      // console.log(B.f().s())
      console.log(b.t());
    }
  }

  // function f(x,y) {
  //   this.x=x;
  //   this.y=y;
  // }
  // f.prototype.ss=function () {
  //   return this.x
  // };
  // let F=new f(1,2);
  // // console.log('==========='+F.ss());
  //
  //
  // function prot(v,k) {
  //   this.name=v;
  //   this.age=k
  // }
  // prot.prototype.cos=function () {
  //   console.log(this.name);
  //   console.log(this.age)
  // };
  // let pro = new prot('yy','18');
</script>

<style lang="less" scoped>
  .box_warpper {
  }
</style>
