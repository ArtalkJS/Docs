---
prev: '../backend/install.md'
next: 'config.md'
---

# 前端引入

## 举个栗子

<<< @/code/quick-start/cdn.html

## CDN 资源

Artalk 静态资源通过上游 [cdnjs](https://cdnjs.com/) 进行分发，国内有许多镜像可供选择。

**BootCDN (境内)**

> https://cdn.bootcdn.net/ajax/libs/artalk/2.3.3/Artalk.js
>
> https://cdn.bootcdn.net/ajax/libs/artalk/2.3.3/Artalk.css


**ElemeCDN (境内)**

> https://npm.elemecdn.com/artalk@2.3.3/dist/Artalk.js
>
> https://npm.elemecdn.com/artalk@2.3.3/dist/Artalk.css

**CDNJS**

> https://cdnjs.cloudflare.com/ajax/libs/artalk/2.3.3/Artalk.js
>
> https://cdnjs.cloudflare.com/ajax/libs/artalk/2.3.3/Artalk.css

**UNPKG**

> https://unpkg.com/artalk@2.3.3/dist/Artalk.js
> 
> https://unpkg.com/artalk@2.3.3/dist/Artalk.css

**JS DELIVR**

> https://cdn.jsdelivr.net/npm/artalk@2.3.3/dist/Artalk.js
> 
> https://cdn.jsdelivr.net/npm/artalk@2.3.3/dist/Artalk.css

::: tip Artalk 最新版本

当前 Artalk 最新版本号为： :ArtalkVersion:

若需升级前端，请将 URL 中的 `<版本号>` 数字部分替换即可。
:::

:::warning 关于 JS DELIVR
很遗憾，JS DELIVR [在中国大陆的 ICP 牌照被吊销](https://github.com/jsdelivr/jsdelivr/issues/18348#issuecomment-997777996)，感谢 JS DELIVR 对社区的贡献 :heart:。
:::

### 下载并自托管

鉴于复杂的网络环境，本页提供的 CDN 速度可能不佳，建议保存到自己的服务器。

### 从后端内置资源引入

后端程序中内置的 JS 和 CSS 文件可直接引入，参考：[“在后端控制前端”](/guide/backend/fe-control)

### ArtalkLite

可选择精简版 [ArtalkLite](./artalk-lite.md)：体积更小、更简约。

## Node 环境

包管理工具添加依赖：

```bash
# pnpm
pnpm add artalk

# yarn
yarn add artalk

# npm
npm install artalk
```

运用到你的项目当中：

```js
import 'artalk/dist/Artalk.css'
import Artalk from 'artalk'

new Artalk({
  // ...
})
```

## 你需要配置

完成[后端程序部署](../backend/install.md)后，需要在前端进行配置：

```js
new Artalk({
  el:        '#Comments',              // 绑定元素的 Selector
  pageKey:   '/post/1',                // 固定链接 (留空自动获取)
  pageTitle: '关于引入 Artalk 这档子事', // 页面标题 (留空自动获取)
  server:    'http://localhost:8080',  // 后端地址
  site:      'Artalk 的博客',           // 你的站点名
  // 你的其他配置...
})
```

更多配置项可参考：[“前端配置”](./config.md)

## 何时引入 / new

- 可以在任意位置引入 JS 和 CSS 资源，但需确保 JS 引入在执行 `new Artalk({})` 前。
- 执行 `new Artalk({ el: '#x' })` 时，需要确保 `<div id="x"></div>` 存在于页面当中。

可参考：[“前端框架引入”](./import-framework.md) / [“博客引入”](./import-blog.md)

## 数据导入

从其他评论系统导入数据：[“数据迁移”](../transfer.md)
