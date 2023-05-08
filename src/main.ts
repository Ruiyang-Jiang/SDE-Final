// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// createApp(App).use(store).use(router).mount('#app')
import { createApp } from 'vue'

import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import VDrag from 'v-drag';


import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)


if (process.env.VUE_APP_CUSTOM_URL) {
  app.config.globalProperties.$customUrl = process.env.VUE_APP_CUSTOM_URL;
} else {
  app.config.globalProperties.$customUrl = '192.168.1.20:3000'; // fallback to default URL
}
app.use(store)
app.use(router)
app.mount('#app')
app.use(ElementPlus)
app.use(VDrag);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }