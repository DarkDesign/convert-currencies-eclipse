import { createApp } from 'vue';
import App from './app/App.vue';
import router from './app/router';
import store from './app/store';

import './assets/reset.scss';
import './assets/global.scss';

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');
