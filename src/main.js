//  入口文件
import Vue from 'vue'
// 
import App from './App.vue'
//  导入路由的包
import VueRouter from 'vue-router'
//  安装路由
Vue.use(VueRouter)
import MintUi from 'mint-ui'
Vue.use(MintUi)
//  导入 vue-resource
import VueResource from 'vue-resource'
//  安装 vue-resource
Vue.use(VueResource)
//  导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import 'mint-ui/lib/style.css'
//  导入扩展图标样式
import './lib/mui/css/icons-extra.css'
//  引入自己的router 路由模块
import router from './router'
var vm = new Vue({
  el: '#app',
  render: h => h(App),
  router // 挂载到实例对象
})