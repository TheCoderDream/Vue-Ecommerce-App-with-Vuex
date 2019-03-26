import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import '../custom.scss'

Vue.config.devtools = true;
import store from './store';
import {Plugin} from 'vue-fragment'
import VueSwal from 'vue-swal'


Vue.use(Plugin);
Vue.use(VueSwal)



Vue.use(VueRouter);
//filters
import {brandFilter} from "./filters/brandFilter";
import {formatMoney} from "./filters/priceFormatter";
import {paginationPipe} from "./filters/paginationFilter";

import Home from './Pages/Home';
import ShoppingCartPage from './Pages/ShoppingCartPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import {shortenTitle} from "./filters/shortenTitle";
import {CLEAR_BRAND_FILTER, CLEAR_ORDER_BY_PRICE} from "./store/types";

Vue.config.productionTip = false;

Vue.filter('brandFilter', brandFilter);
Vue.filter('shortenTitle', shortenTitle)
Vue.filter('priceFormatter', formatMoney);
Vue.filter('pagination', paginationPipe);


const routes = [
    {path: '/', redirect: '/products'},
    {path: '/products', component: Home,},
    {path: '/products/:id', component: ProductDetailPage},
    {path: '/cart', component: ShoppingCartPage}
];

const router = new VueRouter({routes});
new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app');

router.afterEach(() => {
    window.scrollTo(0,0);
    store.commit(CLEAR_BRAND_FILTER);
    store.commit(CLEAR_ORDER_BY_PRICE);
});
