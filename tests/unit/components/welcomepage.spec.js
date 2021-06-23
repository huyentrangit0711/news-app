import { shallowMount, createLocalVue } from '@vue/test-utils';
import WelcomePage from '@/components/profile/WelcomePage';
import Vuex from 'vuex';
const localVue = createLocalVue();
localVue.use(Vuex);
describe('Welcome Page Component', () => {
	let wrapper;
	let actions;
	let store;
	beforeEach(() => {
		jest.spyOn(window.localStorage.__proto__, 'setItem');
		jest.spyOn(window.localStorage.__proto__, 'removeItem');
		actions = {
			updateAuth: jest.fn(),
		};
		store = new Vuex.Store({
			actions,
		});
	});
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('renders welcome page correctly ', () => {
		jest
			.spyOn(window.localStorage.__proto__, 'getItem')
			.mockReturnValue('localUser');
		wrapper = shallowMount(WelcomePage, {
			localVue,
			store,
		});
		expect(wrapper.vm.username).toEqual('localUser');
	});
	it('button Logout should work correctly', () => {
		wrapper = shallowMount(WelcomePage, {
			localVue,
			store,
		});
		const button = wrapper.find('button');
		button.trigger('click');
		expect(localStorage.removeItem).toHaveBeenCalled();
		expect(actions.updateAuth).toHaveBeenCalled();
	});
});
