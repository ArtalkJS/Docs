# API

::: tip 无特殊说明时 API 调用响应格式

| 字段名 | 类型 | 说明 |
| ----- | ------- | --- |
| `success` | bool | 接口调用结果 |
| `msg` | string | 返回消息，出错时此字段包含错误消息 |
| `data` | any | 返回数据，可能为 `object`、`string`、`array` 类型 |

:::

## Normal API

### 评论新增

**POST** `/api/add`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `name` | string | 是 | 评论者昵称 |
| `email` | string | 是 | 评论者邮箱（须加密处理） |
| `link` | string | 否 | 评论链接 |
| `content` | string | 是 | 评论内容 |
| `rid` | uint | 否 | 若回复一条评论，此参数传入父评论 `ID`，默认与 `ID` 相同 |
| `page_key` | string | 是 | 评论目标页面唯一标识符 |
| `page_title` | string | 否 | 评论目标页面标题 |
| `token` | string | 否 | 评论请求 Token |
| `site_name` | string | 否 | 评论目标站点标题 |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 评论新增成功 |
| `data.comment` | object | - | 评论数据 |
| `data.comment.id` | uint | - | 评论 ID |
| `data.comment.content` | string | - | 评论正文 |
| `data.comment.nick` | string | - | 评论者昵称 |
| `data.comment.email_encrypted` | string | - | 评论者邮箱 md5 值 |
| `data.comment.link` | string | - | 评论者链接 |
| `data.comment.ua` | string | - | 评论者 User-Agent |
| `data.comment.date` | string | - | 评论时间，格式为 `1970-01-01 00:00:00` |
| `data.comment.is_collapsed` | bool | - | 评论是否折叠 |
| `data.comment.is_pending` | bool | - | 评论是否待审 |
| `data.comment.is_allow_reply` | bool | - | 评论是否允许回复 |
| `data.comment.rid` | uint | - | 回复一条评论时此参数为回复目标评论 `ID`，否则与 `ID` 相同 |
| `data.comment.badge_name` | string | - | 评论者徽章文字 |
| `data.comment.badge_color` | string | - | 评论者徽章颜色 |
| `data.comment.visible` | bool | `true` | 评论是否可见 |
| `data.comment.vote_up` | int | `0` | 评论赞同数 |
| `data.comment.vote_down` | int | `0` | 评论反对数 |
| `data.comment.page_key` | string | - | 评论所在页面唯一标识符 |
| `data.comment.site_name` | string | - | 评论所在站点标题 |

### 评论获取

**POST** `/api/get`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `page_key` | string | 是 | 待获取评论页面的唯一标识符 |
| `limit` | int | 否 | 评论获取的数量限制 |
| `offset` | int | 否 | 评论获取的起始位置偏移 |
| `type` | string | 否 | 获取指定类型的评论 |
| `name` | string | 否 | 获取指定昵称的评论 |
| `email` | string | 否 | 获取指定邮箱的评论 |
| `site_name` | string | 否 | 获取指定站点名称的评论 |
| `with_sites` | bool | 否 | 历史遗留参数 |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 评论获取成功 |
| `data.comments` | array | - | 页面评论数据 |
| `data.total` | int | - | 页面评论总数（包括所有子评论） |
| `data.total_parents` | int | - | 页面评论中父级评论总数 |
| `data.page` | object | - | 页面数据 |
| `data.page.id` | uint | - | 页面 ID |
| `data.page.admin_only` | bool | - | 页面是否仅管理员可评论 |
| `data.page.key` | string | - | 页面唯一标识符 |
| `data.page.url` | string | - | 页面链接 |
| `data.page.title` | string | - | 页面标题 |
| `data.page.site_name` | string | - | 页面所在站点名称 |
| `data.page.vote_up` | int | - | 页面赞同数 |
| `data.page.vote_down` | int | - | 页面反对数 |
| `data.unread` | array | - | 未读的评论提醒数据 |
| `data.unread_count` | int | - | 未读的评论提醒数据总数 |
| `data.sites` | array | - | 页面所在站点数据 |

