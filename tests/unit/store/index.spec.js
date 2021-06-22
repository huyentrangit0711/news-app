import { mutations, getters, actions } from '@/store/index';
describe('Root store', () => {
	it('mutation setActiveTabs', () => {
		const state = {
			activeTab: 0,
		};
		const payload = {
			value: 1,
		};
		mutations.setActiveTabs(state, payload);
		expect(state.activeTab).toEqual(1);
	});
	it('getters activeTab', () => {
		const state = {
			activeTab: 2,
		};
		expect(getters.activeTab(state)).toEqual(2);
	});
	it('action updateActiveTabs', () => {
		const commit = jest.fn();
		actions.updateActiveTabs({ commit }, { value: 3 });
		expect(commit).toHaveBeenCalledWith('setActiveTabs', { value: 3 });
	});
});
