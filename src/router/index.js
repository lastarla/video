import Vue from 'vue'
import Router from 'vue-router'
// import Category from '@/components/Category'
// import List from '@/components/List'
// import Play from '@/components/Play'

const Category = r => require.ensure([], () => r(require('@/components/Category')), 'group1');
const List = r => require.ensure([], () => r(require('@/components/List')), 'group2');
const Play = r => require.ensure([], () => r(require('@/components/Play')), 'group3');

Vue.use(Router);

const routes = [
    {
        path: '/',
        redirect: '/category/home'
    },
    {
        path: '/category',
        redirect: '/category/home'
    },
    {
        path: '/category/*',
        name: 'Category',
        component: Category
    },
    {
        path: '/list/*',
        name: 'List',
        component: List
    },
    {
        path: '/play/*',
        name: 'Play',
        component: Play
    }
];

export default new Router({
    routes
});