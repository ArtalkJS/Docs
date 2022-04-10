# 🛬 数据迁移

## 数据行囊

数据行囊（Artrans）是 Artalk 持久化数据保存规范格式。

Artran = Art + Ran (艺术 + 奔跑) ~~即“奔跑的艺术”（艺术性地跑路~~

::: details Artran 格式样例

我们这样定义：每一条评论数据 (Object) 称为 Artran，多条评数据论组成一个 Artran**s** (Array)

```json
{
    "id": "123", 
    "rid": "233", 
    "content": "Hello Artalk", 
    "ua": "ArtalkGo/6.6", 
    "ip": "233.233.233.233",
    "created_at": "2021-10-28 20:50:15 +0800 +0800", 
    "updated_at": "2021-10-28 20:50:15 +0800 +0800", 
    "is_collapsed": "false", 
    "is_pending": "false", 
    "vote_up": "666", 
    "vote_down": "0", 
    "nick": "qwqcode", 
    "email": "qwqcode@github.com", 
    "link": "https://qwqaq.com", 
    "password": "", 
    "badge_name": "管理员", 
    "badge_color": "#FF716D", 
    "page_key": "https://artalk.js.org/guide/transfer.html", 
    "page_title": "数据迁移", 
    "page_admin_only": "false", 
    "site_name": "Artalk",
    "site_urls": "http://localhost:3000/demo/,https://artalk.js.org"
}
```

我们称：一个 JSON 数组为 Artran **s**，

数组里的每一个 Object 项目为 Artran (没有 s)

:::

## 📥 迁入

### 转换工具

通过下方的工具，将其他格式的评论数据转换为 Artrans，然后导入 Artalk。[在新窗口中打开](https://artransfer.netlify.app)

<iframe src="https://artransfer.netlify.app/?iframe=1" style="width: 100%;height: 520px;border: 0;" id="artransferIframe"></iframe>

转换后，将 Artrans 格式文件导入 Artalk：

- **前端导入**：你可在「控制中心」找到「迁移」选项卡，然后根据提示进行导入 Artrans。
- **命令行导入**：执行 `artalk-go import -h` 查阅帮助文档。

### 获取评论数据

### Typecho

提供 Artrans 导出插件：

1. 点击「[这里](https://github.com/ArtalkJS/Artrans-Typecho/releases/download/v1.0.0/ArtransExporter.zip)」下载插件并「解压」到 Typecho 目录 `/usr/plugins/`。
2. 前往 Typecho 后台「控制台 - 插件」启用插件「ArtransExporter」。
3. 前往「控制台 - 导出评论 (Artrans)」即可导出 Typecho 所有评论为 Artrans 格式。

### WordPress

![](/images/transfer/wordpress.png)

前往 WordPress 后台「工具 - 导出」勾选「所有内容」，导出文件即可使用[转换工具](#转换工具)进行转换。

### Valine / Waline

前往 [LeanCloud 后台](https://console.leancloud.cn/) 导出 JSON 格式的评论数据文件。

![](/images/transfer/leancloud.png)

注：[Waline](https://waline.js.org/) 和 [Valine](https://valine.js.org/) 两者都是使用 LeanCloud 储存数据，格式相通。

### Disqus

前往 [Disqus 后台](https://disqus.com/admin)，找到「Moderation - Export」点击导出，Disqus 会将 `.gz` 格式的压缩包发送到你的邮箱，解压之后可以得到 `.xml` 格式的数据文件，然后使用[转换工具](#转换工具)转为 Artrans。

![](/images/transfer/disqus.png)

### Commento

你可在 Commento 后台导出 JSON 格式的数据文件，然后使用[转换工具](#转换工具)进行转换。

### Twikoo

[Twikoo](https://twikoo.js.org/) 是一款基于腾讯云开发的评论系统，可以前往 [腾讯云后台](https://console.cloud.tencent.com/tcb) 导出 JSON 格式的评论数据。

<img src="/images/transfer/tencent-tcb.png" style="max-width: 480px;">

### Artalk v1 (PHP 旧版后端)

[Artalk v1](https://github.com/ArtalkJS/ArtalkPHP) 是 Artalk 的旧版后端，它使用 PHP 编写。新版后端我们全面转向 Golang，并重新设计了数据表结构，升级到新版需要通过[转换工具](#转换工具)进行转换。

旧版数据路径：`/data/comments.data.json`

### 命令行导入

```bash
./artalk-go import 数据类型 [参数...]
```

参数格式遵循 `<key>:<value>`

例如：

```bash
./artalk-go import 类型 t_name:"Site" t_url:"https://xx.com" json_file:"文件路径"
```

在前端导入时，同样可以手动输入可选参数，例如：

```json
{
  "t_name": "Site",
  "t_url": "https://xx.com",
  "json_file": "服务器上的文件路径"
}
```

ArtalkGo 通用的启动参数：

|   参数   | 类型   | 说明         |
| :------: | ------ | ------------ |
| `t_name` | String | 导入站点名称 |
| `t_url`  | String | 导入站点 URL |
| `json_file`  | String | JSON 数据文件路径 |
| `json_data`  | String | JSON 数据字符串内容 |

## 📦 备份

你可在前端界面的「控制中心」找到「迁移」选项卡，然后导出 Artrans 格式的评论数据。

### 命令行备份

导出：`artalk-go export ./artrans`

导入：`artalk-go import ./artrans`

### 高级玩法

执行 `artalk-go export` 可直接 “标准输出”，并进行 “管道” 或 “输出重定向” 等操作，例如：

```bash
artalk-go export | gzip -9 | ssh username@remote_ip "cat > ~/backup/artrans.gz"
```

## 写在结尾

目前已支持将 Typecho、WordPress、Valine、Waline、Disqus、Commento、Twikoo 等类型的数据转为 Artrans，但鉴于评论系统的多样性，虽然我们已经对上述类型数据做了适配，但仍然还有许多并未兼容。如果你恰巧正在使用未被适配的评论系统，你除了等待 Artalk 官方支持之外，还可以尝试了解 Artrans 数据格式后自主编写评论数据导入导出工具。如果你觉得自己的工具写得不错，我们十分乐意将其收录在内，让我们共同创造一个能够在不同评论系统之间自由切换的工具。
