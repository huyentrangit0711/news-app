<template>
	<div>
		<div
			class="grid grid-cols-3 gap-4"
			:v-show="articles && articles.length > 0"
		>
			<new-item
				v-for="(article, index) in articles"
				:key="index"
				:article="article"
			></new-item>
		</div>
		<div :v-show="loading">
			Loadinbg
		</div>
		test
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import NewItem from './NewItem.vue';
export default {
	name: 'NewsList',
	components: {
		NewItem,
	},
	data() {
		return {
			loading: false,
		};
	},
	computed: {
		...mapGetters('news', { articles: 'getArticles' }),
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