::: tip

 - `data.comments` 数组中元素结构参考 [评论新增接口](#评论新增) `/api/add` 响应的 `data.comment`
 - `data.unread` 数组中元素结构如下
    | 字段名 | 数据类型 | 默认 | 说明 |
    | ----- | ------- | :-: | --- |
    | `id` | uint | - | 评论提醒 ID |
    | `user_id` | uint | - | 评论提醒目标用户 ID |
    | `comment_id` | uint | - | 评论提醒来源评论 ID |
    | `is_read` | bool | - | 评论提醒是否已读 |
    | `is_emailed` | bool | - | 评论提醒是否已发送邮件 |
    | `read_link` | string | - | 评论提醒已读地址 |
 - `data.sites` 数组中元素结构参考 [站点编辑接口](#站点编辑) `/api/admin/site-edit` 响应的 `data.site`

:::

### 用户获取

**POST** `/api/user-get`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `name` | string | 否 | 待获取用户的昵称 |
| `email` | string | 否 | 待获取用户的邮箱 |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 用户获取成功 |
| `data.user` | object | - | 获取的用户数据 |
| `data.user.id` | uint | - | 用户 ID |
| `data.user.name` | string | - | 用户昵称 |
| `data.user.email` | string | - | 用户邮箱 |
| `data.user.link` | string | - | 用户链接 |
| `data.user.badge_name` | string | - | 用户徽章文字 |
| `data.user.badge_color` | string | - | 用户徽章颜色 |
| `data.user.is_admin` | bool | - | 用户是否管理员 |
| `data.is_login` | bool | - | 用户是否登录 |
| `data.unread` | array | - | 用户未读的评论提醒数据 |
| `data.unread_count` | int | - | 用户未读的评论提醒数据总数 |

::: tip

 - `data.unread` 数组中元素结构参考 [评论获取接口](#评论获取) `/api/get` **TIP**

:::

### 用户登录

**GET/POST** `/api/login`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `name` | string | 是 | 待登录用户的昵称 |
| `email` | string | 是 | 待登录用户的邮箱 |
| `password` | string | 是 | 待登录用户的密码（管理员身份验证） |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 用户登录成功 |
| `data.token` | string | - | 登录的用户 Token |

### 提醒已读

**POST** `/api/mark-read`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `notify_key` | string | 否 | 评论提醒唯一标识符 |
| `name` | string | 否 | 评论提醒用户的昵称 |
| `email` | string | 否 | 评论提醒用户的邮箱 |
| `all_read` | bool | 否 | 评论提醒是否已读 |
| `site_name` | string | 否 | 评论提醒所在站点名称 |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 提醒已读成功 |

### 评论投票

**POST** `/api/vote`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `target_id` | uint | 是 | 待投票评论 ID |
| `type` | string | 否 | 待投票类型，前缀 `comment_`、`page_` 依次代表对评论投票、对页面投票，后缀 `_up`、`_down` 依次代表赞同、反对 |
| `name` | string | 否 | 投票用户昵称 |
| `email` | string | 否 | 投票用户邮箱 |
| `site_name` | string | 否 | 投票目标评论或页面所在站点名称 |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `string` | 评论投票成功 |
| `data.vote_num` | int | - | 目标评论或页面指定类型投票数据 |

### Artalk 版本

::: warning

此接口较特殊，返回结果不包含 `success`、`msg`、`data` 字段，直接返回包含指定字段的 JSON。

:::

**GET/POST** `/api/version`

**参数** 无

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `app` | string | `artalk-go` | Artalk 后端程序名 |
| `version` | string | - | Artalk 后端程序版本号 |
| `commit_hash` | string | - | Artalk 后端程序 Git 提交哈希值 |

## Captcha API

### 验证码刷新

**GET** `/api/captcha/refresh`

**参数** 无

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 验证码刷新成功 |
| `data.img_data` | string | - | 根据 IP 获取的验证码图片 Base64 编码 |

### 验证码检验

**GET** `/api/captcha/check`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `value` | string | 是 | 验证码 |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 验证码检验成功 |
| `data.img_data` | string | - | 新的验证码图片 Base64 编码，仅验证码检验出错时存在此字段 |

## Admin API

### 评论编辑

**POST** `/api/admin/comment-edit`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `id` | uint | 是 | 待编辑评论 ID，**不可修改** |
| `site_name` | string | 否 | 待编辑评论所在站点名称，**不可修改** |
| `content` | string | 否 | 待编辑评论正文 |
| `page_key` | string | 否 | 待编辑评论所在页面唯一标识符 |
| `nick` | string | 否 | 待编辑评论所属用户昵称 |
| `email` | string | 否 | 待编辑评论所属用户邮箱 |
| `link` | string | 否 | 待编辑评论所属用户链接 |
| `rid` | string | 否 | 待编辑评论所属父评论 ID，此评论不是回复评论时该值与自身评论 ID 相同 |
| `ua` | string | 否 | 待编辑评论所属用户 User-Agent |
| `ip` | string | 否 | 待编辑评论所属用户 IP |
| `is_collapsed` | bool | 否 | 待编辑评论是否折叠 |
| `is_pending` | bool | 否 | 待编辑评论是否待审 |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 评论编辑成功 |
| `data.comment` | object | - | 编辑评论的新数据 |

::: tip

 - `data.comment` 对象结构参考 [评论新增接口](#评论新增) `/api/add` 响应的 `data.comment`

:::

### 评论删除

::: warning

此接口不推荐外部调用。

调用此接口前请务必核实评论 ID，一旦调用成功将删除该评论下所有相关数据。

:::

**POST** `/api/admin/comment-del`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `id` | uint | 是 | 待删除评论 ID |
| `site_name` | string | 是 | 待删除评论所在站点名称 |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 评论删除成功 |

### 页面获取

**POST** `/api/admin/page-get`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `site_name` | string | 是 | 待获取页面目标站点名称 |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 页面获取成功 |
| `data.pages` | array | - | 目标站点的页面数据 |
| `data.sites` | array | - | 所有站点数据 |

::: tip

 - `data.pages` 数组中元素结构参考 [评论获取接口](#评论获取) `/api/get` 响应的 `data.page`
 - `data.sites` 数组中元素结构参考 [站点编辑接口](#站点编辑) `/api/admin/site-edit` 响应的 `data.site`

:::

### 页面编辑

**POST** `/api/admin/page-edit`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `id` | uint | 是 | 待编辑页面 ID，**不可修改** |
| `site_name` | string | 否 | 待编辑页面所在站点名称，**不可修改** |
| `key` | string | 否 | 待编辑页面唯一标识符 |
| `title` | string | 否 | 待编辑页面标题 |
| `admin_only` | bool | 否 | 待编辑页面是否仅管理员可评论 |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 页面编辑成功 |
| `data.page` | object | - | 编辑页面的新数据 |

::: tip

 - `data.page` 对象结构参考 [评论获取接口](#评论获取) `/api/get` 响应的 `data.page`

:::

### 页面删除

::: warning

此接口不推荐外部调用。

调用此接口前请务必核实页面 ID，一旦调用成功将删除该页面下所有相关数据。

:::

**POST** `/api/admin/page-del`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `key` | string | 是 | 待删除页面唯一标识符 |
| `site_name` | string | 是 | 待删除页面所在站点名称 |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 页面删除成功 |

### 页面更新

**POST** `/api/admin/page-fetch`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `id` | uint | 是 | 待更新页面 ID |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 页面更新成功 |
| `data.page` | object | - | 更新页面的新数据 |

::: tip

 - `data.page` 对象结构参考 [评论获取接口](#评论获取) `/api/get` 响应的 `data.page`

:::

### 站点获取

**POST** `/api/admin/site-get`

**参数** 无

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 站点获取成功 |
| `data.sites` | array | - | 所有站点数据 |

::: tip

 - `data.sites` 数组中元素结构参考 [站点编辑接口](#站点编辑) `/api/admin/site-edit` 响应的 `data.site`

:::

### 站点新增

**POST** `/api/admin/site-add`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `name` | string | 是 | 待新增站点名称 |
| `urls` | string | 是 | 待新增站点链接，如有多个需以英文半角符号 `,` 分割 |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 站点新增成功 |
| `data.site` | object | - | 新增站点的数据 |
| `data.site.id` | uint | - | 站点 ID |
| `data.site.name` | string | - | 站点名称 |
| `data.site.urls` | array | - | 站点链接数组，元素为单个站点链接字符串 |
| `data.site.urls_raw` | string | - | 站点链接数组合并字符串，以英文半角符号 `,` 分割 |
| `data.site.first_url` | string | - | 站点第一链接 |

### 站点编辑

**POST** `/api/admin/site-edit`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `id` | uint | 是 | 待编辑站点 ID |
| `name` | string | 是 | 待编辑站点新名称 |
| `urls` | string | 是 | 待编辑站点新链接 |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 站点编辑成功 |
| `data.site` | object | - | 编辑站点的新数据 |
| `data.site.id` | uint | - | 站点 ID |
| `data.site.name` | string | - | 站点名称 |
| `data.site.urls` | array | - | 站点链接数组，元素为单个站点链接字符串 |
| `data.site.urls_raw` | string | - | 站点链接数组合并字符串，以英文半角符号 `,` 分割 |
| `data.site.first_url` | string | - | 站点第一链接 |

### 站点删除

::: warning

此接口不推荐外部调用。

调用此接口前请务必核实站点 ID，一旦调用成功将删除该站点下所有相关数据。

:::

**POST** `/api/admin/site-del`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `id` | uint | 是 | 待删除站点 ID |
| `del_content` | bool | 否 | 是否删除站点所有数据，为 `false` 时仅删除站点配置而保留站点评论数据 |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 站点删除成功 |

### 设置获取

**POST** `/api/admin/setting-get`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `id` | uint | 是 | 管理员用户 ID |
| `name` | string | 否 | 管理员用户昵称 |
| `url` | string | 否 | 管理员用户链接 |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 设置获取成功 |

### 设置保存

**POST** `/api/admin/setting-save`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `id` | uint | 是 | 管理员用户 ID |
| `name` | string | 否 | 管理员用户昵称 |
| `url` | string | 否 | 管理员用户链接 |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 设置保存成功 |

### 邮件发送

::: warning

页面收到评论 / 评论收到回复等满足需要发送邮件提醒条件时，后端将自动向目标地址发送邮件提醒，不需手动处理邮件发送。请勿滥用此接口。

:::

**POST** `/api/admin/send-mail`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `subject` | string | 是 | 邮件主题 |
| `body` | string | 是 | 邮件正文 |
| `to_addr` | string | 是 | 邮件收件人 |

**响应**

| 字段名 | 数据类型 | 默认 | 说明 |
| ----- | ------- | :-: | --- |
| `success` | bool | `true` | 邮件发送成功 |

### Artrans 接口

::: warning

此接口暂不稳定，请避免使用！

:::

**POST** `/api/admin/artransfer`

**参数**

| 字段名 | 数据类型 | 必需 | 说明 |
| ----- | ------- | :---: | --- |
| `type` | string | 是 | 导入数据类型 |
| `payload` | string | 否 | 导入数据 |

**响应** 无
