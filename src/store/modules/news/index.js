import { getTopHeadLine, getNewsByQuery } from '../../../utilities/api';
import { transformArticle } from '@/utilities/transform';
export default {
	namespaced: true,
	state() {
		return {
			articles: [],
		};
	},
	mutations: {
		updateArticles(state, payload) {
			const transformData = transformArticle(payload.value);
			state.articles = transformData;
		},
	},
	actions: {
		async getTopHeadLineArticles(context) {
			const res = await getTopHeadLine();
			context.commit('updateArticles', {
				value: res.articles,
			});
		},
		async getNewsByQuery(context, query) {
			const res = await getNewsByQuery(query);
			context.commit('updateArticles', {
				value: res.articles,
			});
		},
	},
	getters: {
		getArticles(state) {
			return state.articles;
		},
	},
};
