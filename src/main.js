import Vue from 'vue';
import { createApp } from 'vue';
import App from './App.vue'
import './styles/global-style.css'
import router from './router'
import store from './store'
import { domain, clientId } from "./auth_config.json";

import { Auth0Plugin } from "./auth/index";

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
