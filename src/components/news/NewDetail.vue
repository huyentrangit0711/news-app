<template>
	<div class="new-detail">
		<h1 class="font-extrabold">{{ article.title }}</h1>
		<p class="text-left italic">
			Publish at:
			{{
				new Intl.DateTimeFormat(['ban', 'id']).format(
					new Date(article.publishedAt)
				)
			}}
		</p>
		<img class="object-cover w-full" :src="article.urlToImage" />
		<div class="description">
			<p class="py-10">{{ article.content }}</p>
			<a
				:href="article.url"
				target="_blank"
				class="rounded-full py-3 px-6 bg-green-500 text-white hover:text-white-500 p-10"
				>Go to original news</a
			>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'NewDetail',
	props: ['newId'],
	components: {},
	data() {
		return {
			article: {},
		};
	},
	computed: {
		...mapGetters('news', { articles: 'getArticles' }),
	},
	mounted() {
		this.article = this.articles.find(
			(articleData) => articleData.id === this.newId
		);
	},
};
</script>

<style></style>
