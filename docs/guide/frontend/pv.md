# 浏览量统计 <Badge type="tip" text="v2.2.6+" />

Artalk 内置页面浏览量统计功能，你可以在你的页面任意位置，放置 HTML 标签：

```html
<span id="ArtalkPV"></span>
```

当 Artalk 加载完毕时，该标签内容将修改为页面的浏览量计数。

Artalk 加载需要时间，所以你可以给它一个占位字符：

```html
<span id="ArtalkPV">加载中...</span>
```

你也可以绑定使用其他的元素，修改 Artalk 配置项，例如：

```js
new Artalk({
  pvEl: '.your_element',
})
```
