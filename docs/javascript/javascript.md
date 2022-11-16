# JavaScript笔记总结
## JS简介
Web 前端有三层：

* HTML：从语义的角度，描述页面结构

* CSS：从审美的角度，描述样式（美化页面）

* JavaScript（简称 JS）：从交互的角度，描述行为（实现业务逻辑和页面控制）
::: tip 作者
布兰登·艾奇（Brendan Eich，1964年～），JavaScript的发明人，目前（2007年）在Mozilla公司担任首席技术长（Chief Technology Officer）
:::


JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。 

在1995年时，由Netscape公司的Brendan Eich，在网景导航者浏览器上首次设计实现而成。因为Netscape与Sun合作，Netscape管理层希望它外观看起来像Java，因此取名为JavaScript。但实际上它的语法风格与Self及Scheme较为接近。

为了取得技术优势，微软推出了JScript，CEnvi推出ScriptEase，与JavaScript同样可在浏览器上运行。为了统一规格，因为JavaScript兼容于ECMA标准，因此也称为ECMAScript。

## JS的helloworld及JS书写位置
开始JavaScript的第一行代码：helloworld
::: warning 思考
JS应该书写在哪里?
:::

**（一）行内式，写在标签内部**
```html {11,13}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>输出helloworld</title>
</head>
<body>
    <!-- 行内式，将js代码直接写在标签内部 -->
    <input type="button" value="点我输出helloworld" onclick="alert('helloworld')" />
    <!-- 将JS代码直接写在a标签的href中，格式为javascript:JS代码 -->
    <a href='javascript:alert("HelloWorld")'></a>
    <!-- 让超链接点了没有反应 -->
    <a href='javascript:;'>点我没反应吧！</a>
</body>
</html>
```
**分析**
* 可以将单行或少量 JS 代码写在 HTML 标签的事件属性中（以 on 开头的属性），比如放在上面的 onclick点击事件中。

* 这种书写方式，不推荐使用，原因是：可读性差，尤其是需要编写大量 JS 代码时，很难维护；引号多层嵌套时，也容易出错。

* 关于代码中的「引号」，在 HTML 标签中，我们推荐使用双引号，JS 中我们推荐使用单引号

**（二）写在 script 标签中**
```html {9,10,11,12,13,14,15,16}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>输出helloworld</title>
    <!-- JS代码写在script标签中 -->
    <script>
        // 向网页中输出HelloWorld,document表示文档，一个网页既为一个文档,document.write()向body中书写内容
        document.write("HelloWorld")
        // 控制浏览器弹出警告框：输出helloworld
        alert("helloworld")
        // console.log()向控制台输出一个内容
        console.log('HelloWorld')
    </script>
</head>
<body>
    
</body>
</html>
```
::: warning 注意
JS代码是从上往下依次执行，因此上面代码会先执行document.write("HelloWorld")，再依次往下一行一行执行。
:::

**（三）写在外部JS文件中**

