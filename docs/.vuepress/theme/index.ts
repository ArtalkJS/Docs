import { path } from '@vuepress/utils'

export default ({
  name: 'vuepress-theme-local',
  extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, 'Layout.vue'),
  },
})
