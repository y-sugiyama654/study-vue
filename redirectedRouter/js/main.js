const B = {
    template: '<div><h2>This is B.</h2></div>'
}

const router = new VueRouter({
    routes: [
        {
            path: '/a',
            redirect: { name: 'page-b' }
        },
        {
            name: 'page-b',
            path: '/b',
            component: B
        }
    ]
})

const app = new Vue({
    router
}).$mount('#app')