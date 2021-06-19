<template>
	<div class="top-headline-tab">
		<div>
			<h1>News List Tab</h1>
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
			<div :v-show="this.loading">
				Loadinbg
			</div>
		</div>
		<new-detail></new-detail>
	</div>
</template>

<script>
import NewDetail from '../components/news/NewDetail.vue';
import NewItem from '../components/news/NewItem.vue';
import { getTopHeadLine } from '../../api';
export default {
	name: 'NewsListPage',
	data() {
		return {
			articles: [],
			loading: false,
		};
	},
	components: {
		NewDetail,
		NewItem,
	},
	async mounted() {
		this.loading = true;
		const res = await getTopHeadLine();
		this.articles = res.articles;
		this.loading != this.loading;
	},
};
</script>
