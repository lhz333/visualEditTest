import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/reset.css";
import {
  Button,
  Select,
  Container,
  Aside,
  Main,
  Footer,
  Tabs,
  TabPane,
  Image,
  Carousel,
  CarouselItem,
} from "element-ui";

Vue.prototype.$ELEMENT = { size: "small" };
Vue.use(Button);
Vue.use(Select);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Image);
Vue.use(Carousel);
Vue.use(CarouselItem);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
