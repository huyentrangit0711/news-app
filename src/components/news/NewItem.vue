<template>
	<div class="new-item shadow-2xl rounded">
		<router-link :to="newDetailLink">
			<img class="object-cover h-48 w-full" :src="article.urlToImage" />
			<div class="content p-10">
				<h1 class="text-xl">{{ article.title }}</h1>
				<p class="description">
					{{ article.description }}
				</p>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'NewItem',
	props: ['article'],
	components: {},
	computed: {
		newDetailLink() {
			return {
				name: 'new-detail',
				params: { newId: this.article.id },
			};
		},
	},
};
</script>

<style></style>
