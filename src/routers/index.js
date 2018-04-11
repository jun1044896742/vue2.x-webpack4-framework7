import VueRouter from 'vue-router'
import store from '../store'

let routes = [
  {
    name: '',
    path: '/',
    component: require('../views/home.vue').default,
  },
]

const modules = [];
for (let i in modules) {
  routes = routes.concat(modules[i]);
}

const basePath = '/'

const routerConfig = {
  mode: 'history',
  base: basePath,
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
}
const router = new VueRouter(routerConfig);
//路由统一预处理机制
router.beforeEach((to, from, next) => {
next();
  }
)

export default router;
