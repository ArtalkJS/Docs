---
prev: '../backend/install.md'
next: 'config.md'
---

# 前端引入

## 举个栗子

<CodeGroup>
  <CodeGroupItem title="CDN" active>

@[code](../../code/quick-start/cdn.html)

  </CodeGroupItem>

  <CodeGroupItem title="Node">
  
@[code](../../code/quick-start/node.ts)

  </CodeGroupItem>
</CodeGroup>

## CDN 资源

- [**JS DELIVR**](https://www.jsdelivr.com/)
  - `https://cdn.jsdelivr.net/npm/artalk@<版本号>/dist/Artalk.js`
  - `https://cdn.jsdelivr.net/npm/artalk@<版本号>/dist/Artalk.css`

- [**UNPKG**](https://unpkg.com/)
  - `https://unpkg.com/artalk@<版本号>/dist/Artalk.js`
  - `https://unpkg.com/artalk@<版本号>/dist/Artalk.css`

- ElemeCDN (国内)
  - `https://npm.elemecdn.com/artalk@<版本号>/dist/Artalk.js`
  - `https://npm.elemecdn.com/artalk@<版本号>/dist/Artalk.css`

注：将 `<版本号>` 替换为你想使用的固定版本号，例如 `@2.3.3`。

当然，你也可以采用激进的方式保持最新版本，去掉 `@<版本号>`。

### 下载并自托管

鉴于国内外复杂的网络环境，案例提供的 CDN 资源访问速度可能不佳，可以将其保存到自己的服务器，然后通过 `<script>` 标签引入。

### 从后端内置资源引入

你可以直接引入后端程序内置的 JS 和 CSS 资源文件，详情可参考：[“在后端控制前端”](/guide/backend/fe-control)

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