将JS编写在外部JS文件中，通过script标签引入，推荐使用的方式
```html {9}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>输出helloworld</title>
    <!-- 在外部out.js文件中编写好JS代码，并通过script的scr引入 ，此时该script内部不能再写代码-->
    <script src="./out.js"></script>
    <!-- 如果需要再写script内部代码，则重新写一个script标签 -->
    <script>
        alert("我是内部代码")
    </script>
</head>
<body>
</body>
</html>
```
out.js文件所在目录及其代码如下
![avatar](https://pic1.imgdb.cn/item/636b1e1c16f2c2beb19e0994.png)

**分析**：

* 上面这段代码，依然是放到 body 标签里，可以和内嵌的 JS 代码并列。

* 上方代码的 script 标签已经引入了外部 JS 文件，所以这个标签里面，不可以再写 JS 代码，如果需要编写内部JS，则需要重新写一个script标签。

**总结：**

我们在实战开发中，基本都是采用方式 3，因为将 html 文件和 js 文件分开的方式，有利于代码的结构化和复用，符合高内聚、低耦合的思想。很少会有人把一大堆 JS 代码塞到 html 文件里

本节学习视频： <a href="https://www.bilibili.com/video/BV1YW411T7GX/?p=2&vd_source=1b15c925b172a1d8a26c18cf76a08121" target="_blank">JS输出HelloWorld</a>

## 基本语法
1.JS中严格区分大小写
```html
    <script>
        // JS严格区分大小写，alert()不能写为Alert()
        alert("我是小写")
    </script>
 ```
 2.JS每一条语句以分号（;）结尾，如果不添加分号，浏览器会自动添加，但是会消耗一些资源。
 3.JS会自动忽略多个控空格与换行

 本节学习视频：<a href="https://www.bilibili.com/video/BV1YW411T7GX?p=4&vd_source=1b15c925b172a1d8a26c18cf76a08121" target="_blank">基本语法</a>

 ## 字面量与变量

 * 字面量：都是不可改变的值，例如1,2,3,4，1永远都是1不可改变，这种称为字面量。

 * 变量：可以保存字面量的值，而且变量的值可以改变。可以通过变量对字面量进行描述。
 ::: warning 思考
 我们怎样使用变量？
 :::
声明变量
在JS中，使用var关键字来声明一个变量
```js
// 声明一个a变量并为其赋值
var a=110
// 输出变量a
console.log(a)
```

本节学习视频：<a href="https://www.bilibili.com/video/BV1YW411T7GX?p=5&vd_source=1b15c925b172a1d8a26c18cf76a08121" target="_blank">字面量与变量</a>

## 标识符
**标识符**：在JS中所有可以由我们自主命名的都可以称为标识符。
<font color=red>例如：变量名，函数名，属性名等</font>

标识符的命名规则
* 标识符中可以含有字母、数字、_ 、$
```js
// 定义一个变量age_01_$，只含有字母、数字、_ 、$，因此该变量有效
var age_01_$=18
// 定义一个变量age_01_$#@，因为包含了除字母、数字、_ 、$以外的字符，因此浏览器会报错。
var age_01_$#@=18
```
* 标识符不能以数字开头
```js
// 下面定义的变量因为以数字开头，因此会报错
var 1abc=19
// 定义的变量以字母开头，以_开头，以$开头都没有问题
var abc=1
var _abc=12
var $abc=9
```
* 标识符不能是ES中的关键字或者保留字
```js
// 以下代码定义的变量是ES中的关键字或者保留字，因此报错，除了var之外，还有const,let,for,if等
var var=11
console.log(var)
```
**关键字列表**
|break |do|instanceof|typeof|case|
|:---:|:---:|:---:|:---:|:---:|
|else|new|var|catch|finally|
|return|void|continue|for|switch|
|while|defualt|if|throw|delete|
|in|try|function|this|with|
|debugger|false|true|null||

**保留字符**
|class|enum|extends|super|const|export|
|:---:|:---:|:---:|:---:|:---:|:---:|
|import|implement|let|private|public|interface|

* 标识符一般都采用驼峰命名法

驼峰命名法：首字母小写，每个单词的开头字母大写，其余字母小写，类似于xxYyZz，例如：helloWorld，schoolLife

本节学习视频：<a href="https://www.bilibili.com/video/BV1YW411T7GX?p=6&vd_source=1b15c925b172a1d8a26c18cf76a08121" target="_blank">标识符</a>

## 基本数据类型
**数据类型**：在JS中一共有6种数据类型，类型的首字母需要大写，值需要小写
* String   字符串
* Number   数值
* Boolean 布尔值
* Null     空值
* Object   对象
* Undefined 未定义

其中```String,Number,Boolen,Null,Undefined```属于基本数据类型

```Object```属于引用数据类型
### 字符串



```String```字符串。在JS中，字符串需要用引号（单引号或双引号）引起来。
>引号不能嵌套，例如：双引号里边不能再放双引号，```"hello'world'"```这种形式可以，```"hello"world""```这种不行
```js
// 定义一个变量str，将字符串赋值给变量str，因此str既为一个字符串。
var str="helloWorld" 
console.log('str')//str为字符串
console.log(str)//str为变量，字符串必须打引号，不然为变量
```
**注意**：在字符串中我们可以使用转义字符（\）进行一些特殊字符的转义。
```js
// 下面字符串 我说：“你还好吗”。的双引号就是双引号，因此使用转义字符\告诉浏览器，这就是双引号
var str="我说：\“你还好吗\”。"
```

本节学习视频：<a href="https://www.bilibili.com/video/BV1YW411T7GX?p=7&vd_source=1b15c925b172a1d8a26c18cf76a08121" target="_blank">字符串</a>

### Number
在JS中，所有的数值都是Number类型，包括整数与浮点数。

在JS中，整数的运算原本可以保证精确，如果进行浮点元素的运算，可能得到一个不精确的结果。
>注意：千万不要使用JS进行钱等精确度要求比较高的运算
```js
var a=123 //数值123
var b="123"  //字符串123,用双引号引起来的为字符串
console.log(a)
console.log(b)
```
代码运行结果

![avatar](https://pic1.imgdb.cn/item/636bbd6316f2c2beb1b3575e.png)
::: warning 思考？ 
上面代码输出后怎么样区分两个123中哪个为字符串，哪个为数值？
:::


**typeof**：可以使用运算符typeof来检查一个变量的类型，语法```typeof 变量```，它会以String形式返回变量的类型。typeof的返回值有undefined、boolean、string、number、object、function，加上 ES6 的 Symbol 返回 symbol 和 ES2020 的 BigInt 返回 bigint ，总共 8 个返回值
```js
var  a="123"
var  b=123
console.log(typeof a) //检查变量a的类型，输出为string
console.log(typeof b) //检查变量b的类型，输出为number
```
**总结**

* 检查一个字符串时，返回string

* 检查一个数值时，返回number
>注意，typeof返回的string,number等都为小写，并且都是String（字符串）类型。
::: tip JS最大值
在JS中，可以使用```Number.MAX_VALUE```表示数字的最大值，如果使用Number表示的数字超过了最大值，则返回```Infinity```（正无穷），```Infinity```为一个字面量，使用```typeof```检查```Infinity```返回```number```，```Number.MIN_VALUE```表示最小的正小数
```js
console.log(Number.MAX_VALUE) //输出JS数字的最大值，结果为1.7976931348623157e+308
console.log(Number.MAX_VALUE*Number.MAX_VALUE) //因为结果远远超出JS能表示的最大值，因此输出为Infinity
console.log("abc"*"bcd") //两个字符串相乘，浏览器不会计算，因此输出为NaN
```
:::
**注意**：NaN表示Not A Number，NaN也是字面量，使用typeof检查NaN，返回number

本节学习视频：<a href="https://www.bilibili.com/video/BV1YW411T7GX?p=8&vd_source=1b15c925b172a1d8a26c18cf76a08121" target="_blank">Number</a>
### 布尔值
布尔值的取值：true(真)，false(假)，使用```typeof```检查一个布尔值时，会返回boolean

本节学习视频：<a href="https://www.bilibili.com/video/BV1YW411T7GX?p=9&vd_source=1b15c925b172a1d8a26c18cf76a08121" target="_blank">布尔值</a>
### Null

Null专门原来表示一个空的对象，使用```typeof```检查Null时返回object

Null类型的值只有一个：null
```js
var a=null
console.log(typeof a) //输出object
```

本节学习视频：<a href="https://www.bilibili.com/video/BV1YW411T7GX?p=10&vd_source=1b15c925b172a1d8a26c18cf76a08121" target="_blank">Null</a>
### Undefined
当声明一个变量，但并不给变量赋值时，它的值就是undefined

Undefined(未定义)的值只有一个：undefined

>注意：undefined并不是没有定义一个变量，undefined声明了变量，只不过没有给其赋值。未声明的为defined
```js
var a
console.log(a) //声明了变量a，但未赋值，因此输出结果为undefined
console.log(b) //未声明变量b，因此输出结果为defined
```

使用typeof检查一个undefined时，也是返回undefined
```js
var a //a未赋值，因此其值为undefined
console.log(typeof a) //输出结果为undefined
```

本节学习视频：<a href="https://www.bilibili.com/video/BV1YW411T7GX?p=10&vd_source=1b15c925b172a1d8a26c18cf76a08121" target="_blank">Undefined</a>

## 强制类型转换
### 强制类型转换-String
**强制类型转换**：将一个数据类型强制转换为其他数据类型，例如：将Number转换为String

类型转换主要是指：将其他类型转换为String，Number，Boolean

* 将其他数据类型转换为String

**方式一**：调用被转换数据类型的toString()方法，语法```xxx.toString()```，该方法不会影响到原变量，它会将转换的结果返回。
```js
var a=123
var a1=a.toString()//调用toString()方法将数字a转换为字符串，并返回给变量a1
console.log(typeof a) //输出为number，因为toString方法不会影响到原变量，因此a还是number
console.log(a1)//输出结果为string
```
>注意：null和undefined两个值没有toString()方法

**方式二**：调用String()函数，并将被转换的数据作为参数传入String()函数，语法```String(xxx)```，该函数不会影响原变量，它会将转换的结果返回。
```js
var a=123
a=String(a) //调用String()函数，将Number变量转换为字符串
console.log(typeof a)//输出结果为string
```
>注意：null和undefined两个值能使用String()函数。

调用String()类型转换，对于```Number```和```Boolean```底层实际上就是调用toString()，对于```null、undefined```，它会直接将其转换为"null"，"undefined"

本节学习视频：<a href="https://www.bilibili.com/video/BV1YW411T7GX?p=11&vd_source=1b15c925b172a1d8a26c18cf76a08121" target="_blank">强制类型转换-String</a>

### 强制类型转换-Number
将其他数据类型转换为Number

**方式一**：使用```Number()```函数，将被转换的数据类型以参数形式传入```Number()```函数，语法：```Number(xxx)```，该函数不会影响到原变量。

可能的情况

* 如果是纯数字的字符串，则直接将其转换为数字，例如"123"，"1009"等。

* 如果是含有非数字的字符串，则将其转换为NaN，例如"abc22"，"wej_w2"等。

* 如果是空字符串或者全是空格，则转换为0。

* 如果是Boolean转数字，true转换为1，false转换为0

* 如果是null转数字，结果为0

* 如果是undefined转数字，结果为NaN
```js
var a="123"
var b="hello"
var c=true
var d=null
a=Number(a) //将String类型的a转换为Number
b=Number(b)
c=Number(c)
d=Number(d)
console.log(a) //输出结果为Number型de123
console.log(b) //因为b为hello，含有非数字的字符串，因此输出结果为NaN(Not A Number)
console.log(c) //结果为1
console.log(d) //结果为0
```
**方式一总结**：
使用这种方式有局限性，只要字符串中包含非数字的字符串时，无法将其转换为我们需要的，```例如：123px无法转为123```

**方式二**：使用```parseInt()```把一个字符串转换为整数或者使用```parseFloat()```把一个字符串转换为浮点数，该方法不会影响原变量。

parseInt()可以将一个字符串中有效的整数提取出来，然后转换为Number。

例如```123px```转换为123，```123e45r```转换为123，```b123px3```转换为NaN，因此它只会提取以数字开头的有效数字。
```js
var a="123px"
var b="qwb"
a=parseInt(a)//使用parseInt()将a转换为整数
b=parseInt(b)
console.log(a)//结果为123
console.log(b)//结果为NaN，因为b中提取不到有效数字
```
如果非String使用parseInt()，它会先将其转换为String，然后再转换为Number。例如：parseInt(true)会将true转换为"true"，再转换为Number，结果为NaN。

```parseFloat()```与parseInt()类似，只不过parseFloat()可以取小数。例如123.22px转为123.22。

本节学习视频：<a href="https://www.bilibili.com/video/BV1YW411T7GX?p=12&vd_source=1b15c925b172a1d8a26c18cf76a08121" target="_blank">强制类型转换-Number</a>

### 强制类型转换-Boolean
使用```Boolean()```函数将其他数据类型转为Boolean

* **数字转为Boolean值**，除了0和NaN转为false外，其余的均为true。例如123,-123,1,9882等均转为true。

* **字符串转Boolean值**，除了空字符串("")，其余的均为true。例如"hello","true"," ","123"等不是空字符串的均转为true。

**null转为Boolean值**，结果为false

**undefined转为Boolean值**，结果为false

``注意：对象也会转为true``

本节学习视频：<a href="https://www.bilibili.com/video/BV1YW411T7GX?p=13&vd_source=1b15c925b172a1d8a26c18cf76a08121" target="_blank">强制类型转换-Boolean</a>

## 运算符（操作符）
运算符可以对一个或者多个值进行运算，并获取运算结果。例如``typeof``是一个运算符，可以获取一个变量的类型，```typeof```返回值为字符串。
```js
var a=123
console.log(typeof a)//输出为number,并且number为字符串类型
var r=typeof a //typeof以字符串形式返回变量类型，因此r为字符串number
console.log(typeof r)//输出为string
```
### 算术运算符

算术运算符,指的是```+```,```-```,```*```,```/```,```%```等。

* +可以对两个值进行加法运算，并将结果返回，但是对非Number（null true false）类型的值进行运算是会将其转换为Number类型，然后再运算。
```js
var a=123+true
var b=123+null
console.log(a)//输出结果为124，因为true会被转换为Number:1
```
>注意：任何值与NaN运算结果均为NaN
```js
var a=123+NaN
console.log(a)//结果为NaN
```
* 如果对两个字符串做加法运算，则会将两个字符串拼接为一个字符串并返回。

**任何类型的值与字符串相加，都会将它转换为字符串然后再进行拼接**。<font color=red>可以利用这个特性将任何数据类型的值转换为string，这种方式用的比较多</font>。```将任何数据类型的值+''```，例如：123+''="123"
```js
var a="你好"+"大帅哥"
var b=123+"你好"
console.log(a)//输出结果为你好大帅哥
console.log(b)//输出结果为123你好
```

* 除了加法运算，其他运算会将其他数据类型转换为number（只有数字才能相减，因此其他类型均转为数字）。
```js
var a=3-"1"
console.log(a)//结果为2，字符串1会被转换为number 1
```
### 一元运算符
一元运算符：只需要一个操作数
* +：正号。不会对数字产生如何影响。
```js
var a=123
a= +a
console.log(a)//输出结果为123
```
* -：负号。可以对数字进行取反。
::: tip 注意
如果是非数字，会先转换为数字，然后再运算。
:::

### 自增和自减
**自增(++)**：可以使变量在自身的基础上增加1。会影响原变量的值，既原变量会加1。

自增分为两种

后++(a++)与前++(++a)，无论是a++还是++a，a的值都会自增1。不同的是a++与++a表达式的值。

a++为原变量的值（自增以前的值）。
```js
var a=2
console.log(a++)//a++为原变量的的值，因此为2,但a的值为3。
```
++a为自增以后的值（新值）。
```js
var a=2
console.log(++a)//++a为自增以后的值，因此结果为3
```
**自减(--)**：可以使变量在自身基础上-1。其他的和自增情况类似。

### 逻辑运算符
JS中提供了三种逻辑运算符。``` !（非）```   ```&&（与）```   ```||（或）```

* !（非）：可以对一个值进行非运算，不会影响原变量。

