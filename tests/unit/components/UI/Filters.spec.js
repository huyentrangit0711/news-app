import { shallowMount, mount } from '@vue/test-utils';
import Filters from '@/components/UI/Filters';
describe('Filters UI Component', () => {
	let wrapper;
	// let spy;
	beforeEach(() => {
		jest.spyOn(window.localStorage.__proto__, 'setItem');
	});
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('localStorage should update when change filter ', async () => {
		wrapper = mount(Filters, {
			data: () => ({ filterValue: 'bitcoin' }),
		});
		wrapper.setData({ filterValue: 'animal' });
		await wrapper.vm.$nextTick();
		expect(wrapper.emitted().filterChange[0][0]).toEqual('animal');
		expect(localStorage.setItem).toHaveBeenCalled();
	});
	it('set filterValue correctly if get from localStorage success', () => {
		jest
			.spyOn(window.localStorage.__proto__, 'getItem')
			.mockReturnValue('bitcoin');
		wrapper = shallowMount(Filters);
		expect(wrapper.vm.filterValue).toEqual('bitcoin');
	});
});
