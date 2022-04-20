---
next: '/guide/backend/config.md'
---

# 后端部署

## 使用 Docker

运行 Artalk 后端服务器最简便的方法是使用 Docker 容器，在开始之前，请确保已安装 [Docker 引擎](https://docs.docker.com/engine/install/)。

<CodeGroup>
  <CodeGroupItem title="Docker" active>

```bash
docker run -d \
    --name artalk-go \
    -p 端口号:23366 \
    -v $(pwd)/conf.yml:/conf.yml \
    -v $(pwd)/data:/data \
    artalk/artalk-go
```

  </CodeGroupItem>

  <CodeGroupItem title="Docker Compose">

```yaml
version: "3.5"
services:
  artalk:
    container_name: artalk
    image: artalk/artalk-go
    ports:
      - 端口号:23366
    volumes:
      - ./conf.yml:/conf.yml
      - ./data:/data
```

  </CodeGroupItem>

</CodeGroup>

### Docker Compose (推荐)

以下 Linux 部署为例，详细的介绍部署流程，首先你需要安装 [Docker Compose](https://docs.docker.com/compose/install/)。

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
      - 8080:23366
    volumes:
      - ./conf.yml:/conf.yml
      - ./data:/data
```

下载 Artalk 配置文件，并按需配置：

```bash
curl -L https://cdn.jsdelivr.net/gh/ArtalkJS/ArtalkGo/artalk-go.example.yml > conf.yml
vim conf.yml
```

执行以下命令，启动后会运行在 `http://localhost:8080`

```bash
docker-compose up -d
```

前端配置项 `server` 填入完整域名 + Docker 映射的外部端口号：

```js
new Artalk({ server: "http://your_domain:8080" })
```

其他 Docker Compose 常用命令：

```bash
docker-compose restart  # 重启
docker-compose down     # 停止
docker-compose pull     # 升级
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
5. 运行程序 `./artalk-go serve`
   > 可选部署流程：
   >
   > 前往：[“反向代理端口到 80 / 443 (Nginx, Apache)”](/guide/backend/reverse-proxy.md)
   >
   > 前往：["持久化运作 (tmux, systemd)"](/guide/backend/daemon.md)
6. 前端配置

    ```js
    new Artalk({ server: "http://your_domain:端口号" })
    ```

## 编译运行

```bash
# 拉取代码
git clone git@github.com:ArtalkJS/ArtalkGo.git ArtalkGo

# 编译程序
cd ArtalkGo && make all

# 配置文件
cp artalk-go.example.yml artalk-go.yml
vim artalk-go.yml

# 运行程序
./bin/artalk-go help
./bin/artalk-go -c artalk-go.yml server
```
