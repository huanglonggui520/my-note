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
* +：正号。不会对数字产生如何影响。可以使用这个对非number型转换为number
```js
var a=123
b='10'
b=+10//将字符串10转换为了数字10
a= +a
console.log(a)//输出结果为123
```
* -：负号。可以对数字进行取反。
::: tip 注意
如果是非数字，会先转换为数字，然后再运算。可以使用这个对非number型转换为number
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

本节学习视频：<a href="https://www.bilibili.com/video/BV1YW411T7GX?p=17&vd_source=1b15c925b172a1d8a26c18cf76a08121" target="_blank">自增与自减</a>

### 逻辑运算符
JS中提供了三种逻辑运算符。``` !（非）```   ```&&（与）```   ```||（或）```

<hr>

#### 非运算

```!（非）```：可以对一个值进行非运算，语法:``` !a```。既对一个布尔值取反，不会影响原变量

对非布尔值取反，先将非布尔值转换为布尔值，再运算，并返回结果。可以利用这一特点将其他类型的值转为boolean类型,例如!!a。
```js
var a=true
var b=10
var str='hello'
a=!a
str=!str//会先将字符串hello转换为true。
b=!b//会先将b转换为布尔值。
console.log(a)//a为false
```

<hr>

#### 与运算

```&&（与）```：可以对符号两侧的值进行与运算并返回结果（如果不是两个布尔值运算，会返回原值），语法：```a && b```。

运算规则：

 1)如果两个值都是true，则返回true

 2)两个值中只要有一个为false，则返回false

::: tip 口诀
全真为真，有假既假
:::

JS中与为短路与，如果第一个值都为false，则就不会检查第二个值（第二个值不会执行）。
```js
true && alert("猜猜我出不出来！")//alert会执行
false && alert("猜猜我出不出来！")//第一个值为false,不会检查第二个值，因此alert不会执行
```


**注意**：对于```非布尔值```进行与或运算时，会先将其转换为布尔值再运算，然后```返回原值```。

**与运算的情况**

1)**如果第一个值转换为true，则返回第二个原值**。因为第一个值为true，还会检查第二个值，第二个值无论true还是false,都会返回了第二个原值。

```js
var a=5 && 2 //第一个值5为true，会检查第二个值2，于是返回2。
var b=2 && 0
var c=true && 'hello'//返回hello,因为非布尔值与或运算返回原值
console.log(a)
console.log(b)//结果为0，因为第一个，返回第二个原值5。
```
2)**如果第一个值转换为false，则返回false的原值**。
```js
var a=0 && 3 //第一个值转换为false，浏览器不会检查第二个值，直接返回第一个值的原值。
console.log(a)//有一个转换后为false，返回0。
```


<hr>

#### 或运算

 ```||（或）```：可以对符号两侧的进行或运算并返回结果，语法：```a || b```。

1)两个都是false，则返回false

2)两个中只要有一个为true，则返回true


::: tip 口诀
全假为假，有真既真
:::

JS中或为短路或，如果第一个值都为true，则就不会检查第二个值（第二个值不会执行）。

**注意**：对于```非布尔值```进行与或运算时，会先将其转换为布尔值再运算，然后```返回原值```。

**或运算的情况**

1)如果第一个值转换为true，则返回第一个原值。

```js
var a= 2 || 4//第一个值为true，不会检查第二个值了，因此直接返回2,a=2
var b=2 || 0//返回2
```

2)如果第一个值为false，则返回第二个原值。

```js
var a=0 || 4//第一个值为false，无论如何都会检查第二个值，必返回第二个值原值，因此a=4
```

本节学习视频：<a href="https://www.bilibili.com/video/BV1YW411T7GX?p=19&vd_source=1b15c925b172a1d8a26c18cf76a08121" target="_blank">逻辑运算符</a>

### 赋值运算符
=：可以将符号右侧的值赋值给符号左侧的变量

```js
var a=123
```

```+=```：a+=10等价于a=a+10
```js
var a=10
a+=1//相当于a=a+1
cons.log(a)//a结果为11
```

