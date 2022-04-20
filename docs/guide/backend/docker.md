# Docker

Artalk 提供后端程序的 Docker 镜像，以便加速部署流程，提供一个良好的部署体验。

Docker 镜像版本随 [代码仓库](https://github.com/ArtalkJS/ArtalkGo/releases) 发布保持同步。

前往：[Docker Hub](https://hub.docker.com/r/artalk/artalk-go)

## 镜像拉取

`docker pull artalk/artalk-go`

## 容器创建

@[code](../../code/quick-start/docker.sh)

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
docker restart artalk-go
```

## 停止

```bash
docker stop artalk-go
```

## 升级

@[code](../../code/docker/update.sh)

之后，重新执行上面的 [容器创建](#容器创建) 步骤即可。

::: tip
升级可能会有配置文件的变动，请注意查看版本 Changelog，通常是在 [GitHub Release](https://github.com/ArtalkJS/ArtalkGo/releases) 页面
:::


## 获取历史版本

镜像会随代码仓库 tags 自动构建发布，您可拉取不同版本号的镜像，例如：

`docker pull artalk/artalk-go@v版本号`

## 多平台兼容性

Docker 镜像暂仅提供 amd_64 构建，若需要在 ARM 环境下运行，请下载 [二进制编译构建](/guide/backend/install.html)
