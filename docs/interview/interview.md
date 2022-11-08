
# HTML面试题
## 01-简述一下你对 HTML 语义化的理解
1. 用正确的标签做正确的事情

2. html 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析；即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的

3. 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO

4. 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解

5. 便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循 W3C 标准的团队都遵循这个标准，可以减少差异化。 HTML5 中新增加的很多标签（如：```<article>、<nav>、<header> 和 <footer>``` 等） 就是基于语义化设计原则）下面就是语义化 html 代码：

```html
<div id="header">
   <h1>标题</h1>
   <h2>专注Web前端技术</h2>
</div>
```

## 02-Label 的作用是什么？是怎么用的
label 标签来定义表单控制间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。<br><br>
**Label两种用法**
* id绑定
```js
    <label for="Name">姓名</label>
    <input type="text" name="Name" id="Name"/>
    // label标签与与input框通过id绑定，当点击姓名时，input框剪将获取焦点
```
* 嵌套
```js
<label>姓名:<input type="text" name="B"/></label>
// 点击姓名时，input框剪将获取焦点
```
## 03-iframe 框架有那些优缺点
### 优点
* iframe 能够原封不动的把嵌入的网页展现出来
* 如果有多个网页引用 iframe，那么你只需要修改 iframe 的内容，就可以实现调用的每一个页面内容的更改，方便快捷
* 网页如果为了统一风格，头部和版本都是一样的，就可以写成一个页面，用 iframe 来嵌套，可以增加代码的可重用
* 如果遇到加载缓慢的第三方内容如图标和广告，这些问题可以由 iframe 来解决
### 缺点
* 框架结构中出现各种滚动条
* iframe 会阻塞主页面的 Onload 事件
* 搜索引擎的检索程序无法解读这种页面，不利于 SEO
* iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载
## 04-HTML 与 XHTML 二者有什么区别，你觉得应该使用哪一个并说出理由
应该使用XHTML，因为XHTML是XML重写了HTML的规范，比HTML更加严格，表现如下：

1、XHTML中所有的标记都必须有一个相应的结束标签；

2、XHTML所有标签的元素和属性的名字都必须使用小写；

3、所有的XML标记都必须合理嵌套；

4、所有的属性都必须用引号“”括起来；

5、把所有<和&特殊符号用编码表示；

6、给所有属性附一个值；

7、不要在注释内容中使用“--”；

8、图片必须使用说明文字。
## 05-title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别

①title用于网站信息标题，突出网站标题或关键字，一个网站可以有多个title，seo权重高于H1；H1概括的是文章主题，一个页面最好只用一个H1，seo权重低于title。


**解析：**

A.从网站角度而言，title则重于网站信息标题，突出网站标题或关键字用title，一篇文章，一个页面最好只

用一个H1，H1用得太多，会稀释主题；一个网站可以有多个title，最好一个单页用一个title以便突出网站页面主题信息。

B.从文章角度而言，H1则概括的是文章主题，突出文章主题，用H1，面对的用户，要突出其视觉效果。

C.从SEO角度而言，title的权重高于H1，其适用性要比H1广。


②b为了加粗而加粗，strong为了标明重点而加粗


**解析：**

A.b这个标签对应 bold，即文本加粗，其目的仅仅是为了加粗显示文本，是一种样式／风格需求；

B.strong这个标签意思是加强字符的语气，表示该文本比较重要，提醒读者／终端注意。为了达到这个目的，浏览器等终端将其加粗显示；

③ 同②i为了斜体而斜体，em为了标明重点而斜体，且对于搜索引擎来说strong和em比b和i要重视的多
## 06-请描述下 SEO 中的 TDK
在 SEO 中，所谓的 TDK 其实就是 title、description、keywords 这三个标签，title 标题标签，description 描述标签，keywords 关键词标签
## 07-每个 HTML 文件头里都有个很重要的东西，Doctype，知道这是干什么的么

```<!DOCTYPE>``` 声明位于文档中的最前面的位置，处于 ```<html>``` 标签之前

* 告知浏览器文档使用哪种 HTML 或 XHTML 规范。

* 告诉浏览器按照何种规范解析页（如果你的页面没有 DOCTYPE 的声明，那么 compatMode 默认就是 BackCompat,浏览器按照自己的方式解析渲染页面）

