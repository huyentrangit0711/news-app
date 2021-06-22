import { shallowMount } from '@vue/test-utils';
import WelcomePage from '@/components/profile/WelcomePage';

describe('Welcome Page Component', () => {
	jest.spyOn(window.localStorage.__proto__, 'setItem');
	jest.spyOn(window.localStorage.__proto__, 'removeItem');

	let wrapper;
	beforeEach(() => {});
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('renders welcome page correctly ', () => {
		jest
			.spyOn(window.localStorage.__proto__, 'getItem')
			.mockReturnValue('localUser');
		wrapper = shallowMount(WelcomePage);
		expect(wrapper.vm.username).toEqual('localUser');
	});
	it('button Logout should work correctly', () => {
		wrapper = shallowMount(WelcomePage);
		const button = wrapper.find('button');
		button.trigger('click');
		expect(localStorage.removeItem).toHaveBeenCalled();
	});
});
