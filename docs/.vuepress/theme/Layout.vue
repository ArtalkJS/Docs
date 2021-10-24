<template>
  <Layout>
    <template #page-bottom>
      <div class="page-meta">
        <!-- Artalk -->
        <div id="Comments"></div>
      </div>
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue'
import { usePageData, usePageFrontmatter } from '@vuepress/client'
import { useRouter } from 'vue-router'
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

const page = usePageData()

const ARTALK_SRC = 'https://cdn.jsdelivr.net/npm/artalk@2/dist/Artalk.js'
const COMMENT_CONTAINER = '#Comments'

let artalkInstance = null

let timer = null
const _initArtalk = () => {
  const parentDOM = document.querySelector(COMMENT_CONTAINER)
  if (!parentDOM) return

  clearInterval(timer)

  const conf = {
    el:        COMMENT_CONTAINER,
    pageKey:   `https://artalk.js.org${page.value.path}`,
    pageTitle: page.value.title,
    server:    'https://artalk.qwqaq.com/api',
    site:      'ArtalkDocs',
  }

  console.log(conf)
  artalkInstance = new window.Artalk(conf);

  // dark_mode
  const darkMode = document.querySelector('html').classList.contains('dark')
  artalkInstance.setDarkMode(darkMode)
}

const initArtalk = () => {
  clearInterval(timer)
  
  const parentDOM = document.querySelector(COMMENT_CONTAINER)
  if (!parentDOM) {
    timer = setInterval(() => { _initArtalk() }, 500)
    return 
  }
  
  _initArtalk()
}

export default defineComponent({
  components: {
    Layout,
  },
  mounted: () => {
    // require js resource
    const script = document.createElement('script')
    script.onload = function () {
      initArtalk()
    }
    script.async = true
    script.defer = true
    script.src = ARTALK_SRC
    document.getElementsByTagName("head")[0].appendChild(script)

    // listen router changes
    const router = useRouter()
    router.beforeEach((to, from) => {
      if (to && from && to.path === from.path) return

      const dom = document.querySelector(COMMENT_CONTAINER)
      if (dom) dom.remove()
    })

    router.afterEach((to, from) => {
      if (to && from && to.path === from.path) return
      
      nextTick(() => { initArtalk() })
    })

    // dark_mode
    new MutationObserver((mList) => {
      mList.forEach((m) => {
        if (m.attributeName !== 'class') return

        const darkMode = m.target.classList.contains('dark')
        artalkInstance.setDarkMode(darkMode)
      })
    }).observe(document.querySelector('html'), { attributes: true })
  },
})
</script>