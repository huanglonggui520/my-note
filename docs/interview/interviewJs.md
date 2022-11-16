
# JavaScript面试题
## 01-介绍JavaScript的基本数据类型
Number、String 、Boolean 、Null、Undefined

Object 是 JavaScript 中所有对象的父对象

数据封装类对象：Object、Array、Boolean、Number 和 String

其他对象：Function、Arguments、Math、Date、RegExp、Error

新类型：Symbol
## 02-说说写JavaScript的基本规范
* 不要在同一行声明多个变量
* 使用 ===或!==来比较true/false或者数值
* switch必须带有default分支
* 函数应该有返回值
* for if else 必须使用大括号
* 语句结束加分号
* 命名要有意义，使用驼峰命名法
## 03-Ajax使用
全称 ：Asynchronous Javascript And XML

所谓异步，就是向服务器发送请求的时候，我们不必等待结果，而是可以同时做其他的事情，等到有了结果它自己会根据设定进行后续操作，与此同时，页面是不会发生整页刷新的，提高了用户体验。

创建Ajax的过程：
```js
var xhr = new XMLHttpRequest();
```
创建新的Http请求（方法、URL、是否异步）
```js
xhr.open(‘get’,’example.php’,false);
```
设置响应HTTP请求状态变化的函数。
onreadystatechange事件中readyState属性等于4。

响应的HTTP状态为200(OK)或者304(Not Modified)。

发送http请求
```js
xhr.send(data);

```
取异步调用返回的数据

注意：

页面初次加载时，尽量在web服务器一次性输出所有相关的数据，只在页面加载完成之后，用户进行操作时采用ajax进行交互。

同步ajax在IE上会产生页面假死的问题。所以建议采用异步ajax。

尽量减少ajax请求次数

ajax安全问题，对于敏感数据在服务器端处理，避免在客户端处理过滤。对于关键业务逻辑代码也必须放在服务器端处理。
## 04-栈和堆的区别
栈（stack）：由编译器自动分配释放，存放函数的参数值，局部变量等；

堆（heap）：一般由程序员分配释放，若程序员不释放，程序结束时可能由操作系统释放。
## 05-谈谈this的理解
* this总是指向函数的直接调用者（而非间接调用者）

* 如果有new关键字，this指向new出来的那个对象

* 在事件中，this指向目标元素，特殊的是IE的attachEvent中的this总是指向全局对象window。
## 06-eval是做什么的
它的功能是把对应的字符串解析成JS代码并运行；应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。

例如
```js
eval("x=10;y=20;document.write(x*y)")
// 将2+2解析成js运行
document.write("<br>" + eval("2+2"))
```
## 07-什么是window对象? 什么是document对象
window对象代表浏览器中打开的一个窗口。

document对象代表整个html文档。实际上，document对象是window对象的一个属性。
## 08-null，undefined的区别
null表示一个对象被定义了，但存放了空指针，转换为数值时为0。

undefined表示声明的变量未初始化，转换为数值时为NAN。

typeof(null) – object;

typeof(undefined) – undefined
## 09-什么是闭包（closure），为什么要用它
闭包指的是一个函数可以访问另一个函数作用域中变量。常见的构造方法，是在一个函数内部定义另外一个函数。内部函数可以引用外层的变量；外层变量不会被垃圾回收机制回收。

注意，闭包的原理是作用域链，所以闭包访问的上级作用域中的变量是个对象，其值为其运算结束后的最后一个值。

优点：避免全局变量污染。

缺点：容易造成内存泄漏。
```js
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}
var myFunc = makeFunc();
myFunc();   //输出Mozilla
```
myFunc 变成一个闭包。
闭包是一种特殊的对象。它由两部分构成：函数，以及创建该函数的环境。环境由闭包创建时在作用域中的任何局部变量组成。

在我们的例子中，myFunc 是一个闭包，由 displayName 函数和闭包创建时存在的 “Mozilla” 字符串形成。
## 10-new操作符具体干了什么呢
（1） 创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。

（2） 属性和方法被加入到 this 引用的对象中。

（3） 新创建的对象由 this 所引用，并且最后隐式的返回 this
## 11-介绍防抖节流原理、区别以及应用，并用JavaScript进行实现
1）防抖
* 原理：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
* 适用场景：
    1.按钮提交场景：防止多次提交按钮，只执行最后提交的一次
    2.搜索框联想场景：防止联想发送请求，只发送最后一次输入
* 简易版实现 
```js

function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout)
        timeout = setTimeout(function(){
            func.apply(context, args)
        }, wait);
    }
}
```
2）节流
* 原理：规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
* 适用场景
    1.拖拽场景：固定时间内只执行一次，防止超高频次触发位置变动
    2.缩放场景：监控浏览器resize
* 使用时间戳实现

使用时间戳，当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )，如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。
```js
function throttle(func, wait) {
  let context, args;
  let previous = 0;

  return function () {
    let now = +new Date();
    context = this;
    args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  }
}
```
* 使用定时器实现

当触发事件的时候，我们设置一个定时器，再触发事件的时候，如果定时器存在，就不执行，直到定时器执行，然后执行函数，清空定时器，这样就可以设置下个定时器。

```js
function throttle(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null;
        func.apply(context, args)
      }, wait)
    }

  }
}
```