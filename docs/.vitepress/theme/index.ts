import { h, onMounted, watch, nextTick } from 'vue'
import Theme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import './fonts/fira_code/fira_code.css'
import './styles/var.css'
import mediumZoom from 'medium-zoom'
import HomePreview from './components/HomePreview.vue'
import ZoomImg from './components/ZoomImg.vue'
import CustomerEvaluate from './components/CustomerEvaluate.vue'

import '../../public/css/index.css'
import { VPDemo } from '../vitepress'
// 基于element-plus二次封装基础组件
import TuiPlus from '../../../packages'


export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomePreview),
    })
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
    }
    onMounted(() => initZoom()),
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    )
  },
  enhanceApp({ app }) {
    // 全局注册基础组件
    app.use(TuiPlus)
    app.component('Demo', VPDemo)
    app.component('ZoomImg', ZoomImg)
    app.component('CustomerEvaluate', CustomerEvaluate)
  },
}