```-=```：a-=1等价于a=a-10

```*=```：a*=10等价于a=a*10

本节学习视频：<a href="https://www.bilibili.com/video/BV1YW411T7GX?p=20&vd_source=1b15c925b172a1d8a26c18cf76a08121" target="_blank">赋值运算符</a>

### 关系运算符

关系运算符：可以比较两个值之间的大小关系，如果关系成立返回true，如果关系不出来则返回false。

\>（大于号）：判断左侧是否大于右侧，如果关系成立，则返回true，反之，返回false

\>=与>类似

```js
console.log(5 > 10)//关系不成立，输出为false
console.log(5>=5)//关系成立，输出true
```

<（小于号）：判断左侧是否小于右侧，如果关系成立，则返回true，反之，返回false

<=与>类似

```js
console.log(5 < 10)//关系成立，输出为true
console.log(5<=5)//关系成立，输出true
```
<hr>

**非数值的情况**

对于非数字（不包括两个都是字符串的情况）进行比较时，会先将非数字转换为数字，再进行比较。

```js
console.log(2>'0')//"0"为非数字，先将"0"转换为数字0，再比较。结果为true
console.log(2>false)//true
console.log(10>=null)//true
console.log(10<'hello')//false，任何值和NaN比较，结果为false
console.log(10>'hello')//false
console.log(true>false)//true
```
注意：任何值和NaN比较，结果为false

如果两个都为字符串进行比较，那么就不会将其转换为数字，而是分别比较字符串中字符的unicode编码。

比较两个字符串编码时是一位一位的比。例如：```'abc'<'b'```结果为true，一位一位的比较其编码（**左侧的第一位与右侧的第一位比较，第二位于第二位比，第一位一样则比较下一位**），左侧第一位```a```的编码已经小于了右侧第一位```b```的编码，因此直接得出结果，不用再比较下去。
```js
console.log('hello'>'world')//false，一位一位的比较，h的编码已经小于w，于是输出false
console.log('a'>'b')//false,因为两个字符串比较，不用转换为数字，而是比较其unicode编码，a的编码为97,b为98
console.log('abc'<'db')//true
console.log('12'<'5')//true,一位一位的比较其编码，1的编码小于5
```

**注意**：比较中文没有意义。比较两个字符串型的数字时，一定要将他们转为数字。

```js
console.log('1235456' < +'23')//在'23'前面添加+，便将'23'转换为了数字。
```

本节学习视频：<a href="https://www.bilibili.com/video/BV1YW411T7GX?p=22&vd_source=1b15c925b172a1d8a26c18cf76a08121" target="_blank">关系运算符</a>

### 相等运算符
相等运算符：比较两个字是否相等。如果相等返回true，否则返回false。

* ==：使用```==```做相等运算。


```js
console.log(123=='123')//true
console.log(true=='1')//true
console.log(nall==0)//false,这个是特殊情况
console.log(undefined==nall)//true，因为undefined衍生自nall
console.log(NaN==1)//false，NaN不与任何值相等，包括其本身
console.log(NaN==NaN)//false
```
上面代码总结

1) 使用```==```来比较两个值时，如果两个值的类型不一样，则会自动进行类型转换，将两个字转为相同类型（大部分都是转为number）。然后再比较。

2) NaN不与任何值相等，包括其本身

3) 因为undefined衍生自nall，因此```undefined==nall```为true

**注意**：可以使用isNaN()函数判断一个变量是否为NaN，是则返回true。语法：isNaN(a)。

* ！=（不相等）：用来判断两个值是否不相等，如果不相等，返回true。```!=```也会进行类型转换。

* ===（全等）：用来做全等运算，它不会做自动的类型转换。如果两个值的类型不同，直接返回false。
```js
console.log('123'===123)//类型不一样，直接返回false
console.log(undefined===nall)//false
console.log(1===1)//true
console.log('hello'==='hello')//true
```

* !==（不全等）：用来做不全等运算，它不会做自动的类型转换。如果两个值的类型不同，直接返回true。
```js
console.log(123!==123)//true
console.log('hgg'!==21)//true
```

