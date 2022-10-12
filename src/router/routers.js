import Layout from '../layout/VueLayout.vue'

export default [
    {
        path: '/',
        name: 'Home',
        component: Layout,
        redirect: {
            path: '/dashboard',
        },
        meta: {
            title: '首页',
        },
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                meta: {
                    title: '首页',
                },
                component: () => import('../views/dashboard/VueDashboard.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/LoginPage.vue'),
        meta: {
            title: '登录',
        },
    },
]