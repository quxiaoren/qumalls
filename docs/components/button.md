# Button 按钮
常用的操作按钮。
## 基础用法

:::demo `使用 type、plain、round 和 circle 来定义按钮的样式`。
TButton/index
:::

## 禁用状态
你可以使用 disabled 属性来定义按钮是否被禁用。
使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。
:::demo
TButton/disable
:::

:::warning 注意
生产环境一般都是调用真实接口，如果需要使用 mock 也只适用于一些简单的示例网站及预览网站。
:::

``` js
import TuiPlus from '@qumalls/qu-admin-plus'
import '@qumalls/qu-admin-plus/lib/style.css'
const app = createApp(App)
app.use(TuiPlus)
app.mount('#app')
```
