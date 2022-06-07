# Docker

Artalk 提供后端程序的 Docker 镜像，以便加速部署流程，提供一个良好的部署体验。

[Docker Hub](https://hub.docker.com/r/artalk/artalk-go) 镜像版本随代码仓库的 [Releases](https://github.com/ArtalkJS/ArtalkGo/releases) 保持同步。

## 镜像拉取

`docker pull artalk/artalk-go`

## 容器创建

:::tip

推荐使用 Docker Compose：[“后端部署”](/guide/backend/install) 页面已详细讲解。

:::

常规的 Docker 容器创建可参考：

```bash
# 为 ArtalkGo 创建一个目录
mkdir ArtalkGo
cd ArtalkGo

# 拉取 docker 镜像
docker pull artalk/artalk-go

# 创建 data 目录用于存放数据
mkdir data

# 生成配置文件
docker run -it -v $(pwd)/data:/data --rm artalk/artalk-go gen config data/artalk-go.yml

# 编辑配置文件
vim data/artalk-go.yml

# 运行 docker 容器
docker run -d \
  --name artalk-go \
  -p 0.0.0.0:8080:23366 \
  -v $(pwd)/data:/data \
  artalk/artalk-go
```

::: tip 备忘说明

- 前端配置地址 `http://your_domain:8080`

    ```js
    new Artalk({ server: "http://your_domain:8080" })
    ```

- 配置文件路径 `./conf.yml`
- 数据文件目录 `./data/`
:::

## 重启

修改配置文件后，需要重启才能生效。

```bash
# Docker Compose
docker-compose restart

# Docker
docker restart artalk-go
```

## 停止

```bash
# Docker Compose
docker-compose stop

# Docker
docker stop artalk-go
```

## 升级

删除现有容器，拉取最新镜像，然后重新创建容器即可。

<CodeGroup>
  <CodeGroupItem title="Docker Compose" active>

```bash
docker-compose down
docker-compose pull
docker-compose up -d
```

  </CodeGroupItem>

  <CodeGroupItem title="Docker">

```bash
docker stop artalk-go
docker rm artalk-go
docker pull artalk/artalk-go
```

  </CodeGroupItem>

</CodeGroup>

::: tip
升级可能会有配置文件等变动，请注意查看版本 Changelog，通常是在 [GitHub Release](https://github.com/ArtalkJS/ArtalkGo/releases) 页面
:::

## 获取历史版本

镜像会随代码仓库 tags 自动构建发布，您可拉取不同版本号的镜像，例如：

`docker pull artalk/artalk-go@v版本号`

## 进入容器

```bash
# Docker Compose
docker-compose exec artalk bash

# Docker
docker exec -it artalk bash
```

## 多平台兼容性

Docker 镜像暂仅提供 amd_64 构建，若需要在 ARM 环境下运行，请下载 [二进制编译构建](/guide/backend/install.html)