**解析：**

doctype 是一种标准通用标记语言的文档类型声明，目的是告诉标准通用标记语言解析器要使用什么样的文档类型定义（DTD）来解析文档。

声明是用来指示web浏览器关于页面使用哪个HTML版本进行编写的指令。 声明必须是HTML文档的第一行，位于html标签之前。
浏览器本身分为两种模式，一种是标准模式，一种是怪异模式，浏览器通过 doctype 来区分这两种模式，doctype 在 html 中的作用就是触发浏览器的标准模式，如果 html 中省略了 doctype，浏览器就会进入到 Quirks 模式的怪异状态，在这种模式下，有些样式会和标准模式存在差异，而 html 标准和 dom 标准值规定了标准模式下的行为，没有对怪异模式做出规定，因此不同浏览器在怪异模式下的处理也是不同的，所以一定要在 html 开头使用 doctype。
## 08-简述一下 src 与 href 的区别
src 用于引用资源，替换当前元素；href 用于在当前文档和引用资源之间确立联系。<br><br>
**解析：**
* href

href 标识超文本引用，用在 link 和 a 等元素上，href 是引用和页面关联，是在当前元素和引用资源之间建立联系

若在文档中添加 href ，浏览器会识别该文档为 CSS 文件，就会并行下载资源并且不会停止对当前文档的处理。这也是为什么建议使用 link 方式加载 CSS，而不是使用 @import 方式。
* src

src 表示引用资源，替换当前元素，用在 img，script，iframe 上，src 是页面内容不可缺少的一部分。

当浏览器解析到 src ，会暂停其他资源的下载和处理（图片不会暂停其他资源下载和处理），直到将该资源加载、编译、执行完毕，图片和框架等也如此，类似于将所指向资源应用到当前内容。这也是为什么建议把 js 脚本放在底部而不是头部的原因。
## 09-严格模式与混杂模式
严格模式：以浏览器支持的最高标准运行

混杂模式：页面以宽松向下兼容的方式显示，模拟老式浏览器的行为
## 10-对于 WEB 标准以及 W3C 的理解与认识问题
**web 标准**简单来说可以分为结构、表现和行为。其中结构主要是有 HTML 标签组成。或许通俗点说，在页面 body 里面我们写入的标签都是为了页面的结构。表现即指 css 样式表，通过 css 可以是页面的结构标签更具美感。行为是指页面和用户具有一定的交互，同时页面结构或者表现发生变化，主要是有 js 组成。

**web 标准**一般是将该三部分独立分开，使其更具有模块化。但一般产生行为时，就会有结构或者表现的变化，也使这三者的界限并不那么清晰。

W3C 对 web 标准提出了规范化的要求，也就是在实际编程中的一些代码规范：包含如下几点

1、对于结构要求：（标签规范可以提高搜索引擎对页面的抓取效率，对 SEO 很有帮助）

1）标签字母要小写

2）标签要闭合

3）标签不允许随意嵌套

2、对于 css 和 js 来说

1）尽量使用外链 css 样式表和 js 脚本。是结构、表现和行为分为三块，符合规范。同时提高页面渲染速度，提高用户的体验。

2）样式尽量少用行间样式表，使结构与表现分离，标签的 id 和 class 等属性命名要做到见文知义，标签越少，加载越快，用户体验提高，代码维护简单，便于改版

3）不需要变动页面内容，便可提供打印版本而不需要复制内容，提高网站易用性。
## 11-列举 IE 与其他浏览器不一样的特性
* IE 的排版引擎是 Trident （又称为 MSHTML）

* Trident 内核曾经几乎与 W3C 标准脱节（2005 年）

* Trident 内核的大量 Bug 等安全性问题没有得到及时解决

* JS 方面，有很多独立的方法，例如绑定事件的 attachEvent、创建事件的 createEventObject 等

* CSS 方面，也有自己独有的处理方式，例如设置透明，低版本 IE 中使用滤镜的方式
## 12-前端页面有哪三层构成，分别是什么？作用是什么
分成：结构层、表示层、行为层

**结构层（structural layer）**

由 HTML 或 XHTML 之类的标记语言负责创建。标签，也就是那些出现在尖括号里的单词，对网页内容的语义含义做出了描述，但这些标签不包含任何关于如何显示有关内容的信息。例如，P 标签表达了这样一种语义：“这是一个文本段。”

