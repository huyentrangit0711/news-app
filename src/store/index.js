import Vue from 'vue';
import Vuex from 'vuex';
import newsModule from './modules/news/index';
Vue.use(Vuex);
export const mutations = {
	setActiveTabs(state, payload) {
		state.activeTab = payload.value;
	},
};
export const actions = {
	updateActiveTabs({ commit }, payload) {
		commit('setActiveTabs', payload);
	},
};
export const getters = {
	activeTab(state) {
		return state.activeTab;
	},
};
export default new Vuex.Store({
	modules: {
		news: newsModule,
	},
	state() {
		return {
			activeTab: 0,
		};
	},
	mutations,
	actions,
	getters,
});
