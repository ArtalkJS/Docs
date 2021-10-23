# 暂停并删除正在运行的容器，然后从 DockerHub 拉取最新镜像
docker stop artalk-go \
  && docker rm artalk-go \
  && docker pull artalk/artalk-go