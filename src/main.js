import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixins'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/css/main.css'

library.add(faUserSecret)
library.add(faArrowLeft)

const app = createApp(App)
// fontawsome을 vue 컴포넌트로 사용할 준비 완료
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(router)
app.mixin(mixin)
app.use(VueSweetalert2)
app.use(VueLoading)
app.mount('#app')