**表示层（presentation layer）**

由 CSS 负责创建。 CSS 对“如何显示有关内容”的问题做出了回答。

**行为层（behaviorlayer）**

负责回答“内容应该如何对事件做出反应”这一问题。这是 Javascript 语言和 DOM 主宰的领域。
## 13-网页验证码是干嘛的，是为了解决什么安全问题
* 区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、论坛灌水
* 有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试
## 14-为什么用多个域名存储网站资源更有效
1、CDN 缓存更方便

2、突破浏览器并发限制

3、节约 cookie 带宽

4、节约主域名的连接数，优化页面响应速度

5、防止不必要的安全问题
## 15-页面可见性（Page Visibility）API 可以有哪些用途
**页面可见性**：就是对于用户来说，页面是显示还是隐藏, 所谓显示的页面，就是我们正在看的页面；隐藏的页面，就是我们没有看的页面。 因为，我们一次可以打开好多标签页面来回切换着，始终只有一个页面在我们眼前，其他页面就是隐藏的，还有一种就是…，(把浏览器最小化，所有的页面就都不可见了)。

API 很简单，document.hidden 就返回一个布尔值，如果是 true, 表示页面可见，false 则表示，页面隐藏。 不同页面之间来回切换，触发 visibilitychange 事件。 还有一个 document.visibilityState, 表示页面所处的状态，取值：visible, hidden 等四个。
```js
document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    document.title = "hidden";
  } else {
    document.title = "visibile";
  }
});
```
我们打开这个页面，然后再打开另一个页面，来回点击这两个页面，当我们看到这个页面时，标题显示 visiable ,当我们看另一个页面时，标题显示 hidden;

动画，视频，音频都可以在页面显示时打开，在页面隐藏时关闭
## 16-div+css 的布局较 table 布局有什么优点
分离 方便改版 快清晰简洁 seo

* 改版的时候更方便 只要改 css 文件。

* 页面加载速度更快、结构化清晰、页面显示简洁。

* 表现与结构相分离。

* 易于优化（seo）搜索引擎更友好，排名更容易靠前。
## 17-你能描述一下渐进增强和优雅降级之间的不同吗?
**渐进增强 progressive enhancement**：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

（一开始保证最基本的功能，再改进和追加功能）

**优雅降级 graceful degradation**：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

（一开始就构建完整的功能，再针对低版本浏览器进行兼容。）

<font color=red>**区别**</font>：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带

## 18-html 常见兼容性问题
1、双边距 BUG float 引起的，解决办法: 使用 display解决

2、 像素问题 使用 float 引起的，解决办法: 使用 dislpay:inline -3px

3、超链接 hover 点击后失效，解决办法: 使用正确的书写顺序 link visited hover active

4、Ie z-index 问题，解决办法: 给父级添加 position:relative

5、Png 透明 ，解决办法: 使用 js 代码

6、Min-height 最小高度 ，解决办法: ！Important 解决

7、select 在 ie6 下遮盖，解决办法: 使用 iframe 嵌套

8、为什么没有办法定义 1px 左右的宽度容器，解决办法: （IE6 默认的行高造成的，使用 over:hidden,zoom:0.08 line-height:1px）

9、IE5-8 不支持 opacity，解决办法：
```css
.opacity {
  opacity: 0.4;
  filter: alpha(opacity=60); /_ for IE5-7 _/
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"; /_ for IE 8_/
}
```
10、IE6 不支持 PNG 透明背景，解决办法: IE6 下使用 gif 图片
## 19-对 WEB 标准以及 W3C 的理解与认识。
标签闭合、标签小写、不乱嵌套、提高搜索机器人搜索几率、使用外 链 css 和 js 脚本、结构行为表现的分离、文件下载与页面速度更快、内容能被更多的用户所访问、内容能被更广泛的设备所访问、更少的代码和组件，容易维 护、改版方便，不需要变动页面内容、提供打印版本而不需要复制内容、提高网站易用性
## 20-如何在页面上实现一个圆形的可点击区域
css3、js、map 加 area

（一）border-radius (css3)

对于圆形，最直接的方法想到的就是 css3 的圆角属性，这个属性可以将 html 元素的形状设置为圆形，这之后你想对该圆形区域设置什么事件就设置什么事件(当然包括点击)。

