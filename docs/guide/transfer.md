# 🛬 数据迁移

::: tip

Artalk 前端提供可视化数据迁移工具，

你可以在「控制中心」找到「迁移」选项卡，然后根据提示进行操作。

:::

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
    "is_collapsed": "false", 
    "is_pending": "false", 
    "vote_up": "666", 
    "vote_down": "0", 
    "created_at": "2021-10-28 20:50:15 +0800 +0800", 
    "updated_at": "2021-10-28 20:50:15 +0800 +0800", 
    "nick": "qwqcode", 
    "email": "qwqcode@github.com", 
    "link": "https://qwqaq.com", 
    "password": "", 
    "badge_name": "管理员", 
    "badge_color": "#FF716D", 
    "page_key": "https://artalk.js.org/guide/transfer.html", 
    "page_title": "数据搬家", 
    "page_admin_only": "false", 
    "site_name": "Artalk",
    "site_urls": "http://localhost:3000/demo/,https://artalk.js.org"
}
```

我们称：一个 JSON 数组为 Artrans，

数组里的每一个 Object 项目为 Artran (没有 s)

:::

## 📦 备份

### 从 Artalk (Artrans) 到 Artalk

导出：`$ artalk-go export ./artrans`

导入：`$ artalk-go import ./artrans`

### 高级玩法

执行 `$ artalk-go export` 可直接 “标准输出”，并进行 “管道” 或 “输出重定向” 等操作，例如：

```sh
$ artalk-go export | gzip -9 | ssh username@remote_ip "cat > ~/backup/artrans.gz"
```

## 📥 迁入

迁入操作可在 前端 (可视化界面) 或 后端 (命令行) 进行。

命令行：执行 `$ artalk-go import -h` 查阅帮助文档。

### Artalk v1 (PHP 旧版后端)

[Artalk v1](https://github.com/ArtalkJS/ArtalkPHP) 是 Artalk 的旧版后端，它使用 PHP 编写。

新版后端我们全面转向 Golang，并重新设计了数据表结构。若您是 Artalk 的老用户，可以通过以下，从旧版后端数据文件迁移到新版。

旧版数据路径：`/data/comments.data.json`

```sh
$ artalk-go import artalk_v1 \
    json_file:"JSON 文件路径"
    t_name:"目标站点名" \
    t_url:"目标站点根目录 URL"
```

### WordPress

通过安装 WordPress 插件，导出 Artrans 格式的数据文件。

然后，执行 `$ artalk-go import ./artrans` 导入到 Artalk。

### Typecho

[Typecho](http://typecho.org/) 是一款 PHP 博客系统，你可以执行以下命令，改动几个参数，快速导入其评论数据。

比较智能，它会读取数据库中保存的 Typecho 配置，自动生成和设定 “重写规则” 对应的 URL，让导入后评论的 `pageKey` 于您的原本博客页面的 URL 路径保持一致。

命令行执行：

```sh
$ artalk-go import typecho \
    db_host:"localhost" \
    db_port:3306 \
    db_name:"数据库名称" \
    db_user:"数据库账户" \
    db_password:"数据库密码" \
    db_prefix:"typecho_" \
    t_name:"目标站点名" \
    t_url:"目标站点根目录 URL" \
    rewrite_post:"" \
    rewrite_page:""
```

前端启动参数 JSON 格式：

```json
{
    "db_host": "localhost",
    "db_port": 3306,
    "db_name": "数据库名称",
    "db_user": "数据库账户",
    "db_password": "数据库密码",
    "db_prefix": "typecho_",
    "t_name": "目标站点名",
    "t_url": "目标站点根目录 URL",
    "rewrite_post": "",
    "rewrite_page": ""
}
```

注：通过附加参数自定义 “重写规则” `rewrite_post` 和 `rewrite_page`，对应 Typecho 的 “永久链接设置”，例如：按日期归档 `/{year}/{month}/{day}/{slug}.html`

> “可用参数: {cid} 日志 ID, {slug} 日志缩略名, {category} 分类, {directory} 多级分类, {year} 年, {month} 月, {day} 日”

### Valine / Waline

[Valine](https://github.com/xCss/Valine) 是一款无后端的评论系统。

导入前，您需要前往 LeanCloud 后台下载 JSON 格式的数据文件。

```sh
$ artalk-go import typecho \
    json_file:"JSON 文件路径"
    t_name:"目标站点名" \
    t_url:"目标站点根目录 URL"
```

注：[Waline](https://waline.js.org/) 与 Valine 都是使用 LeanCloud 进行数据存储，格式相通。

### Twikoo

[Twikoo](https://twikoo.js.org/) 是一款基于腾讯云开发的评论系统。导入前需要自行获取 Twikoo JSON 格式的评论数据文件。你可以通过以下命令导入数据：

```sh
$ artalk-go import twikoo \
    json_file:"JSON 文件路径"
    t_name:"目标站点名" \
    t_url:"目标站点根目录 URL"
```

### Disqus

::: details 这个不想给你康

咕咕咕~~

（~~~它的数据文件是 XML 格式，邮箱还不能直接获取，好麻烦，懒得搞~~~

:::

### Commento

::: details 这个不想给你康

咕咕咕~~

:::

## 启动参数

```bash
./artalk-go import 数据类型 [启动参数...]
```

在前端导入时，你可以手动输入可选启动参数，例如：

```json
{
  "t_name": "Site",
  "t_url": "https://xx.com",
  "json_file": "服务器上的文件路径"
}
```

对应后端命令：

```bash
./artalk-go import 类型 t_name:"Site" t_url:"https://xx.com" json_file:"文件路径"
```

注：后端命令启动参数格式遵循 `<key>:<value>`

ArtalkGo 通用的启动参数：

|   参数   | 类型   | 说明         |
| :------: | ------ | ------------ |
| `t_name` | String | 导入站点名称 |
| `t_url`  | String | 导入站点 URL |
| `json_file`  | String | JSON 数据文件路径 |
| `json_data`  | String | JSON 数据字符串内容 |

## 🚑 迁出

`$ artalk-go export ./artrans`

## 写在结尾

目前已支持将 Twikoo、Typecho、Valine、Waline 等类型的数据转为 Artrans，但鉴于评论系统的多样性，虽然我们已经对上述类型数据做了适配，但仍然还有许多并未兼容。如果你恰巧正在使用未被适配的评论系统，你除了等待 Artalk 官方支持之外，还可以尝试了解 Artrans 数据格式后自主编写评论数据导入导出工具。如果你觉得自己的工具写得不错，我们十分乐意将其收录在内，让我们共同创造一个能够在不同评论系统之间自由切换的工具。
