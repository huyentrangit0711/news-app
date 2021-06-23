import { shallowMount, createLocalVue } from '@vue/test-utils';
import RegisterForm from '@/components/profile/RegisterForm';
import Vuex from 'vuex';
const localVue = createLocalVue();
localVue.use(Vuex);
describe('Register Form Component', () => {
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
			isLoggedIn: () => jest.fn().mockReturnValue(2),
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
	it('renders form correctly ', () => {
		wrapper = shallowMount(RegisterForm, {
			store,
			localVue,
		});
		wrapper.setData({ username: 'test' });
		const form = wrapper.find('form');
		form.trigger('submit.prevent');
		expect(localStorage.setItem).toHaveBeenCalled();
		expect(actions.updateAuth).toHaveBeenCalled();
	});
	it('show error message when input is empty ', () => {
		wrapper.setData({ username: '' });
		const form = wrapper.find('form');
		form.trigger('submit.prevent');
		expect(wrapper.vm.showError).toBe(true);
	});
	it('setItem localStorage only when not found username on localStorage', () => {
		jest
			.spyOn(window.localStorage.__proto__, 'getItem')
			.mockReturnValue({ username: 'localUser' });
		wrapper.setData({ username: 'mockUserName' });
		const form = wrapper.find('form');
		form.trigger('submit.prevent');
		expect(localStorage.setItem).not.toHaveBeenCalled();
		expect(actions.updateAuth).not.toHaveBeenCalled();
	});
});
