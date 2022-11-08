# CSS面试题
## 01-CSS全称是什么
CSS英文全称：Cascading Style Sheets，也就是层叠样式表。是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言

## 02-为什么需要CSS
CSS最早是在1997年开发的，它是Web开发人员定义其创建的网页外观的一种方式。它旨在允许开发人员将 网站代码的内容和结构与视觉设计分开，这在此之前是不可能实现的。

结构和样式的分离使HTML可以执行其最初基于的更多功能-内容标记，而不必担心页面本身的设计和布局，这通常称为“外观”页面。

## 03-CSS的主要版本有哪些
主要有：CSS 1，CSS 2，CSS 2.1，CSS 3，CSS 4几个版本

## 04-什么是层叠
简单的说，层叠就是对一个元素多次设置同一个样式，这将使用最后一次设置的属性值。例如对一个站点中的多个页面使用了同一套CSS样式表，而某些页面中的某些元素想使用其他样式，就可以针对这些样式单独定义一个样式表应用到页面中。这些后来定义的样式将对前面的样式设置进行重写，在浏览器中看到的将是最后面设置的样式效果。

## 05-使用CSS的优势
1、多个文档的样式可以通过使用一个站点来控制。

2、多个HTML元素可以包含许多文档，可以在其中创建类。

3、要在复杂情况下对样式进行分组，请使用选择器和分组方法。

## 06-使用CSS的缺点
1、无法通过选择器升序

2、垂直控制的局限性

3、没有表情

4、没有列声明

5、伪类不受动态行为的控制

6、规则，样式，无法定位特定文本
## 07-列举一些CSS框架
* Bootstrap：是美国Twitter公司的设计师Mark Otto和Jacob Thornton合作基于HTML、CSS、JavaScript 开发的简洁、直观、强悍的前端开发框架，使得 Web 开发更加快捷。Bootstrap提供了优雅的HTML和CSS规范，它即是由动态CSS语言Less写成。

* Layui：是一款采用自身模块规范编写的前端 UI 框架，遵循原生 HTML/CSS/JS 的书写与组织形式，门槛极低，拿来即用。其外在极简，体积轻盈，组件丰盈，非常适合界面的快速开发。

* ElementUI：一套为开发者、设计师和产品经理准备的基于 Vue 2.0的桌面端组件库。

* antd：是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。开箱即用的高质量 React 组件，全链路开发和设计工具体系，数十个国际化语言支持。
## 08-CSS中使用id和Class的区别
<font color=red>id</font>：属性的操作类似于CLASS属性，但有一点重要的不同之处：id属性的值在整篇文档中必须是唯一的。这使得id属性可用于设置单个元素的样式规则。包含id属性的选择器称为id选择器。id选择器的标志符是散列符号（#）

<font color=red>Class</font>：CLASS属性允许向一组在CLASS属性上具有相同值的元素应用声明。BODY内的所有元素都有CLASS属性。类选择器以标志符（句点）开头。

## 09-什么是RGB
RGB色彩模式是工业界的一种颜色标准，是通过对红®、绿(G)、蓝(B)三个颜色通道的变化以及它们相互之间的叠加来得到各式各样的颜色的，RGB即是代表红、绿、蓝三个通道的颜色。

## 10-在CSS中为元素分配某种颜色的方法有哪些
1、十六进制颜色码：
十六进制颜色码就是在软件中设定颜色值的代码。通过一个以“#”开头的6位十六进制数值表示一种颜色。6位数字分为3组，每组两位，依次表示红、绿、蓝三种颜色的强度。

2、RGB颜色模式：颜色由表明红色，绿色，和蓝色各成分强度的三个数值表示。从极小值0到最大值255，当所有颜色,都在最低值被显示的颜色将是黑色，当所有颜色都在他们的最大值被显示的颜色将是白色。

3、HSL标记：设计师和美术师通常更喜欢使用HSL（色相/饱和度/亮度）颜色方法进行工作。在Web上，使用HSL功能符号表示HSL颜色。HSL（）CSS函数在用法上与RGB（）函数非常相似。

## 11-CSS盒模型
所有 HTML 元素都可以视为方框。在 CSS 中，在谈论设计和布局时，会使用术语“盒模型”或“框模型”。
CSS 框模型实质上是一个包围每个 HTML 元素的框。

