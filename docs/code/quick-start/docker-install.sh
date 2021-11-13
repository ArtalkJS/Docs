$ docker run -d \
   --name artalk-go \
   -p <程序监听端口>:23366 \
   -v <配置文件路径>:/conf.yml \
   -v <数据目录路径>:/data \
   artalk/artalk-go
