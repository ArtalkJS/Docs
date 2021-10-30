---
home: true
description: 一款简洁的自托管评论系统
heroImage: /images/artalk-logo.png
heroText: 化繁为简，简而不凡
tagline: Artalk 一款简洁的自托管评论系统
actions:
  - text: 轻装上阵
    link: /guide/deploy.md
    type: primary
  - text: 食用方针
    link: /guide/intro.md
    type: secondary
features:
  - title: 🍃 化繁为简
    details: 简便的安装步骤，简洁的评论界面
  - title: 🐳 轻量级
    details: 轻量的文件体积，迅速响应每一次交互
  - title: 👨‍👧‍👦 自托管
    details: 数据自托管把控，无惧隐私泄露
  - title: 🌇 现代化
    details: 美观的界面，与现代化站点自然融合
  - title: 🍱 多平台
    details: Golang 后端，支持多种架构和系统环境
  - title: 🌊 扩展性
    details: 完整评论系统功能，可装载扩展
footer: "Code: GPL-3.0 Licensed | Docs: CC BY-NC-SA 4.0 | Copyright © 2018-2021 Artalk"
---

<CodeGroup>
  <CodeGroupItem title="CDN" active>

@[code](code/quick-start/cdn.html)

  </CodeGroupItem>

  <CodeGroupItem title="Docker">

@[code](code/quick-start/docker.sh)

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

@[code](code/quick-start/yarn.ts)

  </CodeGroupItem>

  <CodeGroupItem title="NPM">
  
@[code](code/quick-start/npm.ts)

  </CodeGroupItem>
</CodeGroup>

<!-- Artalk -->
<div style="margin: 0 auto;padding: 1rem 0;">
  <div id="Comments"></div>
</div>