它包括：外边距、边框、内边距以及实际的内容。

对不同部分的说明：

* 内容区（content）：它呈现了盒子的主要信息内容，这些内容可以是文本、图片等多种类型；
* 内边距（padding）：内边距是内容区和边框之间的空间；
* 边框（border）：边框是环绕内容区和填充的边界；
* 外边距（margin）：外边距位于盒子的最外围，是添加在边框外周围的空间。

## 12-什么是z-index
z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。
>z-index 仅能在定位元素上奏效！

可能值：

auto——默认。堆叠顺序与父元素相等。

number——设置元素的堆叠顺序。例如z-index:999

inherit——规定应该从父元素继承 z-index 属性的值。

## 13-什么是CSS Sprite（“精灵图”）
CSS Sprites叫 CSS精灵或者雪碧图，是一种网页图片应用处理方式。

CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中。

再利用CSS的"background-image"，“background-repeat”，"background-position"的组合进行背景定位，background-position可以用数字精确的定位出背景图片的位置。

## 14-使用CSS Sprites的好处
利用CSS Sprites能很好地减少网页的http请求，从而大大的提高页面的性能，这也是CSS Sprites最大的优点，也是其被广泛传播和应用的主要原因；

CSS Sprites能减少图片的字节，曾经比较过多次3张图片合并成1张图片的字节总是小于这3张图片的字节总和。

解决了网页设计师在图片命名上的困扰，只需对一张集合的图片上命名就可以了，不需要对每一个小元素进行命名，从而提高了网页的制作效率。

更换风格方便，只需要在一张或少张图片上修改图片的颜色或样式，整个网页的风格就可以改变。维护起来更加方便。
 ## 15-CSS中的伪元素是什么
 CSS伪元素是添加到选择器的关键字，可用于设置所选元素的特定部分的样式。

“first-line” 伪元素用于向文本的首行设置特殊样式，只能用于块级元素！

下面的属性可应用于 “first-line” 伪元素：font，color，background，word-space，letter-space，text-decoration，text-transform，line-height，clear。

“first-letter” 伪元素用于向文本的首字母设置特殊样式，只能用于块级元素！

下面的属性可应用于 “first-letter” 伪元素：font，color，background，margin，padding，border，text-decoration，line-height，clear，text-transform。

常见的伪元素选择器：

::first-letter 选择元素文本的第一个字（母）。

::first-line 选择元素文本的第一行。

::before 在元素内容的最前面添加新内容。

::after 在元素内容的最后面添加新内容。

::selection匹配用户被用户选中或者处于高亮状态的部分

::placeholder匹配占位符的文本，只有元素设置了placeholder属性时，该伪元素才能生效

>伪类元素使用两个冒号 ```(::)``` 而不是一个冒号 ```(:)```，这是 CSS3 规范中的一部分要求，目的是为了区分伪类和伪元素，大多数浏览器都支持这两种表示方式。单冒号(:)用于 CSS3 伪类，双冒号(::)用于 CSS3 伪元素。对于 CSS2 中已经有的伪元素，例如 :before，单冒号和双冒号的写法 ::before 作用是一样的。

>所以，如果你的网站只需要兼容 webkit、firefox、opera 等浏览器，建议对于伪元素采用双冒号的写法，如果不得不兼容 IE 浏览器，还是用 CSS2 的单冒号写法比较安全。

**伪元素的应用:**

清除浮动：如果父元素的所有子元素都是浮动的，父元素的高度则无法撑开。可以通过对父元素添加after伪类撑开父元素高度，因为after就是其最后一个子元素
```css
.clear::after {
    content: '';
    display: block;
    clear: both;
}
```

画分割线：画一条如下的分割线
```html
<style>
    * {
      padding: 0;
      margin: 0;
    }
    .spliter::before, .spliter::after {
      content: '';
      display: inline-block;
      border-top: 1px solid black;
      width: 200px;
      margin: 5px;
    }
  </style>
</head>
<body>
  <p class="spliter">分割线</p>
</body>
```
效果如下

