<template>
	<div class="filter-news-tab">
		<h1>Top Random News</h1>
		<filters @filterChange="loadingNews"></filters>
		<router-view></router-view>
	</div>
</template>

<script>
import Filters from '../components/UI/Filters.vue';
import { mapActions } from 'vuex';
export default {
	name: 'CustomNewListPage',
	components: {
		Filters,
	},
	methods: {
		...mapActions('news', { getByFilter: 'getNewsByQuery' }),
		loadingNews(query) {
			this.getByFilter(query);
		},
	},
};
</script>
