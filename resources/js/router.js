import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import *as auth from './services/auth_service';
import { findLastKey } from 'lodash';

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('./views/Dashboard.vue')
            },
            {
                path: 'categories',
                name: 'categories',
                component: () => import('./views/Categories.vue')
            },

            {
                path: 'medications',
                name: 'medications',
                component: () => import('./views/Medications.vue')
            },
            {
                path: 'single-medication/:id',
                name: 'single-medication',
                component: () => import('./views/SingleMedication.vue'),
            },
            {
                path: 'users',
                name: 'users',
                component: () => import('./views/Users.vue')
            },
            {
                path: 'over-counter-orders',
                name: 'over-counter-orders',
                component: () => import('./views/OverCounterOrders.vue')
            },
            {
                path: 'prescription-orders',
                name: 'prescription-orders',
                component: () => import('./views/PrescriptionOrders.vue')
            }
        ],

        //check login status
        beforeEnter: (to, from, next) => {
            if (!auth.isLoggedIn()) {
                next('/login');

            } else {
                next();
            }
        }
    },

    {
        path: '/register',
        name: 'register',
        component: () => import('./views/authentication/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/authentication/Login.vue'),

        //check login status
        beforeEnter: (to, from, next) => {
            if (!auth.isLoggedIn()) {
                next();

            } else {
                next('/home');
            }
        }
    },
    {
        path: '/forgot-password-request',
        name: 'forgot-password-request',
        component: () => import('./views/authentication/ForgotPasswordRequest.vue'),
        beforeEnter: (to, from, next) => {
            if (!auth.isLoggedIn()) {
                next();

            } else {
                next('/home');
            }
        }
    },
    {
        path: '/forgot-password/:email',
        name: 'forgot-password',
        component: () => import('./views/authentication/ForgotPassword.vue'),
        beforeEnter: (to, from, next) => {
            if (!auth.isLoggedIn()) {
                next();

            } else {
                next('/home');
            }
        }
    },
];

const router = new Router({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
});

export default router;
