# 🛬 数据搬家

## 数据行囊 (Artrans)

数据行囊 (Artrans) 是 Artalk 持久化数据保存规范格式，你可以导出或导入 Artrans 格式的数据文件。

关于命名：Artran = Art + Ran (艺术 + 奔跑) 即 ~~“奔跑的艺术”~~（快速跑路

通过对不同评论数据文件格式的来回转换，你可以在不同评论系统之间自由切换。

::: details Artrans 格式样例

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

我们称：一个 JSON 数组为 Artrans

数组里面的每个 item 叫 Artran (没有 s)

:::

## 📦 备份

### 从 Artalk (Artrans) 到 Artalk

导出：`$ artalk-go export ./artrans`

导入：`$ artalk-go import ./artrans`

### 高级玩法

执行 `$ artalk-go export"` 直接 “标准输出 (stdout)”，并进行 “管道 (Pipe)” 或 “输出重定向 (Output Redirection)” 操作。

例如：

```sh
$ artalk-go export | gzip -9 | ssh username@remote_ip "cat > ~/backup/artrans.gz"
```

## 📥 迁入

迁入操作可在 前端 (图形界面) 或 后端 (命令行) 进行。

命令行：执行 `$ artalk-go import -h` 查阅帮助文档。

以下提供 “命令行命令” 和 “启动参数”，分别用于 “后端” 和 “前端” 的导入操作。

### Artalk v1 (PHP 旧版后端)

[Artalk v1](https://github.com/ArtalkJS/ArtalkPHP) 是 Artalk 的旧版后端，它使用 PHP 编写。

新版后端我们全面转向 Golang，并重新设计了数据表结构。若您是 Artalk 的老用户，可以通过以下，从旧版后端数据文件迁移到新版。

旧版数据路径：`\data\comments.data.json`

命令行执行：

```sh
$ artalk-go import artalk_v1 \
    json_file:"JSON 文件路径"
    t_name:"目标站点名" \
    t_url:"目标站点根目录 URL"
```

启动参数 JSON 格式：

```json
{
    "t_name": "目标站点名",
    "t_url": "目标站点根目录 URL"
}
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

启动参数 JSON 格式：

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

### Valine

[Valine](https://github.com/xCss/Valine) 是一款无后端的评论系统。

导入前，您需要前往 LeanCloud 后台下载 JSON 格式的数据文件。

命令行执行：

```sh
$ artalk-go import typecho \
    json_file:"JSON 文件路径"
    t_name:"目标站点名" \
    t_url:"目标站点根目录 URL"
```

启动参数 JSON 格式：

```json
{
    "t_name": "目标站点名",
    "t_url": "目标站点根目录 URL"
}
```

注：[Waline](https://waline.js.org/) 与 Valine 都是使用 LeanCloud 进行数据存储，格式相通，所以这里也可以用来导入 Waline 的数据。

### Disqus

::: details 这个不想给你康

咕咕咕~~

（~~~它的数据文件是 XML 格式，邮箱还不能直接获取，好麻烦，懒得搞~~~

:::

### Commento

::: details 这个不想给你康

咕咕咕~~

:::

### 其他评论系统

::: details 点击阅览

**Twikoo**

```sh
$ artalk-go import twikoo \
    json_file:"JSON 文件路径"
    t_name:"目标站点名" \
    t_url:"目标站点根目录 URL"
```

:::

## 🚑 迁出

`$ artalk-go export ./artrans`
