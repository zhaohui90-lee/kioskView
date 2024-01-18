// import HomeVue from '@/components/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import TitleView from '@/views/title/TitleView.vue'
import ContentView from '@/views/content/ContentView.vue'
import FooterView from '@/views/footer/FooterView.vue'
import AdView from '@/views/ad/AdView.vue'
import FooterCardView from '@/views/footer/FooterCardView.vue'
import SubTitleView from '@/views/subTitle/SubTitleView.vue'
import CardModuleView from '@/views/card/CardModuleView.vue'
import IdCardView from '@/views/card/IdCardView.vue'
import SocialCardView from '@/views/card/SocialCardView.vue'
import HealthyCardView from '@/views/card/HealthyCardView.vue'
import NationalCardView from '@/views/card/NationalCardView.vue'
import PaymentView from '@/views/payment/PaymentView.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        Content: ContentView,
        Ad: AdView,
        Header: TitleView,
        Footer: FooterView,
      },
    },
    {
      path: '/card',
      name: 'cardModule',
      components: {
        default: () => CardModuleView,
        Header: () => SubTitleView,
        Footer: FooterCardView,
      },
      children: [
        {
          path: '/idCard',
          component: () => IdCardView,
        },
        {
          path: '/socialCard',
          component: () => SocialCardView,
        },
        {
          path: '/healthyCard',
          component: () => HealthyCardView,
        },
        {
          path: '/nationalCard',
          component: () => NationalCardView,
        },
      ],
    },
    {
      path: '/go_payment',
      name: 'payment',
      components: {
        default: () => PaymentView,
        Header: () => SubTitleView,
        Footer: () => FooterView,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  console.log('跳转的路由是：', from, to)
  let isAuthenticated = false
  // 判断是否是首页
  if ('/' === to.fullPath) {
    next()
  } else if (isAuthenticated && '/card' !== to.fullPath) {
    next()
  } else if ('/card' !== to.fullPath) {
    next('/card')
  } else {
    next()
  }
})

export default router
