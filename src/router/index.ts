// import HomeVue from '@/components/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TitleView from '@/views/title/TitleView.vue'
import ContentView from '@/views/content/ContentView.vue'
import FooterView from '@/views/footer/FooterView.vue'
import AdView from '@/views/ad/AdView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        Content: ContentView,
        Ad: AdView,
        Header: TitleView,
        Footer: FooterView
      }
    },
    {
      path: '/card',
      name: 'cardModule',
      components: {
        default: () => import('@/views/card/CardModuleView.vue'),
        Header: () => import('@/views/subTitle/SubTitleView.vue'),
        Footer: () => import('@/views/footer/FooterCardView.vue')
      },
      children: [
        {
          path: '/idCard',
          component: () => import('@/views/card/IdCardView.vue')
        },
        {
          path: '/socialCard',
          component: () => import('@/views/card/SocialCardView.vue')
        },
        {
          path: '/healthyCard',
          component: () => import('@/views/card/HealthyCardView.vue')
        },
        {
          path: '/nationalCard',
          component: () => import('@/views/card/NationalCardView.vue')
        }
      ]
    },
    {
      path: '/go_payment',
      name: 'payment',
      components: {
        default: () => import('@/views/payment/PaymentView.vue'),
        Header: () => import('@/views/subTitle/SubTitleView.vue'),
        Footer: () => import('@/views/footer/FooterView.vue')
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('跳转的路由是：', from, to);
  let isAuthenticated = false;
  // 判断是否是首页
  if('/' === to.fullPath) {
    next()
  } else if(isAuthenticated && '/card' !== to.fullPath) {
    next()
  } else if('/card' !== to.fullPath){
    next('/card')
  } else {
    next()
  }
})

export default router
