# 🛫️ 轻装上阵

Artalk 由前端 ([@ArtalkJS/Artalk](https://github.com/ArtalkJS/Artalk)) 和后端 ([@ArtalkJS/ArtalkGo](https://github.com/ArtalkJS/ArtalkGo)) 两部分组成，如果你已获得公共的后端地址，可以直接跳过后端部分。后端部署也很容易，仅需几步简单的操作即可搞定。

## 后端部署

### Docker（建议）

@[code](../code/quick-start/docker-install.sh)

前往：[“Docker 部署细节”](./backend/docker.md)

### 普通方式

1. 前往 [GitHub Release](https://github.com/ArtalkJS/ArtalkGo/releases) 下载对应环境的构建
2. 解压 `tar -zxvf artalk-go.tar.gz`
3. 配置 `vim artalk-go.yml`
4. 运行 `./artalk-go serve`

前往：[“后端 · 配置”](./backend/config.md)

## 前端部署

:::: code-group

::: code-group-item CDN

@[code](../code/quick-start/cdn.html)

:::

::: code-group-item NPM

@[code](../code/quick-start/npm.js)

:::

::::

前往：[“前端 · 配置”](./frontend/config.md)

::: tip
以上，尝试以最简的形式说明部署流程

🌁 如果你想了解更多细节，请前往：
- [“后端 · 安装”](./backend/install.md)
- [“前端 · 安装”](./frontend/install.md)
:::
