import Vue from 'vue'
import App from './App.vue'
import './styles/imports.styl'
import router from './router';
import store from './store'//引入store
// 引入 mint-ui 插件
import Mint from 'mint-ui';
// 注册 mint-ui 插件
Vue.use(Mint);
// 按需引入部分组件
import { Header  } from 'mint-ui';
Vue.component(Header.name, Header);

// 引入有赞（vant）需要用到的样式组件
import { Button } from 'vant';
// 引入 有赞 （vant） css 库
import 'vant/lib/index.css';
// 在vue实例中使用引入的样式组件
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store,//使用store
}).$mount('#app');
