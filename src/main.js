import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

createApp(App).use(router).use(VueToast).use(store).mount('#app')
