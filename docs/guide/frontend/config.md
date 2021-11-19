# 🔭 配置 · 前端

```js
new Artalk({ 你的配置... })
```

- 默认配置：[/src/defaults.ts](https://github.com/ArtalkJS/Artalk/blob/master/src/defaults.ts)
- 声明文件：[/types/artalk-config.d.ts](https://github.com/ArtalkJS/Artalk/blob/master/types/artalk-config.d.ts)

## 基本配置（必填项）

### el

**装载元素**（填写元素 Selector）

- 类型：`string`
- 默认值：`undefined`

> 例如：`#Comments` 对应元素 `<div id="Comments"></div>`

### pageKey

**页面 URL**（完整 URL）

- 类型：`string`
- 默认值：`location.protocol+"//"+location.host+location.pathname`

pageKey 一般填写由博客系统生成的 `固定链接`，请**确保 URL 完整**有协议和域名。

留空可自动获取，但由于页面链接变化情况复杂，请**尽量不留空**。

> 例如填写：http://artalk.js.org/guide/intro.html

### pageTitle

**页面标题**（用于后台管理显示，邮件通知等）

- 类型：`string`
- 默认值：`undefined`

留空后端程序会自动请求页面，获取 head `<title>` 标签的值。

> 注：若开启了例如 CloudFlare 5 秒盾防护，自动获取功能将无法使用，这里也最好不留空。

### server

**后端程序 API 地址**

- 类型：`string`
- 默认值：`undefined`

部署后端，确保后端地址前端可访问，注意**加上路径 `/api/`**

> 例如：http://yourdomain.xxx/api/

### site

**站点名称**

- 类型：`string`
- 默认值：`undefined`

留空为 “默认站点”，Artalk 支持多站点统一管理，此项用于站点隔离。

## 请求

### reqTimeout

**请求超时**

- 类型：`Number`
- 默认值：`15000`

当请求时间大于该值时，会自动断开请求并报错。（单位：秒）

## 表情包

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

## 界面

### placeholder

**评论框占位字符**

- 类型：`string`
- 默认值：`"键入内容..."`

### noComment

**评论为空时显示字符**

- 类型：`string`
- 默认值：`"「此时无声胜有声」"`

### sendBtn

**发送按钮文字**

- 类型：`string`
- 默认值：`"发送评论"`

### darkMode

**暗黑模式**

- 类型：`Boolean`
- 默认值：`false`

Artalk 初始化时将读取该值，并判断是否打开暗黑模式（可以和博客主题配合使用）。

逻辑代码动态修改 darkMode：

```js
artalk.setDarkMode(true)
```

> 参考代码：“[index.html](https://github.com/ArtalkJS/Artalk/blob/master/index.html#L94)”

### flatMode

**平铺模式**

- 类型：`Boolean|"auto"`
- 默认值：`"auto"`

默认 `"auto"` 仅小尺寸设备使用“平铺”模式

设置 `true` 评论以“平铺”的方式进行显示

设置 `false` 评论以“层级嵌套”形式显示

### maxNesting

**最大嵌套层数**

- 类型：`Number`
- 默认值：`3`

评论层级嵌套显示的最大嵌套层数。

## 功能

### vote

**投票按钮**

- 类型：`Boolean`
- 默认值：`true`

显示评论投票按钮。

### voteDown

**反对按钮**

- 类型：`Boolean`
- 默认值：`false`

反对的投票按钮。

### uaBadge

**评论 User-Agent 徽标**

- 类型：`Boolean`
- 默认值：`true`

## 头像

```js
gravatar: {
  mirror: '<Gravatar 镜像地址>',
  default: 'mp',
}
```

### gravatar.mirror

**Gravatar 镜像地址**

- 类型：`string`
- 默认值：`"https://sdn.geekzu.org/avatar/"`

### gravatar.default

**默认头像**（URL or [Gravatar Type](http://cn.gravatar.org/site/implement/images/#default-image)）

- 类型：`string`
- 默认值：`"mp"`

## 评论分页

```js
pagination: {
  pageSize: 15,   // 每页评论数
  readMore: true, // 加载更多 or 分页条
  autoLoad: true, // 自动加载 (加载更多)
}
```

### pagination.readMore

**加载更多模式**

- 类型：`Boolean`
- 默认值：`true`

设置 `true` 为 “**加载更多**” 模式

设置 `false` 为 “**分页条**” 模式

### pagination.autoLoad

**滚动到底部自动加载**

- 类型：`Boolean`
- 默认值：`false`

（需同时开启“加载更多”模式，将 `readMore` 设置为 `true`）

### pagination.pageSize

**每次请求获取数量**

- 类型：`Number`
- 默认值：`15`

## 内容限高

超过设定高度的内容将被隐藏，并显示“阅读更多”按钮。

```js
heightLimit: {
  content: 200, // 评论内容限高
  children: 300, // 子评论区域限高
}
```

### heightLimit.content

**评论内容限高**

- 类型：`Number`
- 默认值：`200`

> 当值为 0 时，关闭限高

### heightLimit.children

**子评论区域限高**

- 类型：`Number`
- 默认值：`300`

## 其他

### versionCheck

**前端版本检测**

- 类型：`Boolean`
- 默认：`true`

当前端版本小于后端要求的最小版本时，显示升级提示框。

::: tip

前往：[“后端 · 配置文件”](/guide/backend/config.md)

:::