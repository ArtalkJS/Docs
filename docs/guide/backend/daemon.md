# 持久化运作

## Docker

更新 Docker 容器的 [Restart 策略](https://docs.docker.com/config/containers/start-containers-automatically/#use-a-restart-policy) 以达到进程守护效果。

```bash
docker update --restart=always artalk-go
```

## tmux

tmux 将创建一个持续的命令行会话，在 SSH 或 tty 断开后保持在后台。

Note: 服务器关闭或重启后，tmux 会话将被清除，需要手动重新运行程序。

1. 创建会话 `tmux new -s artalk-go`
2. 运行程序 `./artalk-go serve`

恢复接入会话：`tmux attach -t artalk-go`

查看所有会话：`tmux ls`

## systemd

`sudo vim /etc/systemd/system/artalk-go.service`

```ini
[Unit]
Description=Artalk Go
After=network.target remote-fs.target nss-lookup.target

[Service]
User=root
ExecStart=<ArtalkGo 执行文件绝对路径> serve --config <配置文件绝对路径>
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s QUIT $MAINPID
Restart=on-abnormal
RestartSec=5s

[Install]
WantedBy=multi-user.target
```
- 更新 systemd 配置：`systemctl daemon-reload`
- 启动：`systemctl start artalk-go.service`
- 停止：`systemctl stop artalk-go.service`
- 状态：`systemctl status artalk-go.service`

Tip: 设置 `alias` 简化命令输入

## Supervisor

以宝塔面板举例：打开「软件商店」，搜索并安装「Supervisor管理器」：

![](/images/baota-supervisor/0.png)

安装后，打开插件，点击「添加守护程序」：

![](/images/baota-supervisor/1.png)

> - 名称：随意
> - 启动用户：root 或其他
> - 运行目录：点击右侧图标，打开到 Artalk 所在目录
> - 启动命令：`./artalk-go serve`

