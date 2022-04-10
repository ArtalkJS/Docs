# 🥽 安装 · 后端

## Docker 方式安装 (推荐)

前往：[“Docker 部署细节”](/guide/backend/docker.md)

## 普通方式

**以 Linux 主机部署为例：**

1. 前往 [GitHub Release](https://github.com/ArtalkJS/ArtalkGo/releases) 下载已编译二进制文件
   > 可使用 curl / wget / rsync 等工具下载
2. 解压程序 `tar -zxvf artalk-go_版本号_系统_架构.tar.gz`
   > 修改文件夹名称：
   > 
   > `mv artalk-go_版本号_系统_架构 artalk-go`
3. 进入程序目录 `cd artalk-go`
4. 编辑配置文件 `vim artalk-go.yml`
   > 前往：[“配置文件 说明”](/guide/backend/config.html)
5. 运行程序 `./artalk-go serve`
   > 附加操作
   >
   > 前往：[“反代设定的端口到 80 并套上 CDN (Nginx, Apache)”](/guide/backend/reverse-proxy.md)
   >
   > 前往：["持久化运作 artalk-go 程序 (tmux, sysctl)"](/guide/backend/daemon.md)
6. 前端配置

    ```js
    new Artalk({ server: "http://your_domain:端口号/api" })
    ```
   > 前往：[“前端配置 说明”](/guide/frontend/config.html)

::: tip
注意前端访问地址为：“http://your_domain:端口号/api” 记得带上路径 “/api”
:::

## 编译运行

```bash
# 拉取代码
git clone https://github.com/ArtalkJS/ArtalkGo.git

# 编译程序
make all

# 运行程序
cd bin && ./artalk-go serve
```

::: tip
前往：[“前端 · 安装”](/guide/frontend/install.md)
:::
