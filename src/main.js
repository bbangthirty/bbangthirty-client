import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixins'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import './assets/css/main.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.mixin(mixin)
app.use(VueSweetalert2)
app.use(VueLoading)
app.mount('#app')
