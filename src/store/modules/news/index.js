import { getTopHeadLine, getNewsByQuery } from '../../../utilities/api';
import { transformArticles } from '@/utilities/transform';
export const getters = {
	getArticles(state) {
		return state.articles;
	},
	getLoading(state) {
		return state.loading;
	},
};
export default {
	namespaced: true,
	state() {
		return {
			articles: [],
			loading: false,
		};
	},
	mutations: {
		setArticles(state, payload) {
			state.articles = payload.value;
		},
		setLoading(state, payload) {
			state.loading = payload.value;
		},
	},
	actions: {
		async getTopHeadLineArticles({ commit }) {
			commit('setLoading', {
				value: true,
			});
			const res = await getTopHeadLine();
			const transformData = transformArticles(res.articles);
			commit('setArticles', {
				value: transformData,
			});
			commit('setLoading', {
				value: false,
			});
		},
		async getNewsByQuery({ commit }, query) {
			commit('setLoading', {
				value: true,
			});
			const res = await getNewsByQuery(query);
			const transformData = transformArticles(res.articles);
			commit('setArticles', {
				value: transformData,
			});
			commit('setLoading', {
				value: false,
			});
		},
	},
	getters,
};
