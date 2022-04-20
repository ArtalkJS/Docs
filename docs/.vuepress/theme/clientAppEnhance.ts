import { defineClientAppEnhance, usePageData } from '@vuepress/client'
import { nextTick } from 'vue'

import Artalk from './Artalk.vue'
import Artransfer from './Artransfer.vue'

const page = usePageData()

const initVersionTag = () => {
  // 版本号显示
  if (page.value.path !== '/') return

  const $mainTitle = document.querySelector<HTMLElement>('#main-title')
  if ($mainTitle) {
    let $releaseTag = $mainTitle.querySelector<HTMLElement>('.release-tag')
    if (!$releaseTag) {
      $releaseTag = document.createElement('div')
      $releaseTag.classList.add('release-tag')
      $releaseTag.innerText = 'v2.2.2'
      $mainTitle.append($releaseTag)
    }
  }
}

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('Artalk', Artalk)
  app.component('Artransfer', Artransfer)

    // let timer = null
    // router.afterEach((to, from) => {
    //   if (to && from && to.path === from.path) return

    //   clearTimeout(timer)
    //   nextTick(() => {
    //     timer = setTimeout(() => {
    //       // do something...
    //     }, 800)
    //   })
    // })
})