（二）通过事件坐标来实现（js）

也就是通过 js 来进行一个区域判断，进而简介地的形成可点区域，以下给出主要的 js 测试代码：
```js
// 获取目标元素
var box = document.getElementById("box");

// 对目标元素target的圆形区域进行一个点击事件绑定
function bindClickOnCircleArea(target, callback) {
  target.onclick = function(e) {
    e = e || window.event;

    // target中心点的坐标
    var x1 = 100;
    var y1 = 100;

    // 事件源坐标
    var x2 = e.offsetX;
    var y2 = e.offsetY;

    // 校验是否在圆形点击区，在的话就执行callback回调
    // 计算事件触发点与target中心的位置
    var len = Math.abs(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
    // 通过半径进行校验
    if (len <= 100) {
      callback();
    } else {
      alert("死鬼，跑哪去啊");
    }
  };
}

// 执行
bindClickOnCircleArea(box, function() {
  alert("呜呜呜");
});
```
（三）通过 map 加 area
```html
<img src="../imgs/test.jpg" width="200" border="0" usemap="#Map" />
<map name="Map" id="Map">
  <area
    shape="circle"
    coords="100,100,100"
    href="http://www.baidu.com"
    target="_blank"
  />
</map>
```
## 21-前端需要注意哪些SEO
1、合理的 title、description、keywords：搜索对着三项的权重逐个减小，title 值强调重点即可，重要关键词出现不要超过 2 次，而且要靠前，不同页面 title 要有所不同；description 把页面内容高度概括，长度合适，不可过分堆砌关键词，不同页面 description 有所不同；keywords 列举出重要关键词即可

2、语义化的 HTML 代码，符合 W3C 规范：语义化代码让搜索引擎容易理解网页

3、重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容一定会被抓取

4、重要内容不要用 js 输出：爬虫不会执行 js 获取内容

5、少用 iframe：搜索引擎不会抓取 iframe 中的内容

6、非装饰性图片必须加 alt

7、提高网站速度：网站速度是搜索引擎排序的一个重要指标
## 22-html5 有哪些新特性、移除了那些元素
**新特性：**

1.拖拽释放(Drag and drop) API

2.语义化更好的内容标签（header,nav,footer,aside,article,section）

3.音频、视频 API(audio,video)

4.画布(Canvas) API

5.地理(Geolocation) API

6.本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；

7.sessionStorage 的数据在浏览器关闭后自动删除

8.表单控件，calendar、date、time、email、url、search

9.新的技术 webworker, websocket, Geolocation

**移除的元素：**

1.纯表现的元素：basefont，big，center，font, s，strike，tt，u；

2.对可用性产生负面影响的元素：frame，frameset，noframes；

**支持 HTML5 新标签：**

IE8/IE7/IE6 支持通过 document.createElement 方法产生的标签，
可以利用这一特性让这些浏览器支持 HTML5 新标签，
浏览器支持新标签后，还需要添加标签默认的样式
## 23-HTML5 的离线储存怎么使用，工作原理能不能解释一下
在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。

**原理**：HTML5 的离线存储是基于一个新建的.appcache 文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像 cookie 一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。

使用方法

只要在头部加一个 manifest 属性就 ok 了
```html
<!DOCTYPE html>
<html manifest="cache.manifest">
  ...
</html>
```
然后 cache.manifest 文件的书写方式如下：

```
CACHE MANIFEST
#v0.11

CACHE:

js/app.js
css/style.css

NETWORK:
resourse/logo.png

FALLBACK:
/ /offline.html
```
**解析：**

代码说明：

离线存储的 manifest 一般由三个部分组成:

