// 安装依赖
npm install artalk


// 引入 Artalk
import Artalk from 'artalk'

new Artalk({
    el:        '#Comments',
    pageKey:   '<页面链接>',
    pageTitle: '<页面标题>',
    server:    '<后端地址>',
    site:      '<站点名称>',
})
