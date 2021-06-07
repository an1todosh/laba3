import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [],
    },

    mutations: {
        SET_TODO: (state, payload) => {
            state.name = payload;
        }
    },
    getters: {
        TODOS: state => {
            return state.products;
        },
    },
});