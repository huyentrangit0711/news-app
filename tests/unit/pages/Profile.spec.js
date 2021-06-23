import { shallowMount, createLocalVue } from '@vue/test-utils';
import Profile from '@/pages/Profile';
import Vuex from 'vuex';
const localVue = createLocalVue();
localVue.use(Vuex);
describe('Profile Page Component', () => {
	let wrapper;
	let actions;
	let store;
	let getters;
	let state;
	beforeEach(() => {
		jest.spyOn(window.localStorage.__proto__, 'setItem');
		actions = {
			updateAuth: jest.fn(),
		};
		state = {
			isLoggedIn: false,
		};
		getters = {
			isLoggedIn: () => jest.fn().mockReturnValue(true),
		};
		store = new Vuex.Store({
			actions,
			getters,
			state,
		});
	});
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('Page Profile should render welcome page correctly', async () => {
		jest
			.spyOn(window.localStorage.__proto__, 'getItem')
			.mockReturnValue({ username: 'localUser' });
		wrapper = shallowMount(Profile, {
			localVue,
			store,
		});
		await wrapper.vm.$nextTick();
		expect(wrapper.vm.isLoggedIn()).toEqual(true);
	});
	it('Page Profile should render correctly if getting localStorage', async () => {
		jest
			.spyOn(window.localStorage.__proto__, 'getItem')
			.mockReturnValue({ username: 'localUser' });
		wrapper = shallowMount(Profile, {
			localVue,
			store,
		});
		await wrapper.vm.$nextTick();
		expect(actions.updateAuth).toHaveBeenCalled();
	});
});
