import { shallowMount } from '@vue/test-utils';
import Profile from '@/pages/Profile';

describe('Profile Page Component', () => {
	jest.spyOn(window.localStorage.__proto__, 'setItem');
	// render the component
	let wrapper;
	beforeEach(() => {});
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('Page Profile should render welcome page correctly', () => {
		jest
			.spyOn(window.localStorage.__proto__, 'getItem')
			.mockReturnValue({ username: 'localUser' });
		wrapper = shallowMount(Profile);
		expect(wrapper.vm.isLoggedIn).toEqual(true);
	});
	it('"checkIsLogin" works correctly', () => {
		wrapper = shallowMount(Profile);
		wrapper.vm.checkIsLogin(true);
		expect(wrapper.vm.isLoggedIn).toEqual(true);
	});
});
