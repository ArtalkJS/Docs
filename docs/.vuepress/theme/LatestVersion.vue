<template>
  <div v-show="false" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Artalk as Version } from '../../code/ArtalkVersion.json'

export default defineComponent({
  mounted: () => {
    const $mainTitle = document.querySelector<HTMLElement>('#main-title')
    if (!$mainTitle) return

    let $releaseTag = $mainTitle.querySelector<HTMLElement>('.release-tag')
    if (!$releaseTag) {
      $releaseTag = document.createElement('div')
      $releaseTag.classList.add('release-tag')
      $releaseTag.innerText = `v${Version.replace(/^v/, '')}`
      $mainTitle.append($releaseTag)
    }
  }
})
</script>

<style>
</style>
