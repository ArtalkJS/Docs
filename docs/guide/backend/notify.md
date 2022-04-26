# 多元通知

你可以配置 `notify`，让 ArtalkGo 以多种方式通知管理员。

支持 **Telegram Bot**、**飞书机器人**、**钉钉**、**Bark**、**Slack**、**LINE**，并且多种方式可以同时启用。

完整的 `notify` 配置如下：

::: details 点击显示

```yaml
# 多元通知
notify:
  # Telegram
  telegram:
    enabled: false
    api_token: ""
    receivers:
      - 7777777
  # 飞书
  lark:
    enabled: false
    webhook_url: ""
  # 钉钉
  ding_talk:
    enabled: false
    token: ""
    secret: ""
  # Bark
  bark:
    enabled: false
    server: "http://day.app/xxxxxxx/"
  # Slack
  slack:
    enabled: false
    oauth_token: ""
    receivers:
      - "CHANNEL_ID"
  # LINE
  line:
    enabled: false
    channel_secret: ""
    channel_access_token: ""
    receivers:
      - "USER_ID_1"
      - "GROUP_ID_1"
```

:::

## Telegram

```yaml
notify:
  # Telegram
  telegram:
    enabled: true
    api_token: ""
    receivers:
      - 7777777
```

- `api_token`：TG Bot 的 API Token。
- `receivers`：消息接受者的数字 ID，可设置多个。

### 创建 TG Bot

搜索 `@BotFather` 回复 `/newbot` 并按提示创建新的 TG 机器人。

![](/images/notify/tg-1.png)

标红的文字就是你之后需要在 ArtalkGo 配置中填入的 `api_token`。

配置中的 `receivers` 填入需要接受消息的账号数字 ID，可以搜索机器人 `@RawDataBot` 获取如图：

![](/images/notify/tg-2.png)

详情可参考：[“Bots: An introduction for developers - Telegram”](https://core.telegram.org/bots)

::: tip

鉴于复杂的网络环境，如需使用代理，请在 ArtalkGo 启动之前配置环境变量，例如：

```sh
export https_proxy=http://127.0.0.1:7890
```

:::

## 飞书

```yaml
notify:
  # 飞书
  lark:
    enabled: true
    webhook_url: ""
```

- `webhook_url`：填入创建群组机器人时得到的 WebHook 地址。

### 创建群组机器人

点击顶部的加号，创建一个新的群组：

![](/images/notify/lark-1.png)

找到右侧的「群设置」-「群机器人」- 点击「添加机器人」- 选择「自定义机器人」并按照提示创建。

<img src="/images/notify/lark-2.png" width="700px">

复制如上图的 WebHook 地址，并修改 ArtalkGo 的 `webhook_url` 配置即可。

<img src="/images/notify/lark-3.png" width="400px">

可参考：[“飞书帮助中心文档”](https://www.feishu.cn/hc/zh-CN/articles/360024984973)

## 钉钉

```yaml
notify:
  # 钉钉
  ding_talk:
    enabled: true
    token: ""
    secret: ""
```

可参考：[“钉钉开放文档”](https://open.dingtalk.com/document/robots/custom-robot-access)

## Bark

```yaml
notify:
  # Bark
  bark:
    enabled: true
    server: "http://day.app/xxxxxxx/"
```

[Bark](https://github.com/Finb/Bark) 是一款开源的 iOS App，并且[支持自托管](https://github.com/Finb/bark-server)，你能使用 Bark 轻松地推送消息给你的 iOS 设备。

你可以在 App Store 搜索下载，并获得需要填入 ArtalkGo 的 `server` 配置项：


<img src="/images/notify/bark.png" width="700px">


## Slack

```yaml
notify:
  # Slack
  slack:
    enabled: true
    oauth_token: ""
    receivers:
      - "CHANNEL_ID"
```

## LINE

```yaml
notify:
  # LINE
  line:
    enabled: true
    channel_secret: ""
    channel_access_token: ""
    receivers:
      - "USER_ID_1"
      - "GROUP_ID_1"
```
