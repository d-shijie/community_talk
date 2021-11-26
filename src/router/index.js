import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const Login = () => import('../components/Login.vue')
const Home = () => import('../components/Home.vue')
const Message = () => import('../components/Message.vue')
const Profile = () => import('../components/Profile.vue')
const Publish = () => import('../components/Publish.vue')
const Event = () => import('../components/Event.vue')
const UserDetail = () => import('../components/UserDetail.vue')
const routes = [
    {
        path: "",
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/message',
        component: Message
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/publish',
        component: Publish
    },
    {
        path: '/event',
        component: Event
    },
    {
        path: '/userDetail/:id',
        component: UserDetail
    }
]
const router = new VueRouter({
    routes
})
export default router