CACHE:表示需要离线存储的资源列表，由于包含 manifest 文件的页面将被自动离线存储，所以不需要把页面自身也列出来。
NETWORK:表示在它下面列出来的资源只有在在线的情况下才能访问，他们不会被离线存储，所以在离线情况下无法使用这些资源。不过，如果在 CACHE 和 NETWORK 中有一个相同的资源，那么这个资源还是会被离线存储，也就是说 CACHE 的优先级更高。
FALLBACK:表示如果访问第一个资源失败，那么就使用第二个资源来替换他，比如上面这个文件表示的就是如果访问根目录下任何一个资源失败了，那么就去访问 offline.html。
## 24-浏览器是怎么对 HTML5 的离线储存资源进行管理和加载的呢
在线的情况下，浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件，如果是第一次访问 app，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。如果已经访问过 app 并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。
离线的情况下，浏览器就直接使用离线存储的资源。
## 25-HTML 全局属性(global attribute)有哪些
* accesskey:设置快捷键，提供快速访问元素如aaa在 windows 下的 firefox 中按 alt + shift + a 可激活元素
* class:为元素设置类标识，多个类名用空格分开，CSS 和 javascript 可通过 class 属性获取元素
* contenteditable: 指定元素内容是否可编辑
* contextmenu: 自定义鼠标右键弹出菜单内容
* data-: 为元素增加自定义属性
* dir: 设置元素文本方向
* draggable: 设置元素是否可拖拽
* dropzone: 设置元素拖放类型： copy, move, link
* hidden: 表示一个元素是否与文档。样式上会导致元素不显示，但是不能用这个属性实现样式效果
* id: 元素 id，文档内唯一
* lang: 元素内容的的语言
* spellcheck: 是否启动拼写和语法检查
* style: 行内 css 样式
* tabindex: 设置元素可以获得焦点，通过 tab 可以导航
* title: 元素相关的建议信息
* translate: 元素和子孙节点内容是否需要本地化
## 26-meta viewport 原理是什么
meta viewport 标签的作用是让当前 viewport 的宽度等于设备的宽度，同时不允许用户进行手动缩放

viewport的原理：移动端浏览器通常都会在一个比移动端屏幕更宽的虚拟窗口中渲染页面，这个虚拟窗口就是 viewport; 目的是正常展示没有做移动端适配的网页，让他们完整的展示给用户；

**解析**

Viewport ：字面意思为视图窗口，在移动 web 开发中使用。表示将设备浏览器宽度虚拟成一个特定的值（或计算得出），这样利于移动 web 站点跨设备显示效果基本一致。移动版的 Safari 浏览器最新引进了 viewport 这个 meta tag，让网页开发者来控制 viewport 的大小和缩放，其他手机浏览器也基本支持。

在移动端浏览器当中，存在着两种视口，一种是可见视口（也就是我们说的设备大小），另一种是视窗视口（网页的宽度是多少）。
举个例子：如果我们的屏幕是 320 像素 * 480 像素的大小（iPhone4），假设在浏览器中，320 像素的屏幕宽度能够展示 980 像素宽度的内容。那么 320 像素的宽度就是可见视口的宽度，而能够显示的 980 像素的宽度就是视窗视口的宽度。

为了显示更多的内容，大多数的浏览器会把自己的视窗视口扩大，简易的理解，就是让原本 320 像素的屏幕宽度能够容下 980 像素甚至更宽的内容（将网页等比例缩小）。

Viewport 属性值
* width 设置 layout viewport 的宽度，为一个正整数，或字符串"width-device"
* initial-scale 设置页面的初始缩放值，为一个数字，可以带小数
* minimum-scale 允许用户的最小缩放值，为一个数字，可以带小数
* maximum-scale 允许用户的最大缩放值，为一个数字，可以带小数
* height 设置 layout viewport 的高度，这个属性对我们并不重要，很少使用
* user-scalable 是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes 代表允许这些属性可以同时使用，也可以单独使用或混合使用，多个属性同时使用时用逗号隔开就行了
## 27-对 web 标准、可用性、可访问性的理解
**可用性（Usability）**：产品是否容易上手，用户能否完成任务，效率如何，以及这过程中用户的主观感受可好，是从用户的角度来看产品的质量。可用性好意味着产品质量高，是企业的核心竞争力。

**可访问性（Accessibility）**：Web 内容对于残障用户的可阅读和可理解性

**可维护性（Maintainability）**：一般包含两个层次，一是当系统出现问题时，快速定位并解决问题的成本，成本低则可维护性好。二是代码是否容易被人理解，是否容易修改和增强功能。
## 28-HTML5 引入什么新的表单属性
```Datalist datetime output keygen date month week time number range emailurl```
## 29-新的 HTML5 文档类型和字符集是
HTML5文档类型：```<!doctype html>```

