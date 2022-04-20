import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { path } from '@vuepress/utils'
import * as ArtalkCDN from '../code/ArtalkCDN.json'

export default defineUserConfig<DefaultThemeOptions>({
  lang: "zh-CN",
  title: "Artalk",
  description: "Artalk 一款简洁的自托管评论系统",
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi' }],
    // artalk
    ['link', { href: ArtalkCDN.CSS, rel: 'stylesheet' }],
    ['script', { src: ArtalkCDN.JS }],
    // light gallery
    ['link', { href: 'https://cdn.jsdelivr.net/npm/lightgallery@2.3.0/css/lightgallery.css', rel: 'stylesheet' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/lightgallery@2.3.0/lightgallery.min.js' }],
    // katex
    ['link', { href: "https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css", rel: 'stylesheet' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@artalkjs/plugin-katex/dist/artalk-plugin-katex.js' }],
  ],
  theme: path.resolve(__dirname, './theme'),

  themeConfig: {
    sidebar: {
      "/guide/": [
        '/guide/intro.md',
        {
          text: "🛫️ 快速开始",
          children: [
            "/guide/frontend/install.md",
            "/guide/backend/install.md",
          ]
        },
        {
          text: "🌅 详细内容",
          children: [
            {
              text: "「前端」ArtalkJS",
              link: '/guide/frontend/',
              children: [
                "/guide/frontend/config.md",
                "/guide/frontend/import-blog.md",
                "/guide/frontend/import-framework.md",
                "/guide/frontend/emoticons.md",
                "/guide/frontend/lightbox.md",
              ],
            },
            {
              text: "「后端」ArtalkGo",
              link: '/guide/backend/',
              children: [
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
        // "/guide/describe.md",
        "/guide/transfer.md",
        "/guide/extras.md",
        "/guide/cases.md",
        "/guide/about.md",
      ],
      "/develop/": [
        "/develop/README.md",
        "/develop/api.md",
        "/develop/event.md",
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
        link: '/guide/frontend/install',
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
      {
        text: '开发',
        link: '/develop/',
      },
      // NavbarGroup
      {
        text: '传送',
        children: [
          {
            text: '前端仓库',
            link: 'https://github.com/ArtalkJS/Artalk',
          },
          {
            text: '后端仓库',
            link: 'https://github.com/ArtalkJS/ArtalkGo',
          },
          {
            text: '文档仓库',
            link: 'https://github.com/ArtalkJS/Docs',
          },
          {
            text: 'DockerHub',
            link: 'https://hub.docker.com/r/artalk/artalk-go',
          }
        ],
      },
      {
        text: 'GitHub',
        link: 'https://github.com/ArtalkJS/Artalk',
      },
    ],
    smoothScroll: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    // notFound: [
    //   '这里什么都没有',
    //   '我们怎么到这来了？',
    //   '这是一个 404 页面',
    //   '看起来我们进入了错误的链接',
    // ],
    backToHome: '返回首页',
    docsRepo: 'https://github.com/ArtalkJS/Docs',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
  },
})
