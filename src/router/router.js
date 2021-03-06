import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const addoffer = r =>require.ensure([], () => r(require('../page/searchin/addoffer')), 'addoffer')
const newoffer = r =>require.ensure([], () => r(require('../page/searchin/newoffer')), 'newoffer')
const lastoffer = r =>require.ensure([], () => r(require('../page/searchin/lastoffer')), 'lastoffer')
const suboffer = r =>require.ensure([], () => r(require('../page/searchin/suboffer')), 'suboffer')
const orderoffer = r =>require.ensure([], () => r(require('../page/searchin/orderoffer')), 'orderoffer')
const orderlist = r =>require.ensure([], () => r(require('../page/ordermag/orderlist')), 'orderlist')
const overorder = r =>require.ensure([], () => r(require('../page/ordermag/overorder')), 'overorder')
const sureorder = r =>require.ensure([], () => r(require('../page/ordermag/sureorder')), 'sureorder')
const userlist = r =>require.ensure([], () => r(require('../page/usermag/userlist')), 'userlist')
const adduser = r =>require.ensure([], () => r(require('../page/usermag/adduser')), 'adduser')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/login'
        },
        {
            path: '/home',
            component: home,
            children:[
                {path: '',redirect: '/home/addoffer'},
                {path:"/home/addoffer",component:addoffer,name:"addoffer"},
                {path:"/home/newoffer",component:newoffer,name:"newoffer"},
                {path:"/home/lastoffer",component:lastoffer,name:"lastoffer"},
                {path:"/home/suboffer",component:suboffer,name:"suboffer"},
                {path:"/home/orderoffer",component:orderoffer,name:"orderoffer"},
                {path:"/home/orderlist",component:orderlist,name:"orderlist"},
                {path:"/home/overorder",component:overorder,name:"overorder"},
                {path:"/home/sureorder",component:sureorder,name:"sureorder"},
                {path:"/home/userlist",component:userlist,name:"userlist"},
                {path:"/home/adduser",component:adduser,name:"adduser"},
            ]
        },
        //登陆注册页
        {
            path: '/login',
            component: login
        },
    ]
}]
