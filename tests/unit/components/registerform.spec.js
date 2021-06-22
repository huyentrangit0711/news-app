import { shallowMount } from '@vue/test-utils';
import RegisterForm from '@/components/profile/RegisterForm';

describe('Register Form Component', () => {
	jest.spyOn(window.localStorage.__proto__, 'setItem');

	let wrapper;
	beforeEach(() => {
		wrapper = shallowMount(RegisterForm);
	});
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('renders form correctly ', () => {
		wrapper.setData({ username: 'test' });
		const form = wrapper.find('form');
		form.trigger('submit.prevent');
		expect(localStorage.setItem).toHaveBeenCalled();
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
	});
});
