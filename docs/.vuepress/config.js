const { path } = require('@vuepress/utils')

module.exports = {
  lang: "zh-CN",
  title: "Artalk",
  description: "Artalk 一款简洁的自托管评论系统",
  head: [
    // ['link', { rel: 'icon', href: '/images/artalk-logo.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi' }],
    ['link', { href: require('../code/ArtalkCDN.json').CSS, rel: 'stylesheet' }],
  ],
  theme: path.resolve(__dirname, './theme'),

  themeConfig: {
    sidebar: {
      "/guide/": [
        "/guide/intro.md",
        "/guide/deploy.md",
        {
          text: "🌅 风，甚是喧嚣",
          collapsable: true,
          children: [
            {
              text: "「前端」ArtalkJS",
              link: '/guide/frontend/',
              collapsable: true,
              children: [
                "/guide/frontend/install.md",
                "/guide/frontend/config.md",
                "/guide/frontend/build.md",
                "/guide/frontend/import-blog.md",
                "/guide/frontend/import-framework.md",
              ],
            },
            {
              text: "「后端」ArtalkGo",
              link: '/guide/backend/',
              collapsable: true,
              children: [
                "/guide/backend/install.md",
                "/guide/backend/config.md",
                "/guide/backend/build.md",
                "/guide/backend/update.md",
                "/guide/backend/data.md",
                "/guide/backend/docker.md",
                "/guide/backend/daemon.md",
                "/guide/backend/reverse-proxy.md",
              ],
            },
          ],
        },
        "/guide/describe.md",
        "/guide/transfer.md",
        "/guide/extras.md",
        "/guide/cases.md",
        "/guide/about.md",
      ],
    },
    navbar: [
      // NavbarItem
      {
        text: '介绍',
        link: '/guide/intro',
      },
      {
        text: '部署',
        link: '/guide/deploy',
      },
      {
        text: 'Docker',
        link: '/guide/backend/docker',
      },
      {
        text: '配置',
        link: '/guide/frontend/config',
      },
      {
        text: '迁移',
        link: '/guide/transfer',
      },
      {
        text: '案例',
        link: '/guide/cases',
      },
      // NavbarGroup
      {
        text: '快速传送',
        children: [
          {
            text: '后端 Releases',
            link: 'https://github.com/ArtalkJS/ArtalkGo/releases',
          },
          {
            text: 'Docker Hub',
            link: 'https://hub.docker.com/r/artalk/artalk-go',
          },
          {
            text: 'Artalk 代码仓库',
            link: 'https://github.com/ArtalkJS/Artalk',
          },
          {
            text: 'ArtalkGo 代码仓库',
            link: 'https://github.com/ArtalkJS/ArtalkGo',
          }
        ],
      },
      {
        text: 'GitHub',
        link: 'https://github.com/ArtalkJS',
      },
    ],
    editLink: true,
    editLinkText: '在 GitHub 上编辑此页',
    docsRepo: 'https://github.com/ArtalkJS/Docs',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
  },
};
