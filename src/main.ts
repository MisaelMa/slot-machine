import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import App from './App.vue';
import './registerServiceWorker';
import vuetify from './plugins/vuetify'; // path to vuetify export
import router from './router';
import store from './store';

Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
