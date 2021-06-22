import { shallowMount, createLocalVue } from '@vue/test-utils';
import NewDetail from '@/components/news/NewDetail';
import Vuex from 'vuex';
import { getters } from '@/store/modules/news/index.js';
const localVue = createLocalVue();
localVue.use(Vuex);
describe('News Detail Component', () => {
	let wrapper;
	let store;
	let moduleActions;
	let news;
	beforeEach(() => {
		// jest.spyOn(Intl, 'DateTimeFormat').mockImplementation(() => ({
		// 	format: () => '18/09/2021',
		// }));
		// const mockDate = new Date(1466424490000);
		// jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
		moduleActions = {
			getNewsByQuery: jest.fn(),
			getTopHeadLineArticles: jest.fn(),
		};
		news = {
			namespaced: true,
			state: {
				articles: [
					{
						id: 1234,
						title: 'Mock title 1',
						publishedAt: '2021-06-19T05:15:44Z',
						urlToImage: 'http://url.image',
						content: 'Mock content',
						url: 'http://original.url',
					},
					{
						id: 1236,
						title: 'Mock title 2',
						publishedAt: '2021-06-19T04:01:25Z',
						urlToImage: 'http://url.image2',
						content: 'Mock content 2',
						url: 'http://original.url 2',
					},
				],
			},
			actions: moduleActions,
			getters,
		};
		store = new Vuex.Store({
			modules: {
				news,
			},
			state: {
				activeTab: 0,
			},
		});
	});
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('article data should be get correctly on mounted hook', async () => {
		wrapper = shallowMount(NewDetail, {
			propsData: {
				newId: 1236,
			},
			store,
			localVue,
		});
		const expectData = {
			id: 1236,
			title: 'Mock title 2',
			publishedAt: '2021-06-19T04:01:25Z',
			urlToImage: 'http://url.image2',
			content: 'Mock content 2',
			url: 'http://original.url 2',
		};
		await wrapper.vm.$nextTick();
		expect(wrapper.vm.article).toEqual(expectData);
	});
	// it('computed property "formatDate" should work correctly', () => {
	// 	8;
	// 	wrapper = shallowMount(NewDetail, {
	// 		propsData: {
	// 			newId: 1236,
	// 		},
	// 		store,
	// 		localVue,
	// 	});
	// 	expect(wrapper.vm.formatDate).toBe('18/09/2021');
	// });
});
