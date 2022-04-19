import 'artalk/dist/Artalk.css'
import Artalk from 'artalk'

const artalk = new Artalk({
  el:        '<绑定元素的 Selector>',
  pageKey:   '/post/1',                // 固定链接 (留空自动获取)
  pageTitle: '关于引入 Artalk 这档子事', // 页面标题
  server:    'http://localhost:8080',  // 后端地址
  site:      'Artalk 的博客',           // 你的站点名
})
