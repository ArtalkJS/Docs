---
prev: '../backend/install.md'
next: 'config.md'
---

# 前端引入

## 举个栗子

<<< @/code/quick-start/cdn.html

## CDN 资源

Artalk 静态资源通过 CDN 服务提供商 [cdnjs](https://cdnjs.com/) 进行分发，国内有许多以其为上游的镜像可供选择。

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

若需升级前端，将 URL 中的 `<版本号>` 数字部分替换即可。
:::

:::warning 关于 JS DELIVR
很遗憾，JS DELIVR [在中国大陆的 ICP 牌照被吊销](https://github.com/jsdelivr/jsdelivr/issues/18348#issuecomment-997777996)，感谢 JS DELIVR 对社区的贡献 :heart:。
:::

### 下载并自托管

鉴于国内外复杂的网络环境，本页提供的 CDN 资源访问速度可能不佳，可将其保存到自己的服务器，然后通过 `<script>` 标签引入。

### 从后端内置资源引入

你可以直接引入后端程序内置的 JS 和 CSS 文件，详情可参考：[“在后端控制前端”](/guide/backend/fe-control)

### ArtalkLite

你可以选择 Artalk 的精简版本 [ArtalkLite](./artalk-lite.md)，体积更小、更简约。

## Node 环境

你可以在 Node 环境通过包管理工具引入 Artalk，然后将其引入到你的项目当中。

```bash
# pnpm
pnpm add artalk

# yarn
yarn add artalk

# npm
npm install artalk
```

```js
import 'artalk/dist/Artalk.css'
import Artalk from 'artalk'

new Artalk({
  // ...
})
```

## 你需要配置

[后端程序部署](../backend/install.md)完成后，在前端初始化 Artalk 需要提供配置，例如：

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

其他配置项目可参考：[“前端 · 配置”](./config.md)

## 何时引入

你可以在页面的任意位置引入 JS 和 CSS 资源，但请确保在执行 `new Artalk({})` 前引入资源文件。

## 何时 new

你需要确保在执行 `new Artalk({ el: '#Comments' })` 时，给定的 `el` 参数元素已被加载。

如果你打算在前端框架中引入 Artalk 可参考：[“置入框架”](./import-framework.md)，引入博客可参考：[“置入博客”](./import-blog.md)。

## 数据导入

我们提供数据迁移工具，你能从其他评论系统轻松迁移，参考：[“迁移文档”](../transfer.md)。
