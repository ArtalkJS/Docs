import { defineClientAppEnhance, usePageData } from '@vuepress/client'
import { nextTick } from 'vue'

import Artalk from './Artalk.vue'
import Artransfer from './Artransfer.vue'
import LatestVersion from './LatestVersion.vue'

const page = usePageData()

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('Artalk', Artalk)
  app.component('Artransfer', Artransfer)
  app.component('LatestVersion', LatestVersion)

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


