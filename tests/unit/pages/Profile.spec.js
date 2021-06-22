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
	// should not allow for `username` less than 7 characters, excludes whitespace
	// wrapper.setData({ username: ' '.repeat(7) });

	// // assert the error is rendered
	// expect(wrapper.find('.error').exists()).toBe(true);

	// // update the name to be long enough
	// wrapper.setData({ username: 'Lachlan' });

	// // assert the error has gone away
	// expect(wrapper.find('.error').exists()).toBe(false);
	it('Page Profile should render welcome page correctly', () => {
		jest
			.spyOn(window.localStorage.__proto__, 'getItem')
			.mockReturnValue({ username: 'localUser' });
		wrapper = shallowMount(Profile);
		expect(wrapper.vm.isLoggedIn).toEqual(true);
	});
});
