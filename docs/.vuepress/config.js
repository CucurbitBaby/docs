module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' },
          { text: '分组1', items: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/' },
          ]},
          { text: '分组2', items: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/' },
          ]},
        ]
      }
    ]
  }
}