HTML5使用的编码```<meta charset=”UTF-8”>```
## 30-HTML5 Canvas 元素有什么用
Canvas 元素用于在网页上绘制图形，该元素标签强大之处在于可以直接在 HTML 上进行图形操作。
## 31-iframe 的作用
iframe 是用来在网页中插入第三方页面，早期的页面使用 iframe 主要是用于导航栏这种很多页面都相同的部分，这样在切换页面的时候避免重复下载。

## 32-为什么最好把 CSS 的<link>标签放在<head></head>之间
<font color=red>把```<link>```放在```<head>```中</font>


把```<link>```标签放在```<head></head>```之间是规范要求的内容。此外，这种做法可以让页面逐步呈现，提高了用户体验。将样式表放在文档底部附近，会使许多浏览器（包括 Internet Explorer）不能逐步呈现页面。一些浏览器会阻止渲染，以避免在页面样式发生变化时，重新绘制页面中的元素。这种做法可以防止呈现给用户空白的页面或没有样式的内容。

<font color=red>把```<script>```标签恰好放在```</body>```之前</font>


脚本在下载和执行期间会阻止 HTML 解析。把```<script>```标签放在底部，保证 HTML 首先完成解析，将页面尽早呈现给用户。

例外情况是当你的脚本里包含document.write()时。但是现在，document.write()不推荐使用。同时，将```<script>```标签放在底部，意味着浏览器不能开始下载脚本，直到整个文档（document）被解析。也许，对此比较好的做法是，```<script>```使用defer属性，放在```<head>```中。
## 33-什么是渐进式渲染（progressive rendering）
渐进式渲染是用于提高网页性能（尤其是提高用户感知的加载速度），以尽快呈现页面的技术。

在以前互联网带宽较小的时期，这种技术更为普遍。如今，移动终端的盛行，而移动网络往往不稳定，渐进式渲染在现代前端开发中仍然有用武之地。

**一些举例：**

* 图片懒加载——页面上的图片不会一次性全部加载。当用户滚动页面到图片部分时，JavaScript 将加载并显示图像。

* 确定显示内容的优先级（分层次渲染）——为了尽快将页面呈现给用户，页面只包含基本的最少量的 CSS、脚本和内容，然后可以使用延迟加载脚本或监听DOMContentLoaded/load事件加载其他资源和内容。

*异步加载 HTML 片段——当页面通过后台渲染时，把 HTML 拆分，通过异步请求，分块发送给浏览器。
## 34-DOM 和 BOM 有什么区别
* DOM
Document Object Model，文档对象模型

DOM 是为了操作文档出现的 API，document 是其的一个对象

DOM 和文档有关，这里的文档指的是网页，也就是 html 文档。DOM 和浏览器无关，他关注的是网页本身的内容。

* BOM
Browser Object Model，浏览器对象模型

BOM 是为了操作浏览器出现的 API，window 是其的一个对象

window 对象既为 javascript 访问浏览器提供 API，同时在 ECMAScript 中充当 Global 对象
## 35-img 上 title 与 alt
title 指图片的信息、alt 指图片不显示时显示的文字
## 36-请谈一下你对网页标准和标准制定机构重要性的理解。
降低开发难度及开发成本，减少各种 BUG、安全问题， 提高网站易用性
## 37-知道什么是微格式吗？谈谈理解。在前端构建中应该考虑微格式吗？
微格式（Microformats）是一种让机器可读的语义化 XHTML 词汇的集合，是结构化数据的开放标准。是为特殊应用而制定的特殊格式。

优点：将智能数据添加到网页上，让网站内容在搜索引擎结果界面可以显示额外的提示。```（应用范例：豆瓣，有兴趣自行 google）```
## 38-页面导入样式时，使用link和@import有什么区别
相同的地方，都是外部引用CSS方式

**区别：**
```
link是xhtml标签，除了加载css外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS
link引用CSS时候，页面载入时同时加载；@import需要在页面完全加载以后加载，而且@import被引用的CSS会等到引用它的CSS文件被加载完才加载
link是xhtml标签，无兼容问题；@import是在css2.1提出来的，低版本的浏览器不支持
link支持使用javascript控制去改变样式，而@import不支持
link方式的样式的权重高于@import的权重
import在html使用时候需要<style type="text/css">标签

```
## 39-介绍一下你对浏览器内核的理解
主要分成两部分：渲染引擎(Layout Engine或Rendering Engine)和JS引擎。

