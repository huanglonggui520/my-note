# 浏览器插件开发笔记

## manifest.json配置文件
```js
{
	// 清单文件的版本，这个必须写，而且必须是2
	"manifest_version": 2,
	// 插件的名称
	"name": "demo",
	// 插件的版本
	"version": "1.0.0",
	// 插件描述
	"description": "简单的Chrome扩展demo",
	// 图标，一般偷懒全部用一个尺寸的也没问题
	"icons":
	{
		"16": "img/icon.png",
		"48": "img/icon.png",
		"128": "img/icon.png"
	},
	// 会一直常驻的后台JS或后台页面
	"background":
	{
		// 2种指定方式，如果指定JS，那么会自动生成一个背景页
		"page": "background.html"
		//"scripts": ["js/background.js"]
	},
	// 浏览器右上角图标设置，browser_action、page_action、app必须三选一
	"browser_action": 
	{
		"default_icon": "img/icon.png",
		// 图标悬停时的标题，可选
		"default_title": "这是一个示例Chrome插件",
		"default_popup": "popup.html"
	},
	// 当某些特定页面打开才显示的图标
	/*"page_action":
	{
		"default_icon": "img/icon.png",
		"default_title": "我是pageAction",
		"default_popup": "popup.html"
	},*/
	// 需要直接注入页面的JS，会将这些JS代码插入页面
	"content_scripts": 
	[
		{
			//"matches": ["http://*/*", "https://*/*"],
			// "<all_urls>" 表示匹配所有地址
			"matches": ["<all_urls>"],//匹配所有网页
			// 多个JS按顺序注入
			"js": ["js/jquery-1.8.3.js", "js/content-script.js"],//将这两个JS注入其他网站
			// JS的注入可以随便一点，但是CSS的注意就要千万小心了，因为一不小心就可能影响全局样式
			"css": ["css/custom.css"],
			// 代码注入的时间，可选值： "document_start", "document_end", or "document_idle"，最后一个表示页面空闲时，默认document_idle
			"run_at": "document_start"
		},
		// 这里仅仅是为了演示content-script可以配置多个规则
		{
			"matches": ["*://*/*.png", "*://*/*.jpg", "*://*/*.gif", "*://*/*.bmp"],
			"js": ["js/show-image-content-size.js"]
		}
	],
	// 权限申请
	"permissions":
	[
		"contextMenus", // 右键菜单
		"tabs", // 标签
		"notifications", // 通知
		"webRequest", // web请求
		"webRequestBlocking",
		"storage", // 插件本地存储
		"http://*/*", // 可以通过executeScript或者insertCSS访问的网站
		"https://*/*" // 可以通过executeScript或者insertCSS访问的网站
	],
	// 普通页面能够直接访问的插件资源列表，如果不设置是无法直接访问的
	"web_accessible_resources": ["js/inject.js"],
	// 插件主页，这个很重要，不要浪费了这个免费广告位
	"homepage_url": "https://www.baidu.com",
	// 覆盖浏览器默认页面
	"chrome_url_overrides":
	{
		// 覆盖浏览器默认的新标签页
		"newtab": "newtab.html"
	},
	// Chrome40以前的插件配置页写法
	"options_page": "options.html",
	// Chrome40以后的插件配置页写法，如果2个都写，新版Chrome只认后面这一个
	"options_ui":
	{
		"page": "options.html",
		// 添加一些默认的样式，推荐使用
		"chrome_style": true
	},
	// 向地址栏注册一个关键字以提供搜索建议，只能设置一个关键字,在浏览器输入go后开始搜索，在background.js中操作
	"omnibox": { "keyword" : "go" },
	// 默认语言
	"default_locale": "zh_CN",
	// devtools页面入口，注意只能指向一个HTML文件，不能是JS文件
	"devtools_page": "devtools.html"
}


```
## background.js
background.js后台文件，它要在background.html中引用

* 当前页面注入JS代码
```js
function back(){
    // alert('我是')
    chrome.tabs.getSelected(null, function(tab){//获取网页的对象,默认当前页面
        // title=tab.title
        chrome.tabs.executeScript(null, {code:"var kw=document.querySelector('#kw');kw.value='黄';var su=document.querySelector('#su');su.click();"})//点击向当前页面注入JS代码
    })
}
chrome.contextMenus.create({
    title:'翻译',//添加鼠标右键的文字
    onclick:function(){
        alert('我被点击了')
    },
    
})
```
* background.js,向鼠标右键添加文字
```js
chrome.contextMenus.create({
    title:'翻译选中文字',//添加鼠标右键的文字
    onclick:function(){
        alert('我被点击了')
    },
    contexts:['selection'],//指定在哪里右键显示，selection表示选中文字显示
    // documentUrlPatterns:['http://chrome.cenchy.com/contextmenus.html','https://*.baidu.com/*'],//指定在哪些网站显示
})
```

总结：```chrome.tabs.getSelected(null,function)```该API可以获取一个网页的文档对象，```chrome.tabs.executeScript(null,{code:'JS代码'})```向网页中注入JS代码，第一个参数为null表示所有网页，

## popub.js
popub.js前台代码，它要在popub.html中引用
```js
$(function(){
    $('#toht').click(e=>{
        window.open(chrome.extension.getURL('background.html'))
    })
    $('#gettitle').click(e=>{
        var bg=chrome.extension.getBackgroundPage()
        alert(bg.document.title)
    })
    $('#dy').click(e=>{
        var bg=chrome.extension.getBackgroundPage()
        // 调用后台background.js back函数
        bg.back()
    })
})
```
总结：```chrome.extension```主要用来通信。```chrome.extension.getURL()```返回指定文件的路径。```chrome.extension.getBackgroundPage()```获取后台页面，调用后台background.js back函数```bg.back()```

## content-script.js

```content-script.js```该JS文件会被注入到其他网站。里面的代码也会执行。
```js
// document.addEventListener('DOMContentLoaded',function(){
//     var kw=document.querySelector('#kw')
//     kw.value='黄龙归'
//     var btn=document.querySelector('#su')
//     btn.click()
// })
document.addEventListener('DOMContentLoaded',function(){
    document.onkeydown = function(){return true;}

    var funcGetSelectText = function(){
             var txt = '';
             if(document.selection){
                 txt =  document.selection.createRange().text;         //ie浏览器
             }else{
                 txt =  document.getSelection();   //其他浏览器
             }
             return txt.toString();
         }
         var container = container ||  document;
         container.oncontextmenu = function(){
             var txt = funcGetSelectText();
             if(txt)
             {
                 alert(txt);
             }
         }
})
```
以上代码会在其他网页运行。

