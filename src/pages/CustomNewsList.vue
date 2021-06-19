<template>
	<div class="filter-news-tab">
		<h1>News List With Filter Tab</h1>
		<filters @filterChange="loadingNews"></filters>
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
	</div>
</template>

<script>
import Filters from '../components/UI/Filters.vue';
import NewItem from '../components/news/NewItem.vue';
import { getNewsByQuery } from '../../api';
export default {
	name: 'CustomNewListPage',
	components: {
		Filters,
		NewItem,
	},
	data() {
		return {
			articles: [],
			loading: false,
		};
	},
	async mounted() {
		const defaultQuery = 'animal&bitcoin&apple&earthquake';
		const res = await getNewsByQuery(defaultQuery);
		this.articles = res.articles;
	},
	methods: {
		async loadingNews(query) {
			this.loading = true;
			const resData = await getNewsByQuery(query);
			this.articles = resData.articles;
		},
	},
};
</script>
