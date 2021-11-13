# 🛬 数据迁移

::: warning

数据迁移功能正在持续开发中，此文档将跟随最新开发状态更新，请注意内容时效性。

如果希望尝鲜数据迁移功能，你必须部署 [@ArtalkJS/ArtalkGo](https://github.com/ArtalkJS/ArtalkGo/) 后端。

:::

## 数据行囊

数据行囊（Artrans）是 Artalk 持久化数据保存规范格式。每一条评论的 Object 类型数据称为 Artran，多条评论数据以 Array 形式组成 Artran**s**，导出时 Artrans 以规范的 JSON 文件格式输出。

> Artran = Art + Ran (艺术 + 奔跑) ~~即“奔跑的艺术”（快速跑路~~

::: details Artran 格式样例

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

:::

相较于其他评论系统的导出数据，Artrans 的可读性更佳，更加符合人类的思维方式。目前已经实现评论数据转换为 Artrans 的平台有 Twikoo、Typecho、Valine、Waline。鉴于评论系统多样性，虽然我们已经编写了前述平台的数据导入工具，但还有很多系统的评论数据导入未受兼容。如果恰巧正在使用未受兼容的平台，你除了等待 Artalk 官方支持，还可以尝试了解 Artrans 数据格式后自主编写评论数据导入导出工具。如果你觉得自己的工具写得不错，我们也十分乐意将其收录在此，让我们携手解决在不同评论系统之间自由切换的问题。

目前 Artalk 兼容的导入数据：

|  平台   | 支持的评论数据 | 获取方式                                |
| :-----: | -------------- | --------------------------------------- |
| Twikoo  | `.json`        | 从 Twikoo 导出 JSON 格式文件            |
| Typecho | `数据库`       | 从 MySQL 连接自动获取                   |
| Valine  | `.json`        | 从 LeanCloud 应用管理导出 JSON 格式文件 |
| Waline  | `.json`        | 从 LeanCloud 应用管理导出 JSON 格式文件 |

目前 ArtalkGo 通用的启动参数：

|   参数   | 可选值 / 类型 | 说明         |
| :------: | ------------- | ------------ |
| `t_name` | String        | 导入站点名称 |
| `t_url`  | String        | 导入站点 URL |

::: tip 关于启动参数

- 在前端控制台使用时，你需要以 JSON 格式输入启动参数，例如：

  ```json
  {
    "t_name": "Artalk",
    "t_url": "https://artalk.js.org"
  }
  ```

- 在后端命令行使用时，你需要**以 `<key>:<value>` 的格式**输入启动参数，例如：
  ```bash
  ./artalk-go import typecho t_name:"Artalk" t_url:"https://artalk.js.org"
  ```

:::

## 📥 数据导入

数据导入现已支持通过前端控制台、后端命令行两种方式操作。

### 前端控制台

前端控制台允许你以直观的方式导入数据，具体操作步骤如下：

1. 以管理员用户身份登录站点
2. 点击「控制台」按钮展开控制台面板
3. 填写新增站点的 **站点名称**、**站点 URL**
4. 选择待导入数据类型
5. 填写启动参数
6. 上传数据文件
7. 点击「导入」按钮

### 后端命令行

后端命令行允许你一键导入站点评论数据，你可以执行 `artalk-go import -h` 查阅命令行帮助文档。

评论数据导入的通用命令行格式如下：

```bash
artalk-go import <source> [<options>]
```

|   参数    | 说明                                                                                         |
| :-------: | --------------------------------------------------------------------------------------------|
| `source`  | 导入数据的来源平台。可选 `artalk_v1`、`twikoo`、`typecho`、`valine`，使用 Artrans 时此项为空    |
| `options` | 导入数据文件路径、启动参数等。**按照 `<key>:<value>` 格式填写**                                 |

下面我们将详细列举从不同平台导入数据时的指令格式：

- **从 Artalk 导入**

  ```sh
  artalk-go import <Artrans 数据文件路径>
  ```

- **从 Artalk v1 导入**

  Artalk v1 采用 [@ArtalkJS/ArtalkPHP](https://github.com/ArtalkJS/ArtalkPHP) 后端。新版后端重新设计了数据表结构，不能直接兼容旧版评论数据，需要通过以下命令重新导入数据：

  ```sh
  artalk-go import artalk_v1 \
      json_file:"<Artalk comments.data.json 文件路径>" \
      t_name:"<导入目标站点名称>" \
      t_url:"<导入目标站点 URL>"
  ```

- **从 Typecho 导入**

  [Typecho](http://typecho.org/) 是一款 PHP 博客系统，ArtalkGo 支持根据 Typecho 数据库中的站点配置生成与“永久链接设置”对应的 `pageKey` 重写规则。你可以通过以下命令导入数据：

  ```sh
  artalk-go import typecho \
      db_host:"<Typecho 数据库地址>" \
      db_port:"<Typecho 数据库端口>" \
      db_user:"<Typecho 数据库用户名>" \
      db_password:"<Typecho 数据库用户密码>" \
      db_name:"<Typecho 数据库名称>" \
      db_prefix:"<Typecho 数据表前缀>" \
      t_name:"<导入目标站点名称>" \
      t_url:"<导入目标站点 URL>" \
  ```

  除上述参数外，你还可以通过 `rewrite_post` 和 `rewrite_page` 参数自定义文章页面和独立页面的 `pageKey` 重写规则，与 Typecho 的“永久链接设置”设置类似，例如按日期归档可以定义重写规则：`/{year}/{month}/{day}/{slug}.html`。

  目前自定义重写规则可用的替换变量有：

  |  变量   | 说明 |  变量  | 说明       |    变量     | 说明     |
  | :-----: | ---- | :----: | ---------- | :---------: | -------- |
  | `year`  | 年   | `cid`  | 页面 ID    | `category`  | 分类     |
  | `month` | 月   | `slug` | 页面缩略名 | `directory` | 多级分类 |
  |  `day`  | 日   |

- **从 Twikoo 导入**

  [Twikoo](https://twikoo.js.org) 是一款基于腾讯云开发的评论系统。导入前需要自行获取 Twikoo JSON 格式的评论数据文件。你可以通过以下命令导入数据：

  ```sh
  artalk-go import twikoo \
      json_file:"<JSON 格式评论数据文件路径>" \
      t_name:"<导入目标站点名称>" \
      t_url:"<导入目标站点 URL>"
  ```

- **从 Valine / Waline 导入**

  [Valine](https://github.com/xCss/Valine) / [Waline](https://waline.js.org/) 是两款类似的无后端评论系统。它们都使用 LeanCloud 进行数据存储，评论数据格式相通，导入前需要前往 LeanCloud 后台下载 JSON 格式的评论数据文件。你可以通过以下命令导入数据：

  ```sh
  artalk-go import valine \
      json_file:"<JSON 格式评论数据文件路径>" \
      t_name:"<导入目标站点名称>" \
      t_url:"<导入目标站点 URL>"
  ```

## 📦 数据导出

数据导入现已支持通过前端控制台、后端命令行两种方式操作。

### 前端控制台

前端控制台允许你以直观的方式导出数据，具体操作步骤如下：

1. 以管理员用户身份登录站点
2. 点击「控制台」按钮展开控制台面板
3. 选择待导出数据的站点
4. 点击「导出」图标按钮

### 后端命令行

后端命令行允许你一键导出站点评论数据，命令如下：

```sh
artalk-go export <Artrans 数据文件路径>
```

在命令行中还有一些高级玩法，比如通过管道重定向标准输出和 SSH 隧道将 Artalk 数据文件备份到远程主机：

```sh
artalk-go export | gzip -9 | ssh user@host "cat > ~/backup/artrans.gz"
```