### 条件运算符（三元运算符）

条件运算符：条件运算符也叫三元运算符。

语法：条件表达式 ? 语句1 : 语句2

**执行流程：**

首先对条件表达式进行求值，如果该值为true，则执行语句1，并返回其执行结果。如果该值为false，则执行语句2，并返回其执行结果。

```js
var a=10
var c=50
var b=20
a>b?alert('a大'):alert('b大')
var max=a>b?a:b//获取a和b的最大值
max=max>c?max:c//获取a,b,c中的最大值
console.log('hello'?'我是语句1':'我是语句2')//我是语句1
```
**注意**：如果条件表达式求值为非布尔值，会将其转换为布尔值然后再运算

本节学习视频：<a href="https://www.bilibili.com/video/BV1YW411T7GX?p=25&vd_source=1b15c925b172a1d8a26c18cf76a08121" target="_blank">条件运算符</a>

### 运算符的优先级

运算符的优先级：先乘除，后加减

运算符优先级表中越靠上，优先级越高越优先计算，如果优先级一样，则从左往右。
![avatar](https://pic.imgdb.cn/item/6375a67f16f2c2beb1a97db0.png)

## 代码块
**代码块**：在JS中，可以使用```{}```来为语句进行分组。同一对```{}```中的语句称为一组语句（一个代码块）。它们要么都执行，要么都不执行。并且代码块只具有分组的作用，没有其他的作用，在代码块中的内容是完全可见的。
```js
{
    var a=110;
    console.log(a);
    alert('我是一个代码块');
}
{
    var a=110;
    console.log(a);
    alert('我是一个代码块');
}
```

上面```{}```中代码为一个代码块，在```{}```后边不用再写```;```,

## 流程控制语句

### 条件判断语句

条件判断语句：可以在执行某条语句之前进行判断，如果条件成立则会执行语句，反正则不执行语句。

**if语句语法**：

if(条件表达式) 语句

### while循环语句

循环语句：可以通过循环语句反复执行一段代码多次。

 * while语句语法
 ```js
 while(条件表达式){
    语句....
 }
 ```

 while语句在执行时，先对表达式的值进行执行判断，如果其值为true，则执行循环体，循环体执行完后继续对表达式的值进行判断，如果值为true，则会继续执行循环体，以此类推，直到表达式为false，则结束循环。

 ```js
 while(true){
    alert('关不掉我吧')
 }
 ```
 上面为一个死循环，可以使用```break```终止循环。
 ```js
 var n=1
while(true){
    alert('关不掉我吧')
    if(n==10){
        break;//这里使用break终止循环
    }
    n++
 }
 ```

 创建循环往往需三个步骤

 1) 初始化一个变量
 ```js
 var n=0
 ```
 2) 设置一个条件表达式

```js
while(n<=10)//只要n<=10，则会一直执行循环体。当n大于10则结束循环。
```

3) 定义一个更新表达式，每次循环都更新变量
```js
n++
```
<hr>

* do while循环
```js
do{
    语句...
}while(条件表达式)
```

**```do while```执行流程**：

```do while```语句在执行时，会先执行循环体，循环体执行完毕后再对while后面的表达式判断，如果为true，继续执行循环体，执行完毕继续判断表达式，以此类推直到表达式结果为false，结束循环。

**```while```和```do while```的区别**

```do while```为先执行再判断，```while```为先判断再执行。```do while```可以保证循环体至少执行一次。

本节学习视频：<a href="https://www.bilibili.com/video/BV1YW411T7GX?p=35&vd_source=1b15c925b172a1d8a26c18cf76a08121" target="_blank">while循环</a>

### for循环语句

### break和continue
* break

**break**可以用来退出switch或者整个循环语句，也就是break执行，后续的循环都不会执行了。不能在if中使用break。
```js
for(var i=0;i<5;i++){
    console.log(i);
    break;
}
```
上面代码只会执行一次，因为 ```console.log(i)```执行后便执行break语句，break能退出循环。

