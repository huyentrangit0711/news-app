import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import NewsList from '@/components/news/NewsList';
import { actions, getters, mutations } from '../../../../src/store/index';
const localVue = createLocalVue();
localVue.use(Vuex);
describe('News List Component', () => {
	let wrapper;
	let moduleActions;
	let store;
	let news;
	let moduleGetters;
	const createStore = (rootState) => {
		return new Vuex.Store({
			modules: {
				news,
			},
			state: rootState,
			getters,
			actions,
			mutations,
		});
	};
	beforeEach(() => {
		moduleActions = {
			getNewsByQuery: jest.fn(),
			getTopHeadLineArticles: jest.fn(),
		};
		moduleGetters = {
			getArticles: () =>
				jest.fn().mockReturnValue([
					{ id: 1234, title: 'Mock title 1' },
					{ id: 1111, title: 'Mock title 2' },
				]),
			getLoading: () => jest.fn().mockReturnValue(true),
		};
		news = {
			namespaced: true,
			state: {
				articles: [
					{ id: 1234, title: 'Mock title 1' },
					{ id: 1111, title: 'Mock title 2' },
				],
			},
			actions: moduleActions,
			getters: moduleGetters,
		};
	});
	it('Component should render html correctly', async () => {
		store = createStore({
			activeTab: 0,
		});
		wrapper = shallowMount(NewsList, {
			store,
			localVue,
		});
		expect(wrapper).toMatchSnapshot();
	});
	it('Component should render correctly', async () => {
		store = createStore({
			activeTab: 0,
		});
		wrapper = mount(NewsList, {
			store,
			localVue,
		});
		expect(moduleActions.getTopHeadLineArticles).toHaveBeenCalled();
	});
	it('Component should dispatch getCustomNews correctly when activeTab !== 0', async () => {
		store = createStore({
			activeTab: 1,
		});
		wrapper = mount(NewsList, {
			store,
			localVue,
		});
		wrapper.vm.$store.getters.activeTab;
		expect(moduleActions.getNewsByQuery).toHaveBeenCalled();
	});
});
