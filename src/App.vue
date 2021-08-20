<template>
	<div id="app" class="container mx-auto px-4">
		<div class="bg-white">
			<base-tab :tabHeaders="tabHeaders" :tabContents="tabContents"></base-tab>
		</div>
	</div>
</template>

<script>
import NewsList from '@/pages/NewsList.vue';
import CustomNewsList from '@/pages/CustomNewsList.vue';
import Profile from '@/pages/Profile.vue';
import BaseTab from '@/components/UI/BaseTab.vue';
export default {
	name: 'App',
	components: {
		BaseTab,
	},
	data() {
		return {
			tabContents: [NewsList, CustomNewsList, Profile],
			tabHeaders: ['Top Headlines', 'Custom news', 'Profile'],
		};
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