![avatar](https://ss.html.cn/upload/image/768/129/684/1600849913582195.png-600)

## 16-如何设置h2和h3标签的相同样式
通过用逗号（，）分隔符来定位多个元素
```css
h2, h3 {
color: blue;
}
```

## 17-CSS中的float属性如何使用
float 属性定义元素在哪个方向浮动。以往这个属性总应用于图像，使文本围绕在图像周围，不过在 CSS 中，任何元素都可以浮动。浮动元素会生成一个块级框，而不论它本身是何种元素。

如果浮动非替换元素，则要指定一个明确的宽度；否则，它们会尽可能地窄。

可能值：

* float: none;

* float: left;

* float: right;
## 18-当前版本的CSS中使用了哪些不同的模块
CSS中有几个模块，部分如下：

选择器

盒模型

背景和边框

文字效果

2D / 3D转换

动画制作

多列布局

用户界面

## 19-CSS允许使用哪些不同的媒介类型
@media属性主要有四种类型（包括screen）：

* all—适用于所有设备。

* print—打印预览模式/打印页面。

* speech——适用于“朗读”页面的屏幕阅读器

* screen——计算机屏幕（默认）

## 20-CSS有哪些单位
CSS 有两种类型的长度单位：相对和绝对。设置 CSS 长度的属性有 width, margin, padding, font-size, border-width, 等

相对长度：

| 单位 | 	 描述 |
| :-------------: |:-----:|
|em	|它是描述相对于应用在当前元素的字体尺寸，所以它也是相对长度单位。一般浏览器字体大小默认为16px，则2em == 32px；|
|rem	|是根 em（root em）的缩写，rem作用于非根元素时，相对于根元素字体大小；rem作用于根元素字体大小时，相对于其出初始字体大小。|
|vh	|viewpoint height，视窗高度，1vh=视窗高度的1%|
|vw	|viewpoint width，视窗宽度，1vw=视窗宽度的1%|
|vmin	|vw和vh中较小的那个。|
|vmax	|vw和vh中较大的那个。|
|%	|相对父元素|
>提示: rem与em有什么区别呢？区别在于使用rem为元素设定字体大小时，仍然是相对大小，但相对的只是HTML根元素

绝对长度

|单位|	描述|
|-----|:-----:|
|cm|	厘米|
|mm|	毫米|
|in|	英寸 (1in = 96px = 2.54cm)|
|px |	像素 (1px = 1/96th of 1in)|

## 21-如何控制插入的图片不重复
```css
.logo {
​
background-repeat: none;
​
 }
```

## 22-下面这段代码将对元素做些什么
```css
.container {
margin：0 auto; 
}
```
在要应用的对象上指定margin：0 auto时候，该对象将位于其父容器的中央。第二个参数上会告诉浏览器自动确定左右边距，方法是将它们均等设置。它保证左右边距将设置为相同的大小。第一个参数0表示顶部和底部边距都将设置0。

## 23-overflow属性在CSS中被用于什么
overflow 属性规定当内容溢出元素框时发生的事情。

这个属性定义溢出元素内容区的内容会如何处理。如果值为 scroll，不论是否需要，用户代理都会提供一种滚动机制。因此，有可能即使元素框中可以放下所有内容也会出现滚动条。

可能的值：

* overflow: auto;如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。

* overflow: hidden;内容会被修剪，并且其余内容是不可见的。

* overflow: scroll;内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。

* overflow: visible;默认值。内容不会被修剪，会呈现在元素框之外。
## 24-用于控制图像滚动的属性是什么
background-attachment：该属性设置背景图像是随页面其余部分滚动还是固定滚动。
```css
body {
  background-image: url("img_tree.gif");
  background-repeat: no-repeat;
  background-attachment: fixed;
}

```

## 25-什么是响应式网页设计
响应式网站设计是一种网络页面设计布局。

**其理念是**：集中创建页面的图片排版大小，可以智能地根据用户行为以及使用的设备环境进行相对应的布局。
## 26-```{visibility：hidden}和{display：none}```有什么区别
```display:none``` 表示标签根本不会出现在页面上（尽管您仍然可以通过DOM与之交互）。与其他标签之间将没有分配空间。

```visibility:hidden ```表示该标签不可见，但在页面上为其分配了空间。标签已呈现，只是在页面上看不到。
## 26-CSS的特异性是什么意思
如果有两条或两条以上指向同一元素的冲突 CSS 规则，则浏览器将遵循一些原则来确定哪一条是最具体的，并因此胜出.

将特异性（specificity）视为得分/等级，能够确定最终将哪些样式声明应用于元素。

1、行内样式 - 行内（内联）样式直接附加到要设置样式的元素。

2、ID - ID 是页面元素的唯一标识符，例如 #navbar。

3、类、属性和伪类 - 此类别包括 .classes、[attributes] 和伪类，例如：:hover、:focus 等。

4、元素和伪元素 - 此类别包括元素名称和伪元素，比如 h1、div、:before 和 :after。
## 27-CSS中字体相关的属性有哪些
* **Font-style**，指定文本的字体样式，normal	默认值。浏览器显示一个标准的字体样式。italic	浏览器会显示一个斜体的字体样式。oblique	浏览器会显示一个倾斜的字体样式。inherit	规定应该从父元素继承字体样式。

* **Font-variant**，设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小

* **Font-weight**， 属性设置文本的粗细

* Font-size/line-height

* **Font-family**，指定一个元素的字体

* Caption

* Icon

## 28-如何在CSS中使用box-shadow
box-shadow 向框添加一个或多个阴影。该属性是由逗号分隔的阴影列表，每个阴影由 2-4 个长度值、可选的颜色值以及可选的 inset 关键词来规定。省略长度的值是 0。
```css
box-shadow: h-shadow v-shadow blur spread color inset;
```
|值|	描述|
|:---:|:---|
|h-shadow	|必需。水平阴影的位置。允许负值。|
|v-shadow	|必需。垂直阴影的位置。允许负值。|
|blur|	可选。模糊距离。|
|spread|	可选。阴影的尺寸。|
|color|	可选。阴影的颜色。请参阅 CSS 颜色值。|
|inset	|可选。将外部阴影 (outset) 改为内部阴影。|

## 29-什么是弹性布局
flexbox布局正式称为CSS flexible box布局模块，是CSS3中的新布局模块。它可以改善容器中物品的对齐，方向和顺序，即使它们的尺寸是动态的，甚至是未知的。

flex容器的主要特征是能够修改其子项的宽度或高度，以在不同的屏幕尺寸上以最佳方式填充可用空间。

采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。

## 30-浏览器如何确定哪些元素与CSS选择器匹配
浏览器从最右边（key 选择器）到左边匹配选择器。浏览器根据key选择器筛选出DOM中的元素，并遍历其父元素以确定匹配项。选择器链的长度越短，浏览器就可以更快地确定该元素是否与选择器匹配。
例如，使用选择器p span，浏览器首先找到所有元素，然后向上遍历其父元素直到根，以找到
元素。对于特定的，只要找到，它就会知道匹配并且可以停止其匹配。
## 31-解释为什么选择有时候使用translate（）而不是绝对定位
translate是CSS transform的值。更改变换或不透明度不会触发浏览器重排或重新绘制，但会触发合成。而更改绝对定位会触发回流。变换使浏览器为该元素创建一个GPU层，但是更改绝对定位属性将使用CPU。

因此，translate（）效率更高，并且可以缩短绘制时间，从而使动画更流畅。

```css
.content{
    transform:translate(100px)
}
/* 元素向X，Y轴方向位移100px */
```

## 32-解释通过移动优先策略和自适应设计两种方法的差异
这两种方法不是唯一的。使网站具有响应能力意味着某些元素将通过CSS媒体查询根据设备的屏幕尺寸（通常是视口宽度）来调整其大小或其他功能，从而做出响应。

例如，在较小的设备上减小字体大小。
```css
@media (min-width: 601px) {
​
.my-class {
​
font-size: 24px;
​
}
@media (max-width: 600px) {
​
.my-class {
​
font-size: 12px;
​
}
​
}
```

移动优先策略也具有响应能力，但是，它同意我们应该默认并定义移动设备的所有样式，并且仅在以后向其他设备添加特定的响应规则。遵循前面的示例：
```css
.my-class {
​
font-size: 12px;
​
}
​
@media (min-width: 600px) {
​
.my-class {
​
font-size: 24px;
​
}
​
}
```

移动优先策略具有两个主要优点：

1、由于不必针对任何媒体查询验证适用于它们的所有规则，因此在移动设备上的性能更高

2、它会强制针对响应式CSS规则编写更简洁的代码

## 33-CSS如何实现元素的定位
position属性指定用于元素的定位方法的类型。

有五个不同的位置值：

* position: fixed;生成固定定位的元素，相对于浏览器窗口进行定位

* position: static;默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。

* position: absolute;生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。

* position: sticky;粘性定位，该定位基于用户滚动的位置。
它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置

* position: relative;生成相对定位的元素，相对于其正常位置进行定位。
因此，"left:20" 会向元素的 原来 位置添加 20 像素。

然后使用top，bottom，left和right属性定位元素。但是，除非首先设置position属性，否则这些属性将不起作用。根据位置值，它们的工作方式也不同。
## 34-什么是块级格式化上下文（BFC），如何工作
1.规范解释：块格式化上下文（Block Formatting Context，BFC）是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。

2.通俗解释：
BFC 是一个独立的布局环境,可以理解为一个容器,在这个容器中按照一定规则进行物品摆放,并且不会影响其它环境中的物品。

如果一个元素符合触发BFC的条件，则该元素中的布局不受外部影响。

浮动元素会创建BFC，所以浮动元素内部子元素主要受浮动元素影响，两个浮动元素之间是互不影响的。

3.创建方式：

根元素或包含根元素的元素

浮动元素 float ＝ left | right 或 inherit（≠ none）

绝对定位元素 position ＝ absolute 或 fixed

display ＝ inline-block | flex | inline-flex | table-cell 或 table-caption

overflow ＝ hidden | auto 或 scroll (≠ visible)
## 35-这段CSS代码会产生什么影响？{box-sizing：border-box;}
默认情况下，元素具有box-sizing：应用了content-box，并且仅考虑了内容大小。

box-sizing：边框更改了元素的宽度和高度的计算方式，边框和填充也包括在计算中。

元素的高度由内容的高度+垂直填充+垂直边框宽度计算得出。

元素的宽度是通过内容的宽度+水平填充+水平边框宽度来计算的。

在我们的盒子模型中，考虑到填充物和边框，与设计人员实际如何想象网格中的内容产生了更好的共鸣。

## 36-什么是CSS预处理器？何时建议在项目中使用预处理器
CSS预处理器是用一种专门的编程语言，进行Web页面样式设计，然后再编译成正常的CSS文件，以供项目使用。

 SCSS其语法完全兼容CSS3，并且继承了SCSS的强大功能。由于SCSS是CSS的扩展，因此所有在CSS中正常工作的代码也能在SCSS中正常工作。比CSS多出好多功能如变量、嵌套、混合(Mixin)、继承等。

什么时候用取决于项目的类型，但是预处理器具有以下优点/缺点。

优点：

1、CSS变得更易于维护。

2、易于编写嵌套选择器。

3、用于一致主题的变量。可以跨不同项目共享主题文件。

4、Mixins生成重复的CSS。

5、诸如循环，列表和映射之类的Sass功能可以使配置更容易且更省力。

6、将您的代码分成多个文件。CSS文件也可以拆分，但是这样做需要HTTP请求才能下载每个CSS文件。

缺点：

1、需要进行预处理的工具。重新编译时间可能很慢。

2、不编写当前和潜在可用的CSS。例如，通过将诸如 postcss-loader之类的内容 与 webpack一起使用，您可以编写可能与将来兼容的CSS，从而使您可以使用CSS变量（而不是Sass变量）之类的东西
## 37-相对，固定，绝对和静态定位的元素有什么区别
定位元素是计算的位置属性是relative, fixed, absolute and static。

* 静态static

默认位置；默认为0。元素将像往常一样流入页面。top，right，bottom，left和z-index属性不适用。

* 相对relative

元素的位置相对于自身进行了调整，而没有更改布局（因此，如果没有放置元素，将为元素留出一定的空隙）。

* 绝对absolute

元素从页面流中删除，并且相对于其最接近的祖先（如果有）或相对于初始包含块而定位在指定的位置。绝对定位的盒子可以有边距，并且不会与其他任何边距一起折叠。这些元素不会影响其他元素的位置。

* 固定 fixed

将元素从页面流中移除，并将其放置在相对于视口的指定位置，并且在滚动时不会移动。

* 粘性sticky

粘性定位是相对定位和固定定位的混合。将该元素视为相对位置，直到它超过指定的阈值为止，此时将其视为固定位置。
## 38-什么是供应商前缀
浏览器供应商有时会在实验性或非标准CSS属性和JavaScript API中添加前缀，因此，从理论上讲，开发人员可以尝试新的想法，同时从理论上防止在标准化过程中依赖他们的实验，然后破坏Web开发人员的代码。开发人员应等待包括未添加前缀的属性，直到浏览器行为标准化为止。

主流浏览器使用以下前缀：

-webkit- （Chrome，Safari，Opera的较新版本，几乎所有的iOS浏览器（包括Firefox for iOS）；基本上是任何基于WebKit的浏览器）

-moz- （Firefox）

-o- （旧的，WebKit之前的Opera版本）

-ms- （Internet Explorer和Microsoft Edge）
## 39-什么是文件分割，何时使用
良好的CSS架构的应该有合理的文件组织。整体文件适合单独的开发人员或非常小的项目。对于大型项目（具有多种布局和内容类型的站点，或在同一设计框架下具有多个品牌的站点），使用模块化方法并将CSS拆分为多个文件更为明智。
跨文件拆分CSS可以更轻松地将任务打包给团队。一个开发人员可以处理与排版相关的样式，而另一个开发人员可以专注于开发网格组件。团队可以合理地分工并提高整体生产率。

这是一个虚拟的CSS结构：

```
reset.css：重置和规范化样式；颜色，边框或字体相关的声明

typography.css：标题和正文文本的字体，粗细，行高，大小和样式

layouts.css：管理页面布局和分段（包括网格）的样式

forms.css：表单控件和标签的样式

list.css：特定于列表的样式

table.css：表格专用样式

carousel.css：轮播组件所需的样式

accordion.css：手风琴组件的样式
```
## 40-CSS在后台如何运行
浏览器显示文档时，必须将文档的内容与其样式信息结合在一起。它分两个阶段处理文档：
浏览器将HTML和CSS转换为DOM（文档对象模型）。DOM表示计算机内存中的文档。它结合了文档的内容和样式。
浏览器显示DOM的内容。
## 41-box-sizing属性?
用来控制元素的盒子模型的解析模式，默认为content-box

* context-box：W3C的标准盒子模型，设置元素的 height/width 属性指的是content部分的高/宽

* border-box：IE传统盒子模型。设置元素的height/width属性指的是border + padding + content部分的高/宽

## 42-CSS选择器有哪些？哪些属性可以继承
CSS选择符：id选择器(#myid)、类选择器(.myclassname)、标签选择器(div, h1, p)、相邻选择器(h1 + p)、子选择器（ul > li）、后代选择器（li a）、通配符选择器（*）、属性选择器（a[rel=“external”]）、伪类选择器（a:hover, li:nth-child）

* 可继承的属性：font-size, font-family, color

* 不可继承的样式：border, padding, margin, width, height

优先级（就近原则）：!important > [ id > class > tag ]
!important 比内联优先级高
## 43-用纯CSS创建一个三角形的原理是什么
首先，需要把元素的宽度、高度设为0。然后设置边框样式。
```css
width: 0;
height: 0;
border-top: 40px solid transparent;
border-left: 40px solid transparent;
border-right: 40px solid transparent;
border-bottom: 40px solid #ff0000;
```
## 44-为什么要初始化CSS样式
因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异
## 45-为什么会出现浮动和什么时候需要清除浮动？清除浮动的方式
浮动元素碰到包含它的边框或者浮动元素的边框停留。由于浮动元素不在文档流中，所以文档流的块框表现得就像浮动框不存在一样。浮动元素会漂浮在文档流的块框上。

浮动带来的问题：

* 父元素的高度无法被撑开，影响与父元素同级的元素
* 与浮动元素同级的非浮动元素（内联元素）会跟随其后
* 若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构。

清除浮动的方式：

* 父级div定义height
* 最后一个浮动元素后加空div标签 并添加样式clear:both。
* 包含浮动元素的父标签添加样式overflow为hidden或auto。
* 父级div定义zoom
## 46-上下margin重合的问题
在重合元素外包裹一层容器，并触发该容器生成一个BFC。
```html
<div class="aside"></div>
<div class="text">
    <div class="main"></div>
</div>
<!--下面是css代码-->

 .aside {
            margin-bottom: 100px;  
            width: 100px;
            height: 150px;
            background: #f66;
        }
        .main {
            margin-top: 100px;
            height: 200px;
            background: #fcc;
        }
         .text{
            /*盒子main的外面包一个div，通过改变此div的属性使两个盒子分属于两个不同的BFC，以此来阻止margin重叠*/
            overflow: hidden;  //此时已经触发了BFC属性。
        }
        
```
## 47-设置元素浮动后，该元素的display值是多少
自动变成display:block
## 48- 移动端的布局用过媒体查询吗
通过媒体查询可以为不同大小和尺寸的媒体定义不同的css，适应相应的设备的显示。

```CSS : @media only screen and (max-device-width:480px) {/css样式/}```
##  49-在网页中的应该使用奇数还是偶数的字体？为什么呢
使用偶数字体。

偶数字号相对更容易和 web 设计的其他部分构成比例关系。

Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px 这三个大小的点阵，而 13、15、17 px时用的是小一号的点。（即每个字占的空间大了 1 px，但点阵没变），于是略显稀疏
## 50-margin和padding分别适合什么场景使用
何时使用margin：

* 需要在border外侧添加空白

* 空白处不需要背景色

* 上下相连的两个盒子之间的空白，需要相互抵消时。

何时使用padding：

* 需要在border内侧添加空白

* 空白处需要背景颜色

* 上下相连的两个盒子的空白，希望为两者之和。

* 兼容性的问题：在IE5 IE6中，为float的盒子指定margin时，左侧的margin可能会变成两倍的宽度。通过改变padding或者指定盒子的display：inline解决。
## 51-全屏滚动的原理是什么？用到了CSS的哪些属性
有点类似于轮播，整体的元素一直排列下去，假设有5个需要展示的全屏页面，那么高度是500%，只是展示100%，剩下的可以通过transform进行y轴定位，也可以通过margin-top实现
overflow：hidden；transition：all 1000ms ease；
## 52-你对line-height是如何理解的
行高是指一行文字的高度，具体说是两行文字间基线的距离。

CSS中起高度作用的是height和line-height，没有定义height属性，最终其表现作用一定是line-height。

单行文本垂直居中：把line-height值设置为height一样大小的值可以实现单行文字的垂直居中，其实也可以把height删除。

多行文本垂直居中：需要设置display属性为inline-block。
## 53-怎么让Chrome支持小于12px 的文字
```css
p{font-size:10px;-webkit-transform:scale(0.8);} 
/* 0.8是缩放比例 */
```
## 54-css3的相关动画属性
CSS3动画三兄弟：```transition、transform、animation```
* transition过渡
```
	 1、transition-property：指定元素的哪些属性进行过渡，比如width、color等。
	 2、transtion-duration: 指定属性过渡的持续时间。
	 3、transition-timing-function: 指定渐变的速度。（如ease、linear、ease-in、 ease-out、）
	 4、transition-delay: 指定延迟的时间。经过多长时间开始过渡。
	 这些属性可以分开写，也可以合着写。
```
* transform转换

transform-origin 属性： 定义元素的中心点。接受三个参数（x-axis y-axis z-axis）

2D转换方法（常见）
```
    1、 translate(x,y)	    定义 2D 转换，沿着 X 和 Y 轴移动元素
	2、 rotate(angle)	    定义 2D 旋转， 在参数中规定角度
    3、 scale(x,y)	        定义 2D 缩放转换，改变元素的宽度和高度
    4、 skew(x-angle,y-angle)， 定义 2D 倾斜转换，沿着 X 和 Y 轴
```
3D转换方法（常见）

```
	1、 translate3d(x,y,z)	定义 3D 转换。	
		translateX(x)	定义转换，只是用 X 轴的值。	 
		translateY(y)	定义转换，只是用 Y 轴的值。	 
		translateZ(z)	定义 3D 转换，只是用 Z 轴的值。
	2、rotate3d(x,y,z)  rotateX(angle)	 rotateY(angle)	 rotateZ(angle)
	3、scale3d(x,y,z)	scaleX(x)	     scaleY(y)	    scaleZ(z)
```

* animation动画
共有8个属性，可分开写，可也以合着
```
animation-name:myfirst; // 规定 @keyframes 动画的名称
animation-duration:5s; // 规定动画完成一个周期所花费的秒或毫秒
animation-timing-function:linear; // 规定动画的速度曲线
animation-delay:1s; // 规定动画何时开始	
animation-iteration-count:infinite; // 规定动画被播放的次数,infinite无限次
animation-direction:alternate;// 规定动画是否在下一周期逆向地播放
animation-play-state:running;// 规定动画是否正在运行或暂停	
```

用keyframes定义动画序列。配置了动画执行时间后 利用keyframes配置动画的样子。from 代表 0% 开始动画样式 to 代表 100% 动画结束的样子 中间可以自己配置额外的keyframes ，写法如下：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>动画</title>
  <!-- 动画比过渡的优点在于,可以不需要手动操作就能实现自动播放和循环播放 过程可控 运动完之后停留在结束状态 -->
  <!-- 动画的使用分为两步:
  1.定义动画 动画名字可以自定义，理解成取类名
  2.使用动画 -->
  <style>
    .box{
      width: 100px;
      height: 100px;
      background-color: #eee8aa;
      margin: 100px auto;
      /* 使用动画 */
      /* 属性名： 动画名(必写) 运动时间(必写) 速度曲线 延迟时间 运动次数(infinite是无限的意思) 运动方向 执行完毕时的状态  */
      /* 速度曲线：linear（匀速线性运动） ease-in-out(开始和结束慢) */
      /* 运动方向：alternate 逆向播放 回来的那一次也算一次次数 */
      /* 结束状态：forward(停留在结束状态) 默认停留在起始状态 */
      animation: yundong 3s  2 linear forwards alternate;    
    }
    .box:hover{
        /* 鼠标移动到box，停止动画 */
      animation-play-state: paused;
    }
    /* 定义动画 */
    @keyframes yundong{
      form{
      }
     to{
      transform: translateX(600px) rotatey(360deg);
      }
    }
  </style>
</head>
<body>
  <div class="box">
    <h2>简单动画</h2>
  </div>
</body>
</html>
```
## 55-css文件有几种引入方式
* 链接式 ： 在网页的<head></head>标签对中使用<link>标记来引入外部样式表文件，使用html规则引入外部css (用得比较多) 
```html
<link href="./mystyle.css" rel="stylesheet" type="text/css"/>
```
* 导入式 ： 将一个独立的.css文件引入HTML文件中，导入式使用CSS规则引入外部CSS文件，```<style>标记也是写在<head>标记中，使用的语法如下```
```html
<style type="text/css">

   @import"mystyle.css"; 
   /* 此处要注意.css文件的路径 */

</style>
```
>比较：link引用和import引用区别是：link是html加载前就引用，而import是html加载后才引用。举例，采用impor引用，会先显示无样式的页面，然后再把样式放进去。如果用JavaScript动态引用CSS，得使用link引用方式才可实现。

* 内联css文件，直接在header 里面写css，如
```html
<style type="text/css">

    p{

        margin: 0;

        padding: 0;

        border:1px red solid;

    }

</style>
```
这种方法的使用情况要少的多，最长见得就是访问量大的门户网站。或者访问量较大的企业网站的首页。与第一种方法比起来，优点突出，弊端也明显。

**优点**：速度快，所有的CSS控制都是针对本页面标签的，没有多余的ＣＳＳ命令；再者不用外链ＣＳＳ文件。直接在ＨＴＭＬ文档中读取样式。

**缺点**：就是改版麻烦些，单个页面显得臃肿，ＣＳＳ不能被其他ＨＴＭＬ引用造成代码量相对较多，维护也麻烦些。但是采用这种方法的公司大多有钱，对他们来说用户量是关键，他们不缺人进 行复杂的维护工作。

