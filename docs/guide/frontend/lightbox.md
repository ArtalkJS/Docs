# 图片灯箱

Artalk 为保持简洁性，并未内置图片灯箱功能。

但你可以自己动手，添加 Artalk 事件监听，在合适的时期初始化灯箱插件，实现“图片点击放大”的功能。

## LightGallery

> [LightGallery](https://github.com/sachinchoolur/lightGallery): 一个可定制的、模块化的、响应式的灯箱画廊插件。

**1. 引入 LightGallery**

在 `Artalk.js` 文件之前引入 LightGallery（确保当评论加载完毕后，灯箱插件可被调用）：

```html
<link rel="stylesheet" href="https://unpkg.com/lightgallery@2.3.0/css/lightgallery.css">
<script src="https://unpkg.com/lightgallery@2.3.0/lightgallery.min.js"></script>
```

**2. 添加事件监听**

```js
const artalk = new Artalk({ ... })

artalk.on('list-loaded', () => {
  document.querySelectorAll('.atk-comment .atk-content').forEach(($content) => {
    const $imgs = $content.querySelectorAll('img:not([atk-emoticon]):not([atk-lightbox-loaded])')
    $imgs.forEach(($img) => {
      $img.setAttribute('atk-lightbox-loaded', '')
      const $link = document.createElement('a')
      $link.setAttribute('class', 'atk-img-link')
      $link.setAttribute('href', $img.src)
      $link.setAttribute('data-src', $img.src)
      $link.append($img.cloneNode())
      $img.replaceWith($link)
    })
    if ($imgs.length) lightGallery($content, { selector: '.atk-img-link' })
  })
})
```

当评论加载后，获取 `评论内容` 元素中的所有 `<img>` 并初始化 LightGallery


::: tip 备注

- 表情图片天生拥有 `atk-emoticon` 属性，以供识别并忽略。
- 已初始化的图片加上 `atk-lightbox-loaded` 属性，以避免重复初始化。

:::

## FancyBox

> [FancyBox](https://fancyapps.com/docs/ui/fancybox/): Fancybox 可以节省您的时间并帮助您轻松创建包含图像、iframe、视频或任何类型的 HTML 内容的漂亮、现代的悬浮窗。


**1. 引入 FancyBox**

```html
<script src="https://unpkg.com/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@fancyapps/ui@4.0/dist/fancybox.css" />
```

**2. 添加事件监听**

**2.1 主动监听**

```js
const artalk = new Artalk({ ... })

artalk.on('list-loaded', () => {
  document.querySelectorAll('.atk-comment .atk-content').forEach(($content) => {
    const $imgs = $content.querySelectorAll('img:not([atk-emoticon]):not([atk-lightbox-loaded])')
    $imgs.forEach(($img) => {
      $img.setAttribute('atk-lightbox-loaded', '')
      const $link = document.createElement('a')
      $link.setAttribute('data-fancybox', '')
      $link.setAttribute('href', $img.src)
      $link.append($img.cloneNode())
      $img.replaceWith($link)
    })
    if ($imgs.length) Fancybox.bind('[data-fancybox]')
  })
})
```

**2.2 事件委托**

```js
Fancybox.bind('.atk-list img:not([atk-emoticon])', {
  groupAll: true,
  Hash: false,
  Thumbs: {
    autoStart: false,
  },
  caption: function (fancybox, carousel, slide) {
    return slide.$trigger.alt || null
  }
});
```
