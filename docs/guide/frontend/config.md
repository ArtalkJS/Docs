# 前端配置

```js
new Artalk({ 你的配置... })
```

- 默认配置：[defaults.ts](https://github.com/ArtalkJS/Artalk/blob/master/packages/artalk/src/defaults.ts)
- 声明文件：[artalk-config.d.ts](https://github.com/ArtalkJS/Artalk/blob/master/packages/artalk/types/artalk-config.d.ts)

## 基本配置（必填项）

### el

**装载元素**（填入需要绑定的元素 Selector）

- 类型：`String`
- 默认值：`undefined`

> 例如：`#Comments` 对应元素 `<div id="Comments"></div>`

### pageKey

**页面 URL**（相对路径 / 完整 URL）

- 类型：`String`
- 默认值：`window.location.pathname`

可留空自动获取页面的相对路径。

可以填写由博客系统生成的 `固定链接`，但建议使用相对路径以便日后切换域名。

参考：[“关于使用相对 / 绝对路径”](/guide/backend/relative-path.md)

### pageTitle

**页面标题**（用于管理列表显示，邮件通知等）

- 类型：`String`
- 默认值：`document.title`

可留空自动获取页面的 `<title>` 标签值。

### server

**后端程序 API 地址**

- 类型：`String`
- 默认值：`undefined`

部署后端，确保后端地址前端可访问

> 例如：http://yourdomain.xxx

<span style="color:red">更新注意</span>：v2.2.6+ 的后续版本，请填入不带 `/api/` 的后端 URL。

### site

**站点名称**

- 类型：`String`
- 默认值：`undefined`

可留空使用后端配置的 “默认站点”，

Artalk 支持多站点统一管理，此项用于站点隔离。

### useBackendConf

**跟随后端的配置** <Badge type="tip" text="v2.2.8+" />

- 类型：`Boolean`
- 默认值：`false`（默认关闭）

可以在后端的配置文件中定义前端的配置，让前端配置始终跟随后端。

详情可参考：[“在后端控制前端”](/guide/backend/fe-control)

## 请求

### reqTimeout

**请求超时**

- 类型：`Number`
- 默认值：`15000`

当请求时间大于该值，自动断开请求并报错。（单位：毫秒）

## 表情包

### emoticons

**表情包**

- 类型：`Object|Array|String`
- 默认值："[https://cdn.jsdelivr.net/gh/ArtalkJS/Emoticons/grps/default.json](https://cdn.jsdelivr.net/gh/ArtalkJS/Emoticons/grps/default.json)"

详细内容：[“前端 · 表情包”](/guide/frontend/emoticons.md)

更新兼容 [OwO 格式](https://github.com/DIYgod/OwO)，支持 URL 动态加载。<Badge type="tip" text="v2.1.3+" />

## 界面

### placeholder

**评论框占位字符**

- 类型：`String`
- 默认值：`"键入内容..."`

### noComment

**评论为空时显示字符**

- 类型：`String`
- 默认值：`"「此时无声胜有声」"`

### sendBtn

**发送按钮文字**

- 类型：`String`
- 默认值：`"发送评论"`

### editorTravel

**评论框旅行**

- 类型：`Boolean`
- 默认值：`true`

设置为 `true` 当回复评论时，评论框移动到待回复评论位置之后，而不是固定不动。

### darkMode

**暗黑模式**

- 类型：`Boolean`
- 默认值：`false`

当 Artalk 被实例化时会读取该值，并根据该值选择开启暗黑模式（可与博客主题配合使用）。

代码动态修改 darkMode：

```js
artalkInstance.setDarkMode(true)
```

> 参考代码：“[index.html](https://github.com/ArtalkJS/Artalk/blob/master/packages/artalk/index.html#L97-L150)”

### flatMode

**平铺模式**

- 类型：`Boolean|"auto"`
- 默认值：`"auto"`

默认 `"auto"` 仅小尺寸屏幕设备自动开启「平铺」模式

设置 `true` 评论以「平铺模式」形式显示

设置 `false` 评论以「层级嵌套」形式显示

### nestMax

**最大嵌套层数**

- 类型：`Number`
- 默认值：`3`

评论「层级嵌套」模式的最大嵌套层数。

## 功能

### pvEl

**页面浏览量统计 (PV)** <Badge type="tip" text="v2.2.6+" />

- 类型：`String`
- 默认值：`"#ArtalkPV"`

你可以在页面任意位置，放置 HTML 标签：`<span id="ArtalkPV"></span>`

当 Artalk 完成加载时展示页面的浏览量。

该项填入绑定元素的 Selector，默认为 `#ArtalkPV`。

### vote

**投票按钮**

- 类型：`Boolean`
- 默认值：`true`

显示评论投票按钮。

### voteDown

**反对按钮**

- 类型：`Boolean`
- 默认值：`false`

反对的投票按钮（默认隐藏）。

### uaBadge

**评论 User-Agent 徽标**

- 类型：`Boolean`
- 默认值：`true`

### listSort

**评论排序功能** <Badge type="tip" text="v2.2.6+" />

- 类型：`Boolean`
- 默认值：`true`

鼠标移到评论列表左上角「n 条评论」的位置，显示悬浮下拉层，可以让评论列表按照「最新 / 最热 / 最早 / 作者」等规则排序筛选显示。

### imgUpload

**图片上传功能** <Badge type="tip" text="v2.2.6+" />

- 类型：`Boolean`
- 默认值：`true`

该配置项自动跟随后端，当后端图片上传功能关闭时，仅管理员会显示图片上传按钮。

## 头像

```js
gravatar: {
  mirror: '<Gravatar 镜像地址>',
  default: 'mp',
}
```

### gravatar.mirror

**Gravatar 镜像地址**

- 类型：`String`
- 默认值：`"https://sdn.geekzu.org/avatar/"`

如果你觉得 Gravatar 头像加载速度不理想，可以尝试修改该项。

### gravatar.default

**默认头像**（URL or [Gravatar Type](http://cn.gravatar.org/site/implement/images/#default-image)）

- 类型：`String`
- 默认值：`"mp"`

## 评论分页

```js
pagination: {
  pageSize: 20,   // 每页评论数
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
- 默认值：`true`

（需同时开启“加载更多”模式，将 `readMore` 设置为 `true`）

### pagination.pageSize

**每次请求获取数量**

- 类型：`Number`
- 默认值：`20`

## 内容限高

超过设定高度的内容将被隐藏，并显示“阅读更多”按钮。

```js
heightLimit: {
  content: 200, // 评论内容限高
  children: 400, // 子评论区域限高
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
- 默认值：`400`

## 版本检测

### versionCheck

**版本检测**

- 类型：`Boolean`
- 默认：`true`

当前端和后端版本不兼容时，显示警告提示框。

::: tip

前往：[“后端 · 配置文件”](/guide/backend/config.md)

:::
