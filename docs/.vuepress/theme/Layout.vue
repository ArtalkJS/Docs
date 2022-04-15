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
// @ts-ignore
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
// @ts-ignore
import * as ArtalkCDN from '../../code/ArtalkCDN.json'

const page = usePageData()

const ARTALK_SRC = ArtalkCDN.JS
const COMMENT_CONTAINER = '#Comments'

let artalkInstance = null

const initArtalk = () => {
  const conf = {
    el:        COMMENT_CONTAINER,
    pageKey:   `https://artalk.js.org${page.value.path}`,
    pageTitle: page.value.title,
    server:    'https://artalk.qwqaq.com/api',
    site:      'ArtalkDocs',
    pagination: {
       readMore: true,
       autoLoad: true,
       pageSize: 15,
    }
  }

  console.log(conf)
  artalkInstance = new (window as any).Artalk(conf);

  // dark_mode
  const darkMode = document.querySelector('html').classList.contains('dark')
  artalkInstance.setDarkMode(darkMode)
  setArtransferIframeDarkMode(darkMode)

  // lightGallery
  artalkInstance.on('comments-loaded', () => {
    document.querySelectorAll('.atk-comment .atk-content').forEach(($content) => {
      const $imgs = $content.querySelectorAll<HTMLImageElement>('img:not([atk-emoticon]):not([atk-lightbox])');
      $imgs.forEach(($img) => {
        $img.setAttribute('atk-lightbox', '')
        const $link = document.createElement('a')
        $link.setAttribute('class', 'atk-img-link')
        $link.setAttribute('href', $img.src)
        $link.setAttribute('data-src', $img.src)
        $link.append($img.cloneNode())
        $img.replaceWith($link)
      })
      // @ts-ignore
      if ($imgs.length) lightGallery($content, { selector: '.atk-img-link' })
    })
  })
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

    let timer = null
    router.afterEach((to, from) => {
      if (to && from && to.path === from.path) return

      clearTimeout(timer)
      nextTick(() => {
        timer = setTimeout(() => { initArtalk() }, 1000)
      })
    })

    // dark_mode
    new MutationObserver((mList) => {
      mList.forEach((m) => {
        if (m.attributeName !== 'class') return

        // @ts-ignore
        const darkMode = m.target.classList.contains('dark')
        artalkInstance.setDarkMode(darkMode)
        setArtransferIframeDarkMode(darkMode)
      })
    }).observe(document.querySelector('html'), { attributes: true })
  },
})

function setArtransferIframeDarkMode(value: boolean) {
  const iframe = document.querySelector<HTMLIFrameElement>('#artransferIframe')
  if (!iframe) return
  if (value) {
    iframe.src = iframe.src + '&dark=1'
  } else {
    iframe.src = iframe.src.replace(/&dark=1$/, '')
  }
}
</script>
