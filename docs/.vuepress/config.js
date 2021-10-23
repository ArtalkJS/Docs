module.exports = {
  lang: "zh-CN",
  title: "Artalk",
  description: "一款简洁的自托管评论系统",

  themeConfig: {
    editLink: true,
    sidebar: {
      "/guide/": [
        "/guide/intro.md",
        "/guide/deploy.md",
        "/guide/describe.md",
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
                "/guide/frontend/blog-install.md",
                "/guide/frontend/build.md",
              ],
            },
            {
              text: "「后端」ArtalkGo",
              link: '/guide/backend/',
              collapsable: true,
              children: [
                "/guide/backend/config.md",
                "/guide/backend/install.md",
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
        "/guide/transfer.md",
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
        link: '/guide/backend/config',
      },
      {
        text: '下载',
        children: [
          {
            text: '前端资源',
            link: '/guide/frontend/install',
          },
          {
            text: '后端 Releases',
            link: 'https://github.com/ArtalkJS/ArtalkGo/releases',
          },
          {
            text: 'Docker Hub',
            link: 'https://hub.docker.com/r/artalk/artalk-go',
          },
        ]
      },
      // NavbarGroup
      {
        text: '快速传送',
        children: [
          {
            text: 'Artalk',
            link: 'https://github.com/ArtalkJS/Artalk',
          },
          {
            text: 'ArtalkGo',
            link: 'https://github.com/ArtalkJS/ArtalkGo',
          },
          {
            text: '作者博客',
            link: 'https://qwqaq.com',
          }
        ],
      },
      {
        text: 'GitHub',
        link: 'https://github.com/ArtalkJS',
      },
    ],
  },
};
