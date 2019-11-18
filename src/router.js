import Vue from 'vue'

import Router from 'vue-router'

import pages from '@/pages' // 页面文件目录


Vue.use(Router);


let routes = [];

Object.keys(pages).forEach(item=>{
    routes.push({

        path: `/${pages[item].name}`,

        name: pages[item].name,

        component: pages[item]

    })

});


export default new Router({

    routes: [
        ...routes,

        { path: '/', redirect: '/homePage' }

    ]

});

