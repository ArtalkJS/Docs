# 后端配置

ArtalkGo 默认读取当前目录下的 `artalk-go.yml` 作为配置文件，你可以使用参数 `-c` 来指定：

```bash
artalk-go -c ./conf.yml
```

官方建议的配置文件格式为 [YAML](https://zh.wikipedia.org/wiki/YAML)，但你也可以 `-c` 指定使用其他格式，例如 `.toml`、`.json` 等。

## 获取模版配置文件

可参考一份「完整的配置文件」：[artalk-go.example.yml](https://github.com/ArtalkJS/ArtalkGo/blob/master/artalk-go.example.yml)

#### 使用 gen 命令生成配置文件

ArtalkGo 提供 `gen` 命令，你可以快速生成一份新的配置文件：

```bash
artalk-go gen artalk-go.example.yml ./artalk-go.yml
```

#### 使用 curl 下载配置文件

```bash
curl -L https://raw.githubusercontent.com/ArtalkJS/ArtalkGo/master/artalk-go.example.yml > conf.yml
```

## `app_key` 加密密钥

在 ArtalkGo 启动之前，你需要配置一个 `app_key` 用于对网站内容进行安全加密：

```yaml
app_key: "<任意的字符>"
```

## `db` 数据库

ArtalkGo 支持连接多种数据库，支持 SQLite、MySQL、PostgreSQL、SQL Server 配置如下：

#### SQLite

SQLite 是轻型数据库，使用单个文件存储数据，无需额外运行程序，尤其适合小型站点，例如个人博客。

```yaml
db:
  type: "sqlite"
  file: "./data/artalk-go.db"
```

#### MySQL / PostgreSQL / SQL Server

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

## `trusted_domains` 可信域名

```yaml
trusted_domains:
  - "https://artalk.你的域名:23366"
  - "https://前端使用域名.com"
```

配置该项能限制来自列表外的 Referer 和跨域请求。

:::tip

你需要将「后端程序地址」和「使用该后端的前端」地址，**两者**同时加入可信域名列表中。

在侧边栏控制中心「站点」选项卡 - 选择站点「修改 URL」，填入站点 URL 也具有相同的效果，注：多个 URL 用 `,` 英文逗号分隔。

:::

如果你觉得比较繁琐，或打算在反代模式下使用 Nginx 控制 Header 头部信息，可以将其关闭，设置为：

```yaml
trusted_domains:
  - "*"
```

## `admin_users` 管理员账户

```yaml
admin_users:
  - name: "admin"
    email: "admin@example.com"
    password: ""
    badge_name: "管理员"
    badge_color: "#FF6C00"
  - name: "admin2"
    email: "admin2@example.com"
    password: ""
    badge_name: "小管理员"
    badge_color: "#FF6C00"
```

你可以设置多个管理员账户，当输入框输入匹配管理员用户名和邮箱时，将弹出密码验证提示框，

并且只有管理员才能访问侧边栏「控制中心」，在前端对评论内容进行管理操作。

- **name** & **email**：用户名和邮箱，**不区分大小写**。
- **password**：用户密码。

  支持 bcrypt 和 md5 加密，例如填写：`"(md5)50c21190c6e4e5418c6a90d2b5031119"`。

  **建议使用更安全的 bcrypt 加密算法**，在 Linux 环境下，你可以使用 [htpasswd 命令](https://httpd.apache.org/docs/2.4/programs/htpasswd.html) 来生成密文：

  ```bash
  unset HISTFILE # 临时禁用 history 防止密码在历史记录中出现
  htpasswd -bnBC 10 "" "your_password" | tr -d ':'
  ```

  然后配置填写：`"(bcrypt)$2y$10$ti4vZYIrxVN8rLcYXVgXCO.GJND0dyI49r7IoF3xqIx8bBRmIBZRm"`

  命令解释参考：[“Compute bcrypt hash from command line”](https://unix.stackexchange.com/questions/307994/compute-bcrypt-hash-from-command-line#answer-419855)

- **badge_name**：用户显示的头衔徽标文字。
- **badge_color**：用户显示的头衔徽标背景颜色。

#### 指定站点的管理员 <sup>[1]</sup>

- **site_names**：数组类型，可把一个管理员分配给多个站点。

  成为站点的管理员，控制管理员对于一个站点的侧边栏「控制中心」的可访问权限。

#### 管理员接收邮件通知 <sup>[1]</sup>

当页面有新的评论时，邮件会发送给**该站点**的所有管理员，但你可以配置 `receive_email` 来禁用它。

- **receive_email**：设置为 `false` 系统将不会发送邮件通知给该用户。

  注：禁止后该管理员用户仍可以收到来自他人的 @AT 回复，只是禁止评论页面发送邮件。

**[注1]** *计划的功能，目前并未实现*

## `site_default` 默认站点

如果你觉得大概是不会用到 Artalk 的多站点功能，可以直接将该项配置为你的站点名，例如：

```yaml
site_default: "Artalk 官网"
```

然后在前端直接使用这个站点名：

```js
new Artalk({ site: "Artalk 官网" })
```

这样，你就无需在侧边栏的控制中心新建站点，系统会帮你自动创建。

## `frontend` 在后端配置前端

增加 `frontend` 字段内容可以在后端配置前端，详情可参考：[“在后端控制前端”](/guide/backend/fe-control)。

## `email` 邮件通知

配置邮件通知，让评论消息通过邮件方式发送到目标用户，你可以自定义邮件发送者名词，邮件模版等。

详情参考：[“后端 · 邮件通知”](/guide/backend/email.md)

## `notify` 多元通知

你可以配置多种消息发送方式，例如飞书、Telegram 等，当收到新的评论时通知管理员。

详情参考：[“后端 · 多元通知”](/guide/backend/notify.md)

## `moderator` 评论审核

配置评论审核来自动拦截垃圾评论。

详情参考：[“后端 · 评论审核”](/guide/backend/moderator.md)

## `cache` 缓存

为了提高评论系统的响应速度和性能，ArtalkGo 内置一套缓存机制，并且默认开启，无需额外配置。但如果有需要，你也可以连接外部缓存服务器，支持 Redis 和 Memcache。

```yaml
cache:
  type: "builtin" # 支持 redis, memcache, builtin (自带缓存)
  expires: 30     # 缓存过期时间 (单位：分钟)
  warm_up: false  # 程序启动时预热缓存
  server: ""      # 连接缓存服务器 (例如："localhost:6379")
```

- **warm_up**：缓存预热功能。设置为 `true`，在 ArtalkGo 启动时会立刻对数据库内容进行全面缓存，如果你的评论数据较多，达到上万条，启动时间可能会延长。
- **type**：缓存类型。可选：`redis`, `memcache`, `builtin`。

type 默认为 `builtin`，如遇特殊情况可将缓存关闭，将其设置为 `disabled`。

注：如果在 ArtalkGo 程序外部修改数据库内容，需要刷新 ArtalkGo 缓存才能更新。

## `host` 监听地址

HTTP 默认监听端口为 23366，你能在配置文件中指定，如下：

```yaml
host: "0.0.0.0"
port: 23366
```

将 `host` 配置为 `0.0.0.0` 让 ArtalkGo 程序暴露到外网范围内可被访问，

如果你只想让 ArtalkGo 本地能够访问，可以将 `host` 配置为 `127.0.0.1`。

你也可以在 ArtalkGo 服务器启动时，带上 `--host` 和 `--port` 参数分别对地址和端口进行指定，例如：

```bash
artalk-go server --host 127.0.0.1 --port 8080
```

## `ssl` 加密传输

```yaml
ssl:
  enabled: true
  cert_path: ""
  key_path: ""
```

你可以配置该项，让 `http` 升级为 `https`，通过 SSL 协议加密传输。

- `cert_path`：SSL 证书公钥文件路径。
- `key_path`：SSL 证书私钥文件路径。

你也可以直接反向代理 ArtalkGo 本地服务器，然后在例如 Nginx 启用 SSL 加密。

## `timezone` 时区

```yaml
timezone: "Asia/Shanghai"
```

该值填写你所在地时区，对应查询 IANA 时区数据库，参考：[“RFC-6557”](https://www.rfc-editor.org/rfc/rfc6557.html)。

## `login_timeout` 登录超时

该值设定管理员账户登录 JWT 令牌的有效期，单位：秒。例如，三天有效：

```yaml
login_timeout: 259200
```

## `log` 日志

打开日志后，系统错误等信息将被记录到设定的文件中。

```yaml
log:
  enabled: true # 总开关
  filename: "./data/artalk-go.log" # 日志文件路径
```

## `debug` 调试模式

将 `debug` 配置为 `true` 启用调试模式。

```yaml
debug: true
```

## 参数 `-w` 工作目录

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

::: tip

配置文件相关代码：[/config/config.go](https://github.com/ArtalkJS/ArtalkGo/blob/master/config/config.go)

前往：[“前端 · 配置文件”](/guide/frontend/config.md)
:::
