# 多元通知

你可以配置 `notify`，让 ArtalkGo 以多种方式通知管理员。

支持 **Telegram Bot**、**飞书 WebHook 机器人**、**钉钉**、**Bark**、**Slack**、**LINE**，并且多种方式能够同时启用。

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

## Telegram Bot

```yaml
notify:
  # Telegram
  telegram:
    enabled: true
    api_token: ""
    receivers:
      - 7777777
```

### 创建 TG Bot

搜索 `@BotFather` 回复 `/newbot` 并按提示创建新的 TG 机器人。

![](/images/tg-bot-new/1.png)

标红的文字就是你之后需要在 ArtalkGo 配置中填入的 `api_token`。

配置中的 `receivers` 填入需要接受消息的账号数字 ID，可以搜索机器人 `@RawDataBot` 获取如图：

![](/images/tg-bot-new/2.png)

::: tip

鉴于复杂的网络环境，如需使用代理，请在 ArtalkGo 启动之前配置环境变量，例如：

```sh
export https_proxy=http://127.0.0.1:7890
```

:::

## 飞书 WebHook 机器人

```yaml
notify:
  # 飞书
  lark:
    enabled: true
    webhook_url: ""
```

### 创建飞书机器人

点击顶部的加号，创建一个新的群组：

![](/images/lark-bot-new/1.png)



## 钉钉

```yaml
notify:
  # 钉钉
  ding_talk:
    enabled: true
    token: ""
    secret: ""
```

## Bark

```yaml
notify:
  # Bark
  bark:
    enabled: true
    server: "http://day.app/xxxxxxx/"
```

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
