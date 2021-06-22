import Vue from 'vue';
import VueRouter from 'vue-router';
// import NewsList from './pages/NewsList.vue';
import NewsList from './components/news/NewsList';
import NewDetail from './components/news/NewDetail';
Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', redirect: '/news' },
		{
			name: 'news-list',
			path: '/news',
			component: NewsList,
		},
		{
			name: 'new-detail',
			path: '/news/:newId',
			component: NewDetail,
			props: true,
		},
	],
});

export default router;
