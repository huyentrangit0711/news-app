<template>
	<div>
		<div
			class="grid grid-cols-1 lg:grid-cols-3 gap-8 md:grid-cols-2"
			:v-show="articles && articles.length > 0 && !loading"
		>
			<new-item
				v-for="(article, index) in articles"
				:key="index"
				:article="article"
			></new-item>
		</div>
		<div v-if="loading">
			<Loading />
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NewItem from './NewItem.vue';
import Loading from '../UI/Loading.vue';
export default {
	name: 'NewsList',
	components: {
		NewItem,
		Loading,
	},
	computed: {
		...mapGetters('news', { articles: 'getArticles', loading: 'getLoading' }),
		...mapGetters(['activeTab']),
	},
	methods: {
		...mapActions('news', {
			getTopHeadline: 'getTopHeadLineArticles',
			getCustomNews: 'getNewsByQuery',
		}),
	},
	mounted() {
		if (this.activeTab === 0) {
			this.getTopHeadline();
		} else {
			const defaultQuery = 'animal&bitcoin&apple&earthquake';
			this.getCustomNews(defaultQuery);
		}
	},
};
</script>
