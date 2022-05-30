module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'News', link: '/news' },
      { text: 'News2', link: '/news2' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' },
          {
            text: '分组1', items: [
              { text: 'Home', link: '/' },
              { text: 'About', link: '/about/' },
            ]
          },
          {
            text: '分组2', items: [
              { text: 'Home', link: '/' },
              { text: 'About', link: '/about/' },
            ]
          },
        ]
      }
    ],
    // sidebar: [
    //   '',
    //   {
    //     title: '美丽的 CSS',   // 必要的
    //     path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //     children: [
    //       '/css/c-aaa',
    //       '/css/c-bbb',
    //       '/css/c-ccc',
    //     ]
    //   },
    // ]
    sidebar: {
      // 首页错误示范
      // '/': [
      //   ''
      // ],
      '/css/': [
        'c-aaa',
        'c-bbb',
        'c-ccc'
      ],
      '/javascript/': [
        'j-aaa',
        'j-bbb',
        'j-ccc'
      ],
      // 如果上面是/frontend/javascript/,注册/frontend/应该放到下面
      // 首页正确示范
      '/': [
        ''
      ],
    }
  }
}