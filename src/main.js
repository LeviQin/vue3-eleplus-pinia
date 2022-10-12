import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { message } from '@/utils/message'
import { createPinia } from 'pinia'
const pinia = createPinia()
import '@/styles/index.scss'

createApp(App).config.globalProperties.$message = message

createApp(App).use(ElementPlus).use(router).use(pinia).mount('#app')