**渲染引擎**：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。

**JS引擎**：解析和执行javascript来实现网页的动态效果。

最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。
## 40-常见的浏览器内核有哪些
* Trident( MSHTML )：IE MaxThon TT The World 360 搜狗浏览器
* Geckos：Netscape6及以上版本 FireFox Mozilla Suite/SeaMonkey
* Presto：Opera7及以上(Opera内核原为：Presto，现为：Blink)
* Webkit：Safari Chrome
## 41-cookies，sessionStorage和localStorage的区别
共同点：都是保存在浏览器端，且是同源的。

区别：

cookies是为了标识用户身份而存储在用户本地终端上的数据，始终在同源http请求中携带，即cookies在浏览器和服务器间来回传递。而sessionstorage和localstorage不会自动把数据发给服务器，仅在本地保存。

<font color=red>存储大小的限制不同。</font>cookie保存的数据很小，不能超过4k，而sessionstorage和localstorage保存的数据大，可达到5M。

<font color=red>数据的有效期不同。</font>cookie在设置的cookie过期时间之前一直有效，即使窗口或者浏览器关闭。sessionstorage仅在浏览器窗口关闭之前有效。localstorage始终有效，窗口和浏览器关闭也一直保存，用作长久数据保存。

<font color=red>作用域不同。</font>cookie在所有的同源窗口都是共享；sessionstorage不在不同的浏览器共享，即使同一页面；localstorage在所有同源窗口都是共享

## 42-webSocket如何兼容低浏览器
1、Adobe Flash Socket ActiveX HTMLFile (IE) 基于 multipart 编码发送 XHR 基于长轮询的 XHR

2、引用WebSocket.js这个文件来兼容低版本浏览器。

## 43-知道的网页制作会用到的图片格式有哪些
**Webp**：WebP格式，谷歌（google）开发的一种旨在加快图片加载速度的图片格式。
并能节省大量的服务器带宽资源和数据空间。Facebook Ebay等知名网站已经开始测试并使用WebP格式。

**Apng**：是PNG的位图动画扩展，可以实现png格式的动态图片效果，有望代替GIF成为下一代动态图标准。

## 44-行内元素有哪些？块级元素有哪些？ 空(void)元素有那些
CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，如div的display默认值为“block”，则为“块级”元素；span默认display属性值为“inline”，是“行内”元素。

* 块级元素：

(1) 总是在新行上开始；

(2) 高度，行高以及外边距和内边距都可控制；

(3) 宽度缺省是它的容器的 100%，除非设定一个宽度。

(4) 它可以容纳内联元素和其他块元素

* 行内元素：

(1) 和其他元素都在一行上；

(2) 高，行高及外边距和内边距不可改变；

(3) 宽度就是它的文字或图片的宽度，不可改变

(4) 内联元素只能容纳文本或者其他内联元素

* 对行内元素，需要注意如下：

(1) 设置宽度 width 无效。

(2) 设置高度 height 无效，可以通过 line-height 来设置。

(3) 设置 margin 只有左右 margin 有效，上下无效。

(4) 设置 padding 只有左右 padding 有效，上下则无效。注意元素范围是增大了，但是对元素周围的内容是没影响的。

  （1）行内元素有：a b span img input select

  （2）块级元素有：div p ul ol li dl dt dd h1-h6

  （3）常见的空元素：br-换行，hr-水平分割线

## 45-隐藏元素的几种方法
（1）display:none;

（2）visibility:hidden;

（3）opacity:0;

（4）position:absolute; left:-10000px;

## 46-清除浮动的方法有哪些
第一种：clear:both

在父元素的里面添加一个空的clear的div（跟浮动的子级同级），然后再为这个类添加属性值clear:both;便可以清除浮动。

第二种：overflow：hidden

在父元素的样式中添加overflow: hidden;也可以清除浮动，如下css代码，但不提倡使用这个方法，overflow: hidden;还有一个意思就是隐藏超出的部分，处理不好还是会给页面带来麻烦。

## 47-从浏览器地址栏输入url到显示页面的步骤
浏览器根据请求的URL交给DNS域名解析，找到真实IP，向服务器发起请求；

