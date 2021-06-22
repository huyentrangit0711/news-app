import { shallowMount, createLocalVue } from '@vue/test-utils';
import BaseTab from '@/components/UI/BaseTab';
import Vuex from 'vuex';
const localVue = createLocalVue();

localVue.use(Vuex);
describe('BaseTab UI Component', () => {
	let wrapper;
	let actions;
	let store;
	let getters;
	let state;
	beforeEach(() => {
		actions = {
			updateActiveTabs: jest.fn(),
		};
		state = {
			activeTab: 2,
		};
		getters = {
			activeTab: () => jest.fn().mockReturnValue(2),
		};
		store = new Vuex.Store({
			actions,
			getters,
			state,
		});
		wrapper = shallowMount(BaseTab, {
			store,
			localVue,
			mocks: {
				$route: {
					path: '/news/2432523',
				},
				$router: {
					push: jest.fn(),
				},
			},
		});
	});
	afterEach(() => {});
	it('Component display correctly with active tab from store ', () => {
		wrapper.vm.onActiveTab(2);
		expect(actions.updateActiveTabs).toHaveBeenCalled();
		expect(wrapper.vm.$router.push).toHaveBeenCalled();
	});
	it('Update "activeTab" from store correctly ', async () => {
		await wrapper.vm.$nextTick();
		expect(wrapper.vm.activeTab()).toEqual(2);
	});
	it('Component render correctly ', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
