import type { Component, App } from 'vue'
import './style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn' // 因element-plus默认是英文，我们指定一下默认中文
// 图标并进行全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import TSelect from './select'
import TButton from './button'

// 存储组件列表
const components: {
  [propName: string]: Component
} = {
  TSelect,
  TButton,
}
// 插件声明：声明所有插件
// 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
const installComponents: any = (app: App) => {
  [components].forEach((comp: any) => {
    app.component(comp.name as string, comp)
  })
  app.use(ElementPlus, {
    locale // 语言设置
  // size: Cookies.get('size') || 'medium' // 设置默认尺寸
  })
  
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

  for (const key in components) {
    app.component(key, components[key])
  }
}
// vue插件
// - install：每个插件都有一个 install 方法
// - 参数：是通过 Vue.createApp() 创建的 app 实例
const install: any = (app: any, router?: any) => {
  // !router && installRouter(app);
  installComponents(app)
}

// 按需引入
export {
  TSelect,
  TButton,
}
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
}
