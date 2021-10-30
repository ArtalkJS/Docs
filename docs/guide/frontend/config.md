# 🔭 配置 · 前端

```js
new Artalk({ 你的配置... })
```

## 基本配置（必填项）

### el

**装载元素**（填写元素 Selector）

- 类型：`string`
- 默认值：`undefined`

> 例如：`#Comments` 对应元素 `<div id="Comments"></div>`

### pageKey

**页面 URL**（完整 URL）

- 类型：`string`
- 默认值：`window.location.href.split('#')[0]`

pageKey 一般填写由博客系统生成的 `固定链接`，请**确保 URL 完整**有协议和域名。

留空可自动获取，但由于页面链接变化情况复杂，请**尽量不留空**。

> 例如：http://artalk.js.org/guide/intro.html

### pageTitle

**页面标题**（用于后台管理显示，邮件通知等）

- 类型：`string`
- 默认值：`undefined`

留空后端程序会自动请求页面，获取 head `<title>` 值。

> 注：自动获取标题，URL 若开启了例如 CloudFlare 5 秒盾防护会导致获取失败，需保证 URL 能被后端程序正常访问。

### server

**后端程序 API 地址**

- 类型：`string`
- 默认值：`undefined`

部署后端，确保后端地址前端可访问，注意**加上路径 `/api`**

> 例如：http://yourdomain.xxx/api/

### site

**站点名称**

- 类型：`string`
- 默认值：`undefined`

留空为 “默认站点”，Artalk 支持多站点统一管理，此项用于站点隔离。

## 表情包配置

### emoticons

**表情包**

- 类型：`Object`
- 默认值：[emoticons.json](https://github.com/ArtalkJS/Artalk/blob/master/src/assets/emoticons.json)

::: details 格式样例

```js
const emotions = {
  "表情包名 1": {
    "inputType": "emoticon", // 表情类型 (emoticon, image)
    "container": {
        "[表情名]": "颜文字 |´・ω・)ノ",
        // ...
    },
  },
  "表情包名 2 (图片类型)": {
    "inputType": "image",
    "container": {
        "[表情名]": "https://xxxx.xxx/xxxx.gif",
        // ...
    }
  }
  // ...
}

new Artalk({ emotions, ... })
```

参考：“[emoticons.json](https://github.com/ArtalkJS/Artalk/blob/master/src/assets/emoticons.json)”

:::

## 界面配置

### placeholder

**评论框占位字符**

- 类型：`string`
- 默认值：`"来啊，快活啊 ( ゜- ゜)"`

### noComment

**评论为空时显示字符**

- 类型：`string`
- 默认值：`"快来成为第一个评论的人吧~"`

### sendBtn

**发送按钮文字**

- 类型：`string`
- 默认值：`"发送评论"`

### defaultAvatar

**默认头像**（URL or [Gravatar Type](http://cn.gravatar.org/site/implement/images/#default-image)）

- 类型：`string`
- 默认值：`"mp"`

### gravatar.cdn

**Gravatar 头像 CDN 地址**

- 类型：`string`
- 默认值：`"https://sdn.geekzu.org/avatar/"`

```js
gravatar: {
  cdn: '<CDN 地址>'
},
```

### readMore

**加载更多**

```js
readMore: {
  pageSize: 15,
  autoLoad: true
},
```

### readMore.pageSize

**每次请求获取数量**

- 类型：`Number`
- 默认值：`15`

### readMore.autoLoad

**滚动到底部自动加载**

- 类型：`Boolean`
- 默认值：`false`

### darkMode

**暗黑模式**

- 类型：`Boolean`
- 默认值：`false`

逻辑代码动态修改 darkMode：

```js
artalk.setDarkMode(true)
```

> 参考代码：“[index.html](https://github.com/ArtalkJS/Artalk/blob/master/index.html#L94)”

::: tip

代码细节：[/types/artalk-config.d.ts](https://github.com/ArtalkJS/Artalk/blob/master/types/artalk-config.d.ts)

前往：[“后端 · 配置文件”](/guide/backend/config.md)

:::