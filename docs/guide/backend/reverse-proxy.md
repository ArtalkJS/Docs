# 反向代理端口

::: warning
目前文档仍在陆续完善中
:::

## Nginx

假定你想绑定的域名是：`your_domain.xxx`

进入 Nginx 配置目录：`cd /usr/local/nginx/conf/vhost/`

创建新 vhost 配置：`vim your_domain.xxx.conf`

```nginx
server
{
  listen 80;
  server_name your_domain.xxx;
  location /api/ {
    proxy_redirect off;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_pass http://localhost:23366/api/;
  }
}
```

重载 Nginx：`service nginx reload`

前端配置：`new Artalk({ server: "http://your_domain.xxx/api/" })`

（您还可以套一层 CDN，加上 SSL）

::: tip
注意配置文件权限，以及反代目标 URL 可访问性

尤其是运行在 Docker 里的 artalk-go，注意检查端口和IP是能够被 Nginx 成功访问的
:::

## Apache

打开反代模块 `mod_proxy.c`

```apache
<VirtualHost *:80>
    ServerName your_domain.xxx
    ServerAlias

    RewriteEngine On
    RewriteCond %{QUERY_STRING} transport=polling         [NC]
    RewriteRule /(.*)           http://localhost:23366/$1 [P]

    <IfModule mod_proxy.c>
        ProxyRequests Off
        SSLProxyEngine on
        ProxyPass /api/ http://localhost:23366/api/
        ProxyPassReverse /api/ http://localhost:23366/api/
    </IfModule>
</VirtualHost>
```