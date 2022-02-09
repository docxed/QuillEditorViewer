import Vue from 'vue'
import App from './App.vue'
import QuillEditorViewer from './index'
import './styles/index.css'

Vue.use(QuillEditorViewer)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
