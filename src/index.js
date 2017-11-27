require('./style.css');
import Vue from 'vue';
import VueRouter from 'vue-router';

// Vue single file components
import IndexComponent from './components/index.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: IndexComponent }
    ],
    linkActiveClass: "active"
});

var vue = new Vue({
    router: router
}).$mount('#content');