module.exports = {
  title:'前端笔记总结',
  description:'收录一些前端笔记',
  head: [
    ['meta', { "name": 'keywords', content: '前端笔记,vue笔记,javascript,javascript笔记,git,前端面试题，' }],
    ['meta', { "name": 'author', content: '贵州师范大学.黄龙归' }]
  ],
  themeConfig: {
      smoothScroll: true,
  
      sidebarDepth:2,
      sidebar: {
        
        '/interview/': [
          
          'interview',  /* /foo/one.html */
          'interviewCss',
          'interviewJs'
          
          
        ],
        '/javascript/':[
          'javascript'
        ]
      },
      nav: [
        { text: '首页', link: '/' },
        { text: '前端技术', items:[
          { text: '基础3套', items:[
            { text: 'HTML', link: '/language/chinese/' },
            { text: 'CSS', link: '/language/japanese/' },
            { text:'JavaScript',link: '/javascript/javascript/'}
          ] },
          { text: '前端进阶', items:[
            { text: 'Vue', link: '/Vue/' },
            { text: 'Node', link: '/language/japanese/' },
            { text:'Git',link: '/language/japanese/'},
            { text: 'AJAX', link: '/language/chinese/' },
            { text: 'uniapp', link: '/language/japanese/' },
            { text:'移动web开发',link: '/language/japanese/'},
            { text: '前端性能优化', link: '/language/chinese/' },
            
          ] },
          { text: '前端面试', items:[
            
            { text: '前端面试题', link: '/interview/interview/' }
          ] }
        ] },
        {text:'社区',link:'/language/chinese/'},
        { text: 'github', link: 'https://github.com/huanglonggui520/my-note' },
        
      ]
    }
  }