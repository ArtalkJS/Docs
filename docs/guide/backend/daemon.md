# 持久化运作

## tmux

1. 创建会话 `tmux new -s artalk-go`
2. 运行程序 `./artalk-go serve`

恢复接入会话：`tmux attach -t artalk-go`

查看所有会话：`tmux ls`

## systemctl

`$ sudo vim /etc/systemd/system/artalk-go.service`

```ini
[Unit]
Description=Artalk Go
After=network.target remote-fs.target nss-lookup.target

[Service]
User=root
ExecStart=<ArtalkGo 执行文件绝对路径> serve --config <配置文件绝对路径>
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s QUIT $MAINPID
[Install]
WantedBy=multi-user.target
```

- 启动：`systemctl start artalk-go.service`
- 停止：`systemctl stop artalk-go.service`
- 状态：`systemctl status artalk-go.service`

Tip: 设置 `alias` 简化命令输入
