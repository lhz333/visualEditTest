import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/reset.css";
import {
  Button,
  Select,
  Container,
  Header,
  Aside,
  Main,
  Footer
} from "element-ui";

Vue.prototype.$ELEMENT = { size: "small" };
Vue.use(Button);
Vue.use(Select);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
