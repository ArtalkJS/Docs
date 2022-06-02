<template>
  <div>
    <div id="Comments"></div>
    <ChangeMirrorBanner />
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue'
import { usePageData } from '@vuepress/client'
import ChangeMirrorBanner from './ChangeMirrorBanner.vue'

const page = usePageData()

export default defineComponent({
  components: { ChangeMirrorBanner },
  mounted: () => {
    const conf = {
      el:        '#Comments',
      pageKey:   `https://artalk.js.org${page.value.path}`,
      pageTitle:  page.value.title,
      server:    'https://artalk.qwqaq.com',
      site:      'ArtalkDocs',
      nestMax:   2,
      emoticons: '/images/emoticons/default.json',
    }

    console.log(conf)
    const artalk = new (window as any).Artalk(conf);

    // dark_mode
    const darkMode = document.querySelector('html').classList.contains('dark')
    artalk.setDarkMode(darkMode)

    // lightGallery
    artalk.on('list-loaded', () => {
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

    // dark_mode 监听
    new MutationObserver((mList) => {
      mList.forEach((m) => {
        if (m.attributeName !== 'class') return

        // @ts-ignore
        const darkMode = m.target.classList.contains('dark')
        artalk.setDarkMode(darkMode)
      })
    }).observe(document.querySelector('html'), { attributes: true })
  }
})
</script>

<style>

</style>
