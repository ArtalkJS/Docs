# 🛫️ 轻装上阵

以下以最简方式介绍 Artalk 完整部署流程。

::: tip

 - 如果你已获取公开 Artalk 后端地址，可以跳过 [🤣 后端部署](#🤣-后端部署) 直接进入 [🎯 前端使用](#🎯-前端使用) 部分。
 - 如果你对此页面的部署流程感到疑惑，可以前往 [“部署 · 前端”](/guide/frontend/install.md)、[“部署 · 后端”](/guide/backend/install.md) 了解详细的部署流程。

:::

## 🤣 后端部署

[@ArtalkJS/ArtalkGo](https://github.com/ArtalkJS/ArtalkGo/) 是 Artalk 评论系统的后端部分。

你可以从 **Docker 方式**、**普通方式** 中任选一种进行部署。

Docker 方式部署需要系统中已经安装 Docker，请参考《[Get Docker | Docker Documentation](https://docs.docker.com/get-docker/)》提前准备。普通方式部署需要从 [此处](https://github.com/ArtalkJS/ArtalkGo/releases) 提前下载对应环境的 ArtalkGo 安装包。

:::: code-group

::: code-group-item Docker 方式

@[code](../code/quick-start/docker-install.sh)

:::

::: code-group-item 普通方式

@[code](../code/quick-start/normal-install.sh)

:::

::::

::: tip

前往 [“配置 · 后端”](/guide/backend/config.md) 了解关于 ArtalkGo 后端配置文件 `config.yml` 的更多细节。

:::

## 🎯 前端使用

[@ArtalkJS/Artalk](https://github.com/ArtalkJS/Artalk/) 是 Artalk 评论系统的前端部分。

你可以从 **CDN** / **NPM** 引入示例中任选一种开始使用。

鉴于前端项目的开发环境多样，引入 Artalk 评论系统的具体实现方式可能稍有差别。通过 NPM 引入 Artalk 评论系统前端时，注意事先执行 `npm install artalk` 或 `yarn add artalk` 安装依赖。

:::: code-group

::: code-group-item CDN

@[code](../code/quick-start/cdn.html)

:::

::: code-group-item NPM

@[code](../code/quick-start/npm.js)

:::

::::

::: tip

前往 [“配置 · 前端”](/guide/frontend/config.md) 了解关于 Artalk 前端配置的更多细节。

:::
