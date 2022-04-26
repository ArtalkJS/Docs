<template>
  <div v-show="false" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

async function isChinaIP() {
  const text = await fetch("https://artalk-cn.qwqaq.com/get-my-ip/?t="+(+new Date())).then(msg => {
    return msg.text()
  })
  return text.includes("中国")
}

let bannerClosed = false

async function check() {
  if (bannerClosed === true) return
  if (!['artalk.js.org', 'localhost'].includes(location.hostname)) return

  try {
    if (!await isChinaIP()) return
  } catch { }

  const $app = document.querySelector<HTMLElement>('#app')!
  const $navbar = $app.querySelector<HTMLElement>('.navbar')!
  if (!!$app.querySelector('.change-mirror')) return

  const $banner = document.createElement('div')
  $banner.className = 'app-top-banner change-mirror'
  $banner.innerHTML = `如果你觉得访问速度不佳，可以 <span>点这里</span> 切换到国内镜像站。<u>关闭</u>`
  const $openBtn = $banner.querySelector<HTMLElement>('span')
  $openBtn.onclick = () => {
    location.href = `https://artalk-docs.qwqaq.com${location.pathname}`
  }
  const $closeBtn = $banner.querySelector<HTMLElement>('u')
  const close = () => {
    $navbar.style.marginTop = ''
    $app.style.marginTop = ''
    $banner.remove();
    bannerClosed = true
  }
  $closeBtn.onclick = () => { close() }
  $navbar.before($banner)
  $navbar.style.marginTop = '30px'
  $app.style.marginTop = '30px'
}

export default defineComponent({
  mounted: () => {
    check()
  },
})
</script>

<style>
</style>