**注意**：break只对离它最近的循环产生作用。当然也可以为for取个名字，然后```break 名字```用来指定退出哪个循环，详情请往下看。
```js
for(var i=0;i<5;i++){
    console.log('我是外层循环'+i)
    for(var j=0;j<5;j++){
        break//break只对离它最近的循环起作用，此时内层循环离它最近，于是会退出内循环。但不会对外循环产生影响
        console.log('我是内层循环')
    }
}
```
上面代码中的break只对离它最近的循环起作用，此时内层循环离它最近，于是会退出内循环。但不会对外循环产生影响
 
 <hr>

可以为循环语句创建一个label，用来标识当前循环（相当于给for取一个名字）。使用break语句时，可以在后面跟一个label（for循环的名字）,用来退出指定循环语句

语法：

label:循环语句

```js
outer://为外层循环取一个outer的名字
for(var i=0;i<5;i++){
    console.log('我是外层循环'+i)
    for(var j=0;j<5;j++){
        break outer;//在此处指定退出名为outer的循环，而不是最近的循环
        console.log('我是内层循环')
    }
}
```

* continue

continue用来跳过本次（执行continue那一次）循环,本次循环执行完毕后还会执行其他次的循环。
```js
for(var i=0;i<5;i++){
    if(i==2){
        continue;//当i==2时，结束本次循环，下边内容不会执行。但是i===3,4还是会执行
    }
    console.log(i)//输出为0,1,3,4。因为continue结束了i==2的那次循环,
}
```
同样的,continue只会对离它最近的循环起作用。

## 对象

### 对象的简介
对象：对象是一种复合的数据类型，在对象中可以保存多个不同数据类型的属性。

对象的分类：

* 内建对象
由ES标准中定义的对象（相当于JS定义的对象），在任何ES的实现中都可以使用。

例如：Funtion，Math，String，Number,Object。

* 宿主对象

由JS运行环境提供的对象，目前来讲主要是指浏览器提供的对象。

例如：BOM DOM

* 自定义对象
由开发人员自己定义的对象。

### 对象的基本操作
 1) 创建对象

使用new关键词调用的函数，是构造函数constructor。构造函数是专门用来创建对象的函数。

 ```js
 var obj=new Object()//Object为浏览器内建对象，是一个构造函数
 ```

**向对象中添加属性**：对象中保存的值成为属性。向对象中添加属性，语法：```对象.属性名=属性值```

```js
var person=new Object()//使用new关键词创建一个person对象
person.name='张三'
person.age=18//向person对象中添加age属性
```

**读取对中的属性**：语法：```对象.属性名```

如果读取对象中没有的属性时，不会报错，会返回undefined。
```js
console.log(person.name)//张三，读取person对象的name属性
console.log(person.gender)//undefined，gender属性在对象中没有，但不会报错，会返回undefined.
```

**修改对象的属性值**:语法：```对象.属性名=新属性值```
```js
var person=new Object()
person.name='张三'
console.log(person.name)//张三
person.name='孙悟空'//将person对象的name属性值修改为孙悟空
console.log(person.name)//孙悟空
```

**删除对象的属性**：语法：```delete 对象.属性```
```js
delete person.name//删除person对象的name属性
console.log(person.name)//undefined
```

### 属性名和属性值
**属性名**：

```in``` ：可以通过in运算符来检查一个对象中是否含有指定属性。如果有则返回true,如果没有则返回false

语法：```"属性名" in 对象```
```js
console.log('test' in obj)//检查obj对象中是否含有test属性
```
<hr>

对象的属性名不强制要求遵守标识符的规范。什么乱七八糟的属性名都可以使用。但是使用时尽量按照规范进行。

```js
var obj=new Object()
obj.age=18
obj.var=19
abj.12jeih='hello'//报错，特殊的属性名不能使用这种方式
console.log(obj.age)//18
console.log(obj.var)//19，不会报错
``` 

**注意**：如果要使用特殊的属性名，例如123,43bhkh,!12uh,等等，不能采用```.```的方式。而是采用另外一种方式。

