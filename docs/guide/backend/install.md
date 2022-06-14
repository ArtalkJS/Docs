---
next: '/guide/backend/config.md'
---

# 后端部署

## 使用 Docker

运行 Artalk 后端服务器推荐使用 Docker，在开始之前，请确保已安装 [Docker 引擎](https://docs.docker.com/engine/install/)。

### Docker

```bash
docker run -d \
    --name artalk-go \
    -p 端口号:23366 \
    -v $(pwd)/data:/data \
    artalk/artalk-go
```

### Docker Compose (推荐)

以 Linux 部署为例，首先需要确保安装 [Docker Compose](https://docs.docker.com/compose/install/)。

```bash
# 创建 Artalk 工作目录
mkdir Artalk && cd Artalk
vim docker-compose.yaml
```

编辑 docker-compose.yaml 文件：

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

执行以下命令，服务器运行在 `http://localhost:端口号`

```bash
docker-compose up -d
```

前端配置项 `server` 填入完整域名 + Docker 映射的外部端口号：

```js
new Artalk({ server: "http://your_domain:端口号" })
```

其他 Docker Compose 常用命令：

```bash
docker-compose restart  # 重启容器
docker-compose stop     # 暂停容器
docker-compose down     # 删除容器
docker-compose pull     # 更新镜像
docker-compose exec artalk bash # 进入容器
```

> 更多内容可参考：[“后端 · Docker”](/guide/backend/docker.md)


## 普通方式

以 Linux 部署为例：

1. 前往 [GitHub Release](https://github.com/ArtalkJS/ArtalkGo/releases) 下载程序压缩包
   > 可使用 curl / wget / rsync 等工具下载
2. 解压程序 `tar -zxvf artalk-go_版本号_系统_架构.tar.gz`
   > 修改目录名：
   > 
   > `mv artalk-go_版本号_系统_架构 Artalk`
3. 进入程序目录 `cd Artalk`
4. 编辑配置文件 `vim artalk-go.yml`
   > 参考：[“配置文件说明”](/guide/backend/config.html)
5. 运行程序 `./artalk-go server`
   > 可选部署流程：
   >
   > 前往：[“反向代理端口到 80 / 443 (Nginx, Apache)”](/guide/backend/reverse-proxy.md)
   >
   > 前往：["持久化运作 (tmux, systemd, supervisor)"](/guide/backend/daemon.md)
6. 前端配置

    ```js
    new Artalk({ server: "http://your_domain:端口号" })
    ```

#### 附表：文件名系统和架构 对照表

|文件名|操作系统|CPU 架构|
|:-|:-:|:-:|
|artalk-go_linux_amd64.tar.gz|Linux|x86_64|
|artalk-go_linux_arm64.tar.gz|Linux|ARM64|
|artalk-go_linux_arm7.tar.gz|Linux|ARMv7|
|artalk-go_windows_amd64.zip|Windows|x86_64|
|artalk-go_darwin_arm64.tar.gz|macOS|Apple Silicon|
|artalk-go_darwin_amd64.tar.gz|macOS|Intel Chip <sup>~~(什么狗屎)~~</sup>|

## 编译运行

参考：[“后端构建”](./build.md)
