import Vue from 'vue';
import Vuex from 'vuex';
import newsModule from './modules/news/index';
Vue.use(Vuex);
const store = new Vuex.Store({
	modules: {
		news: newsModule,
	},
	state() {
		return {
			activeTab: 0,
		};
	},
	mutations: {
		updateActiveTabs(state, payload) {
			state.activeTab = payload.value;
		},
	},
	actions: {
		updateActiveTabs(context, payload) {
			context.commit('updateActiveTabs', payload);
		},
	},
	getters: {
		activeTab(state) {
			return state.activeTab;
		},
	},
});
export default store;
