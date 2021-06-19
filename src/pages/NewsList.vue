<template>
	<div class="top-headline-tab">
		<div>
			<h1>News List Tab</h1>
			<div class="grid grid-cols-3 gap-4">
				<new-item></new-item>
				<new-item></new-item>
				<new-item></new-item>
			</div>
		</div>
		<new-detail></new-detail>
	</div>
</template>

<script>
import NewDetail from '../components/news/NewDetail.vue';
import NewItem from '../components/news/NewItem.vue';
export default {
	name: 'NewsListPage',
	components: {
		NewDetail,
		NewItem,
	},
};

/// First tab
/// https://newsapi.org/v2/top-headlines?country=us&apiKey=`` First tab
</script>
