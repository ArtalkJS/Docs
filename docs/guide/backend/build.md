# 后端构建

## 构建二进制文件

```sh
# 拉取代码
$ git clone https://github.com/ArtalkJS/ArtalkGo.git

# 执行编译
$ make all
```

编译二进制文件将会输出到 `bin` 目录中

## Docker 镜像制作

```sh
# 制作镜像
$ make docker-docker

# 发布镜像
$ make docker-push
```

## DevOps

后端构建目前已交给 [GitHub Actions](https://github.com/ArtalkJS/ArtalkGo/actions) 自动完成
