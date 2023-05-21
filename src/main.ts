import './assets/reset.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入的element全局样式，否则消息提示框都不生效
import 'element-plus/theme-chalk/src/index.scss'

const app = createApp(App)

//注册icons
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(createPinia())
app.use(router)

app.mount('#app')
