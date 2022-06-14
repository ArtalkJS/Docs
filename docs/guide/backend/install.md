---
next: '/guide/backend/config.md'
---

# 后端部署

## 使用 Docker

推荐使用 Docker，需安装 [Docker 引擎](https://docs.docker.com/engine/install/)。

### Docker

```bash
docker run -d \
    --name artalk-go \
    -p 端口号:23366 \
    -v $(pwd)/data:/data \
    artalk/artalk-go
```

### Docker Compose (推荐)

以 Linux 为例，开始前请安装 [Docker Compose](https://docs.docker.com/compose/install/)。

```bash
# 创建 Artalk 工作目录
mkdir Artalk && cd Artalk
vim docker-compose.yaml
```

编写 docker-compose.yaml 文件：

```yaml
version: "3.5"
services:
  artalk:
    container_name: artalk
    image: artalk/artalk-go
    ports:
      - 端口号:23366
    volumes:
      - ./data:/data
```

生成 Artalk 配置文件，并按需配置：

```bash
docker run -it -v $(pwd)/data:/data --rm artalk/artalk-go gen config data/artalk-go.yml

vim data/artalk-go.yml
```

执行命令，Artalk 后端程序将运行在 `http://localhost:端口号`

```bash
docker-compose up -d
```

前端填入 完整域名 + 程序端口号：

```js
new Artalk({ server: "http://your_domain:端口号" })
```

一些 Docker Compose 常用命令：

```bash
docker-compose restart  # 重启容器
docker-compose stop     # 暂停容器
docker-compose down     # 删除容器
docker-compose pull     # 更新镜像
docker-compose exec artalk bash # 进入容器
```

> 更多内容可参考：[“后端 · Docker”](/guide/backend/docker.md)


## 普通方式

1. 前往 [GitHub Release](https://github.com/ArtalkJS/ArtalkGo/releases) 下载压缩包
   > 下载可使用 curl / wget / rsync 等工具
2. 提取压缩包：`tar -zxvf artalk-go_版本号_系统_架构.tar.gz`
   > 修改目录名：`mv artalk-go_版本号_系统_架构 Artalk`
3. 进入程序目录 `cd Artalk`
4. 编辑配置文件 `vim artalk-go.yml`
   > 可参考：[“配置文件说明”](/guide/backend/config.html)
5. 运行程序 `./artalk-go server`
   > 可选流程：
   >
   > [“反向代理端口到 80 / 443 (Nginx, Apache)”](/guide/backend/reverse-proxy.md)
   >
   > ["持久化运作 (tmux, systemd, supervisor)"](/guide/backend/daemon.md)
6. 前端配置

    ```js
    new Artalk({ server: "http://your_domain:端口号" })
    ```

#### 附表：文件名解释

|文件名|操作系统|CPU 架构|
|:-|:-:|:-:|
|artalk-go_linux_amd64.tar.gz|Linux|x86_64|
|artalk-go_linux_arm64.tar.gz|Linux|ARM64|
|artalk-go_linux_arm7.tar.gz|Linux|ARMv7|
|artalk-go_windows_amd64.zip|Windows|x86_64|
|artalk-go_darwin_arm64.tar.gz|macOS|Apple Silicon|
|artalk-go_darwin_amd64.tar.gz|macOS|Intel Chip <sup>~~(什么狗屎)~~</sup>|

## 编译运行

可参考：[“后端构建”](./build.md)
