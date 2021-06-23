import Vue from 'vue';
import Vuex from 'vuex';
import newsModule from './modules/news/index';
Vue.use(Vuex);
export const mutations = {
	setActiveTabs(state, payload) {
		state.activeTab = payload.value;
	},
	setAuth(state, payload) {
		state.isLoggedIn = payload.value;
	},
};
export const actions = {
	updateActiveTabs({ commit }, payload) {
		commit('setActiveTabs', payload);
	},
	updateAuth({ commit }, payload) {
		commit('setAuth', payload);
	},
};
export const getters = {
	activeTab(state) {
		return state.activeTab;
	},
	isLoggedIn(state) {
		return state.isLoggedIn;
	},
};
export default new Vuex.Store({
	modules: {
		news: newsModule,
	},
	state() {
		return {
			activeTab: 0,
			isLoggedIn: false,
		};
	},
	mutations,
	actions,
	getters,
});
