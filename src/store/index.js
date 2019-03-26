import Vue from 'vue';
import Vuex from 'vuex';
import {phones} from "../data/phones";
import {brands} from "../data/brands";
import * as Types from "./types";
import {brandFilter} from "../filters/brandFilter";
import {orderByFilter} from "../filters/orderByFilter";
import {paginationPipe} from "../filters/paginationFilter";

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        products: phones,
        brands: brands,
        cart: [],
        brandFilter : '',
        orderBy: '',
        perPage: 12,
        currentPage: 1,
        pagesToShow: 3,
    },
    mutations: {
        [Types.ADD_PRODUCT_TO_CART] (state, product) {
          const cartItemIndex = state.cart.findIndex(item => item.id === product.id);

          if(cartItemIndex < 0) {
              state.cart.push({...product, quantity: 1});
          } else {
              if(state.cart[cartItemIndex].quantity === 10) return void  0;
              state.cart[cartItemIndex].quantity++;
          }
        },
        [Types.REMOVE_PRODUCT_FROM_CART] (state, id) {
          const cartItemIndex =   state.cart.findIndex(item => item.id === id);

          state.cart.splice(cartItemIndex, 1);
        },
        [Types.INCREMENT_CART_ITEM_QUANTITY] (state, id) {
            const cartItemIndex =   state.cart.findIndex(item => item.id === id);
            window.console.log(state.cart[cartItemIndex]);
            if(state.cart[cartItemIndex].quantity === 10) return void  0;
            state.cart[cartItemIndex].quantity++;

        },
        [Types.DECREMENT_CART_ITEM_QUANTITY] (state, id) {
            const cartItemIndex =   state.cart.findIndex(item => item.id === id);
            if(state.cart[cartItemIndex].quantity === 1) return void  0;
            state.cart[cartItemIndex].quantity--;
        },
        [Types.PREV_PAGE] (state) {
            state.currentPage--;
        },
        [Types.NEXT_PAGE] (state) {
            state.currentPage++;
        },
        [Types.GO_PAGE] (state, payload) {
            state.currentPage = payload;
        },
        [Types.ORDER_BY_ASC] (state) {
            state.orderBy = 'asc'
        },
        [Types.ORDER_BY_DESC] (state) {
            state.orderBy = 'desc';
        },
        [Types.CLEAR_ORDER_BY_PRICE] (state) {
            state.orderBy = '';
        },
        [Types.ADD_BRAND_TO_FILTER] (state, brand) {
            if(state.brandFilter.includes(brand)) return void 0;

            state.brandFilter += brand;
        },
        [Types.REMOVE_BRAND_FROM_FILTER] (state, brand) {
            const reg = new RegExp(brand, 'gi');
            state.brandFilter = state.brandFilter.replace(reg, '');
        },
        [Types.CLEAR_BRAND_FILTER] (state) {
            state.brandFilter = '';
        }
    },
    getters: {
        filterProducts(state) {
            const brands = state.brandFilter;
            const orderBy = state.orderBy;

            const filterByBrandArr = brandFilter(state.products, brands);
            const filterByOrderArr = orderByFilter(filterByBrandArr, orderBy);

            return filterByOrderArr;
        },
        paginate(state, getters) {
            return paginationPipe(getters.filterProducts, {perPage:state.perPage, currentPage: state.currentPage});
        },
        totalItemCountAfterFilter(state, getters) {
            return getters.filterProducts.length;
        },
        brandsCount(state) {
            const counts = {};
            state.products.forEach(p => {
                counts[p.brand] = counts[p.brand] + 1 || 1;
            });

            return counts;
        },
        cartLength(state) {
            return state.cart.length;
        },
        totalPrice(state) {
            return state.cart.reduce((count, curItem) => {
                return count + (curItem.quantity * curItem.price);
            }, 0);
        }
    }
});

export default store;
