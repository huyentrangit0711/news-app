import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import CustomNewsList from '@/pages/CustomNewsList';
import Filters from '@/components/UI/Filters';
const localVue = createLocalVue();

localVue.use(Vuex);
describe('Custom News List Page Component', () => {
	// render the component
	let wrapper;
	let actions;
	let store;
	beforeEach(() => {
		actions = {
			getNewsByQuery: jest.fn(),
		};
		let news = {
			namespaced: true,
			state: {},
			actions,
		};
		store = new Vuex.Store({
			modules: {
				news,
			},
		});
	});
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('Page Custom News List should render correctly', () => {
		wrapper = shallowMount(CustomNewsList, {
			stubs: ['router-link', 'router-view'],
		});
		expect(wrapper).toMatchSnapshot();
	});
	it('dispatches "getNewsByQuery" when filter change ', () => {
		const wrapper = shallowMount(CustomNewsList, {
			store,
			localVue,
			stubs: ['router-link', 'router-view'],
		});
		const FiltersComponent = wrapper.findComponent(Filters);
		FiltersComponent.vm.$emit('filterChange', 'animal');
		expect(actions.getNewsByQuery).toHaveBeenCalled();
	});
});
