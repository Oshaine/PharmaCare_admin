import Vue from 'vue';
import Vuetify from '../plugins/vuetify';

import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
//bootstrap-vue
import BootstrapVue from 'bootstrap-vue';
//vue-flash-messages
import FlashMessage from '@smartweb/vue-flash-message';
// import Vuetify from 'vuetify';
Vue.use(BootstrapVue);
Vue.use(FlashMessage);
Vue.component('pagination', require('laravel-vue-pagination'));

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


new Vue({
    vuetify: Vuetify,
    el: '#app',
    router,
    store,
    render: h => h(App)
});



