# 为 ArtalkGo 创建一个目录
$ mkdir ArtalkGo
$ cd ArtalkGo

# 下载配置文件模版
$ curl -L https://raw.githubusercontent.com/ArtalkJS/ArtalkGo/main/artalk-go.example.yml > conf.yml

# 编译配置文件
$ vim conf.yml

# 拉取 docker 镜像
$ docker pull artalk/artalk-go

# 新建 docker 容器
$ docker run -d \
   --name artalk-go \
   -p 0.0.0.0:8080:23366 \
   -v $(pwd)/conf.yml:/conf.yml \
   -v $(pwd)/data:/data \
   artalk/artalk-go