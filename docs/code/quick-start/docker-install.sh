docker run -d \
  --name artalk-go \
  -p <ArtalkGo 服务端口>:23366 \
  -v <ArtalkGo config.yml 配置文件路径>:/config.yml \
  -v <ArtalkGo data 数据文件夹路径>:/data \
  artalk/artalk-go
