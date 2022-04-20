<template>
  <Layout>
    <template #page-bottom>
      <div class="page-meta">
        <!-- Artalk -->
        <Artalk />
      </div>
    </template>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue'

import { useRouter } from 'vue-router'
// @ts-ignore
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

export default defineComponent({
  components: {
    Layout,
  },
  mounted: () => {
  }
})
</script>
