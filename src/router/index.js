import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: '登录',
      component: login
    }
    // {
    //   path: '/',
    //   name: '首页',
    //   component: home,
    //   children: [
    //     // 404
    //     { path: '/map', component: map, name: '地图' },
    //     // manage
    //     { path: '/manage', component: manage, name: '管理员管理', },
    //     { path: '/manage/detail', component: detail, name: '管理员详情' },
    //     // role
    //     { path: '/role', component: role, name: '权限管理' },
    //     { path: '/power', component: power, name: '角色管理' },
    //     { path: '/role/rolelimit/:id', component: roleLimit, name: '权限设置' },
    //     // banner
    //     { path: '/B_GetBannerList', component: B_GetBannerList, name: 'Banner管理' },
    //     // productList
    //     { path: '/P_GetProductList', component: P_GetProductList, name: '商品列表' },
    //     { path: '/P_GetProductList/productEdit/:id', component: productEdit, name: '商品编辑' },
    //     { path: '/P_GetProductList/productAdd', component: productAdd, name: '商品添加' },        

    //     // order
    //     { path: '/O_GetOrderList', component: O_GetOrderList, name: '订单列表' },
        
    //   ]
    // }
  ]
})