语法：```对象['属性名']=属性值```，这种方式的属性可以传递一个变量，变量值为多少便读取那个属性。
```js
var obj=new Object()
obj['123']='我是123属性'//使用[]方式向obj对象中添加123属性
var num=123
console.log(obj[num])//我是123属性,这种方式可以使用num这个变量。
console.log(obj['123'])//我是123属性
```
<hr>

**属性值**：

JS对象的属性值可以是任意数据类型。甚至是一个对象。

```js
var obj=new Object()
obj['age']='hello'
obj['name']=true
obj['gender']=123
var obj2=new Object()
obj2.test=obj//obj2对象的test属性为一个对象
```

### 引用数据类型
在JS中的变量都是保存在栈内存中。

基本数据类型的值都是保存在栈内存里,值与自之间是独立的，修改一个变量不会影响其他的变量。

![avatar](https://pic.imgdb.cn/item/637aeed616f2c2beb1c3e590.png)

![avatar](https://pic.imgdb.cn/item/6385842316f2c2beb105f76b.png)

对象是保存到堆内存中的，每创建一个新的对象，就会在堆内存中开辟一个新的空间，而变量保存的是对象的内存地址，该地址指向堆内存中的对象（对象的引用）

注意：如果两个变量保存的是同一个对象的引用，当一个变量修改对象的属性时，另一个对象也会受到影响而改变。

```js
var obj1=new Object()
obj1.name='张三丰'
var obj2=obj1//此处obj1与obj2均指向同一个对象
obj2.name='张四丰'
console.log(obj1.name)//张四丰
console.log(obj2.name)//张四丰
console.log(obj1==obj2)//true,两个对象比较的是内存地址
obj2=null//将obj2的的值 赋null,此时与对象断开
```

### 对象字面量
创建的对象的方式：

1) 使用构造函数创建对象，这种方式只能在创建完对象后再指定属性。
```js
var obj = new Object()
```

2) 使用对象字面量创建对象，可以在创建对象时，直接指定对象中的属性，并且多个属性可以用```,```隔开。

语法：```{属性名:属性值,属性名:属性值}```

这种方式创建的对象的属性名可以加引号，也可以不加引号。遇到特殊的属性名时，必须加引号。

```js
var obj={}//{}为一个字面量
var obj2={ //这种方式在创建对象时，可以直接指定属性。
    "name":'张三丰',//属性名可以加引号
    age:108,
    test:{
        name:'我是对象里的对象'//
    },
    '1@#21343112!':12//这种特殊的属性名必须加引号。
}
```

注意：最后一个属性不要加```,```，对象里的属性值也可以是一个对象。

## 函数

函数(function)也是一个对象，函数中可以封装一些功能(代码)，在需要时可以执行执行功能(代码)

### 函数的创建

* 使用构造函数Function创建一个函数对象,可以将要封装的代码以```字符串```的形式传递给构造函数，```这种方式基本不会使用```。使用typeof检查一个函数时，返回function

```js
var fn=new Function('console.log("我是一个函数")')
```
封装到函数的代码不会立即执行，它们会在函数被调用的时候执行。当函数调用时，函数中的代码按顺序执行。语法：```函数()```
```js
fn()//调用fn函数
```

* 使用函数声明来创建一个函数。
语法：
```js
function 函数名(形参1,形参2,形参N){
    语句...
}
```
例如：
```js
function add(str){
    console.log(str);
}
add('我是一个函数');
```
上面代码声明一个add()函数，执行```console.log(str)```

* 使用函数表达式创建一个函数

```js
var fun=function(形参1){
    语句...
}
```

### 函数的参数

我们可以在函数的()中指定一个或多个形参，多个形参使用```,```隔开，声明形参就相当于在函数内部声明了对应的变量，但没有值。

:::tip 例子
定义一个求两个数的和的函数
:::

```js
function sum(a,b){
    console.log(a+b)//a=2,b=3
}
sum(2,3)//5
sum(10,9)//19
```
在调用函数时，可以在()中传入实参，例如:```sum(10,9)```，实参将会赋值给对应的形参，并且不会检查实参的类型。如果实参的数量少于形参的数量，则没有对应的形参将会是undefined
