# 后端配置

::: warning
目前文档仍在陆续完善中，完整配置请参考「[模板配置文件](https://github.com/ArtalkJS/ArtalkGo/blob/master/artalk-go.example.yml)」。
:::

ArtalkGo 默认读取当前目录下的 `artalk-go.yml` 作为配置文件，你可以使用参数 `-c` 来指定：

```bash
artalk-go -c ./conf.yml
```

## 模版配置文件

一份完整的配置文件可供参考：[artalk-go.example.yml](https://github.com/ArtalkJS/ArtalkGo/blob/master/artalk-go.example.yml)

### 使用 gen 命令生成

ArtalkGo 提供 `gen` 命令，你可以快速生成一份新的配置文件：

```bash
artalk-go gen artalk-go.example.yml ./artalk-go.yml
```

### 使用 curl 下载

```bash
curl -L https://raw.githubusercontent.com/ArtalkJS/ArtalkGo/master/artalk-go.example.yml > conf.yml
```

## 配置加密密钥

在 ArtalkGo 启动之前，你需要配置一个 `app_key` 用于网站内容的安全加密：

```yaml
app_key: "<任意的字符>"
```

## 连接数据库

ArtalkGo 支持连接多种数据库，支持 SQLite、MySQL、PostgreSQL、SQL Server 配置如下：

### SQLite

SQLite 是轻型数据库，使用单个文件存储数据，无需额外运行程序，尤其适合小型站点，例如个人博客。

```yaml
db:
  type: "sqlite"
  file: "./data/artalk-go.db"
```

### MySQL / PostgreSQL / SQL Server

修改 `type` 为你的数据库类型：

```yaml
db:
  type: "mysql"      # sqlite, mysql, pgsql, mssql
  name: "artalk"     # 数据库名
  host: "localhost"  # 地址
  port: "3306"       # 端口
  user: "root"       # 账号
  password: ""       # 密码
  charset: "utf8mb4" # 编码格式
  table_prefix: ""   # 表前缀 (例如："atk_")
```

数据表将在 ArtalkGo 启动时自动完成创建，无需额外操作。

## 连接缓存服务器

```yaml
cache:
  type: "builtin" # 支持 redis, memcache, builtin (自带缓存)
  expires: 30     # 缓存过期时间 (单位：分钟)
  warm_up: false  # 程序启动时预热缓存
  server: ""      # 连接缓存服务器 (例如："localhost:6379")
```

## HTTP 监听端口

默认端口为 23366，你能在配置文件中指定，如下：

```yaml
host: "0.0.0.0"
port: 23366
```

将 `host` 配置为 `0.0.0.0` 让 ArtalkGo 程序暴露到外网范围内可被访问，

如果你只想让 ArtalkGo 本地能够访问，可以将 `host` 配置为 `127.0.0.1`。

## 工作目录指定

ArtalkGo 在不指定工作目录的情况下，会使用「启动时的目录」作为工作目录。

```bash
pwd  # 显示当前目录路径
```

使用参数 `-w` 来指定工作目录，它通常是一个「绝对路径」，例如：

```bash
artalk-go -w /root/artalk -c ./conf.yml
```

注：`-c` 的相对路径会基于 `-w` 的路径，ArtalkGo 此时会读取 `/root/artalk/conf.yml` 作为配置文件。

其次，在「配置文件中」使用的「相对路径」，也会基于「工作目录」。

例如 `conf.yml` 中有这样的配置：

```yaml
test_file: "./data/artalk-go.log"
```

将读取 `/root/artalk/data/artalk-go.log`。

## 邮件通知

配置邮件通知，让评论消息通过邮件方式发送到目标用户，你可以自定义邮件发送者名词，邮件模版等。

详情参考：[“后端 · 邮件通知”](/guide/backend/email.md)

## 多元通知

你可以配置多种消息发送方式，例如飞书、Telegram 等，当收到新的评论时通知管理员。

详情参考：[“后端 · 多元通知”](/guide/backend/notify.md)

## 在后端配置前端

增加 `frontend` 字段内容可以在后端配置前端，详情可参考：[“在后端控制前端”](/guide/backend/fe-control)。

::: tip

配置文件相关代码：[/config/config.go](https://github.com/ArtalkJS/ArtalkGo/blob/master/config/config.go)

前往：[“前端 · 配置文件”](/guide/frontend/config.md)
:::
