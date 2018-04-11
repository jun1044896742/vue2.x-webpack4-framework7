import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {interceptor} from './common/utils'
import filters from './common/filters'
import './assets/styles/bosch-extra-style.css'
import store from './store'
import router from './routers'
import Framework7 from 'framework7/dist/framework7.esm.bundle.js'
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js'
import 'framework7/dist/css/framework7.css'

//开启debug模式
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Framework7Vue, Framework7)
//加入过滤器
for(var i in filters){Vue.filter(filters[i].name,filters[i].func)}
// 初始化router

// 初始化HTTP全局配置
Vue.http.interceptors.push(interceptor);
new Vue({
    // store,
    router,
    render:function(h){return h(App)}
}).$mount('#app');
export {router}