服务器交给后台处理完成后返回数据，浏览器接收文件（HTML、JS、CSS、图象等）；

浏览器对加载到的资源（HTML、JS、CSS等）进行语法解析，建立相应的内部数据结构（如HTML的DOM）；
载入解析到的资源文件，渲染页面，完成。

## 48-说说常用的 meta 标签
meta 标签提供关于HTML文档的元数据。元数据不会显示在页面上，但是对于机器是可读的。它可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 web 服务。

常用的 meta 标签的属性有：

**content** ，设置或返回 meta 元素的 content 属性的值 。

**http-equiv**，把 content 属性连接到一个 HTTP 头部。

**name**，把 content 属性连接到某个名称。其值有
* application-name
* author
* description
* generator
* keywords

## 49-Quirks（怪癖）模式是什么？它和 Standards（标准）模式有什么区别
以 IE6 为例，如果写了 DTD，就意味着这个页面将采用对 CSS 支持更好的布局，而如果没有，则采用兼容之前的布局方式。这就是 Quirks 模式（怪癖模式，诡异模式，怪异模式）。

**区别**：总体会有布局、样式解析和脚本执行三个方面的区别，这里列举一些比较常见的区别：

* 盒模型：在 W3C 标准中，如果设置一个元素的宽度和高度，指的是元素内容的宽度和高度，而在 Quirks 模式下，IE 的宽度和高度还包含了 padding 和 border。

* 设置行内元素的高宽：在 Standards 模式下，给 ```<span> ```等行内元素设置 wdith 和 height 都不会生效，而在 Quirks 模式下，则会生效。

* 设置百分比的高度：在 Standards 模式下，一个元素的高度是由其包含的内容来决定的，如果父元素没有设置百分比的高度，子元素设置一个百分比的高度是无效的

* 用``` margin:0 auto ```设置水平居中：使用 ```margin:0 auto ```在 Standards 模式下可以使元素水平居中，但在 Quirks 模式下却会失效。

## 50-HTML5 为什么只需要写 ```<!DOCTYPE HTML>```

为什么 HTML5 的顶部只需要一段
```html
<!DOCTYPE html>
```
HTML4 却需要很长的一段
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

其主要原因，是因为 HTML5 不基于 SGML，所以不需要引用 DTD。

在 HTML 4.01 中，<!DOCTYPE> 声明引用 DTD，因为 HTML 4.01 基于 SGML。

DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。

## 51-h5 和 html5 区别

H5 是一个产品名词，包含了最新的 HTML5、CSS3、ES6 等新的技术来制作的应用。

HTML5 是一个技术名词，指代的就仅仅是第五代 HTML。

## 52-form 表单上传文件时需要进行什么样的声明
需要添加如下的声明：

```html {2}
<form 
  enctype="multipart/form-data" 
  method="post"
  >
     <input type="file" name="uploadfile"/>
</form>
```

## 53-什么是锚点
锚点（anchor）是一种特殊连接，能定位到 HTML 文档中某个特定位置，通过 HTML 元素的 id 来设置锚点。

锚点使用方法如下
```html
<div id="control">
		<li><a href="#top">top</a></li>
		<li><a href="#mid">mid</a></li>
		<li><a href="#bottom">bottom</a></li>
</div>
<div id="top"></div>
<div style="height: 1000px; width: 300px; background-color: yellow"></div>
<div id="mid">点击mid跳转到这里</div>
<div style="height: 1000px; width: 300px; background-color: red"></div>
<div id="bottom">点击bottom跳转到这里</div>
  ```

## 54-图片与 span 元素混排图像下方会出现几像素的空隙的原因是什么
img 作为可替换元素，它没有自己的基线，如果与不可替换元素混合排列，其行盒底端与基线对齐。由于与基线对齐，图像下方就会出现几像素的空隙。

## 55-a元素除了用于导航外，还可以有什么作用
href 属性中的 url 可以是浏览器支持的任何协议，所以 a 可以用于手机拨号 ```<a href=‘tel:10086’>10086、发送短信 <a href=“sms:10086?body=test”>``` 等。

当然，a 元素最常见的两个应用就是做锚点和下载文件。

锚点可以在点击时快速定位到一个页面的某一个位置，而下载的原理在于 a 标签所对应的资源浏览器无法解析，于是浏览器会选择将其下载下来。




