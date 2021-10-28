# 🛫️ 轻装上阵 · 部署

## 后端部署

### Docker（建议）

`docker pull artalk/artalk-go`

前往：[“Docker 部署细节”](/guide/backend/docker.md)

### 普通方式

1. 前往 [GitHub Release](https://github.com/ArtalkJS/ArtalkGo/releases) 下载对应环境的构建
2. 解压 `tar -zxvf artalk-go.tar.gz`
3. 配置 `vim artalk-go.yml`
4. 运行 `./artalk-go serve`

### 配置文件

前往：[“后端 · 配置文件”](./backend/config.md)

## 前端使用

<CodeGroup>
  <CodeGroupItem title="CDN" active>

@[code](../code/quick-start/cdn.html)

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

@[code](../code/quick-start/yarn.ts)

  </CodeGroupItem>

  <CodeGroupItem title="NPM">
  
@[code](../code/quick-start/npm.ts)

  </CodeGroupItem>
</CodeGroup>

::: tip
以上，尝试以最简的形式说明部署流程

🌁 若您对部署流程还比较云里雾里，请前往：
- [“后端 · 安装”](./backend/install.md)
- [“前端 · 安装”](./frontend/install.md)
:::
