<template>
	<div id="app" class="container mx-auto px-4">
		<news-list></news-list>
		<custom-news-list></custom-news-list>
		<profile></profile>
	</div>
</template>

<script>
import NewsList from '@/pages/NewsList.vue';
import CustomNewsList from './pages/CustomNewsList.vue';
import Profile from './pages/Profile.vue';
export default {
	name: 'App',
	components: {
		NewsList,
		CustomNewsList,
		Profile,
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
