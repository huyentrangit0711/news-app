<template>
	<div class="filter-news-tab">
		<h1>News List With Filter Tab</h1>
		<filters></filters>
		<div class="grid grid-cols-3 gap-4">
			<new-item></new-item><new-item></new-item>
			<new-item></new-item>
			<new-item></new-item>
		</div>
	</div>
</template>

<script>
import Filters from '../components/UI/Filters.vue';
import NewItem from '../components/news/NewItem.vue';
export default {
	name: 'CustomNewListPage',
	components: {
		Filters,
		NewItem,
	},
};

// https://newsapi.org/v2/everything?q=  /// second tab - query with button filter on tab
// `animal`&sortBy=popularity&apiKey=
</script>
