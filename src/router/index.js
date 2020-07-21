import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '/hoc',
            name: 'hoc',
            component: () => import('@/views/hoc-test-index.vue')
        },
        {
            path: '/prop',
            name: 'prop',
            component: () => import('@/views/prop-test-index.vue')
        },
        {
            path: '/hooks',
            name: 'hooks',
            component: () => import('@/views/hooks-test-index.vue')
        }
    ]
})
export default router