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
	it('mutation setAuth', () => {
		const state = {
			isLoggedIn: false,
		};
		const payload = {
			value: true,
		};
		mutations.setAuth(state, payload);
		expect(state.isLoggedIn).toEqual(true);
	});
	it('getters activeTab', () => {
		const state = {
			activeTab: 2,
		};
		expect(getters.activeTab(state)).toEqual(2);
	});
	it('getters isLoggedIn', () => {
		const state = {
			isLoggedIn: false,
		};
		expect(getters.isLoggedIn(state)).toEqual(false);
	});
	it('action updateActiveTabs', () => {
		const commit = jest.fn();
		actions.updateActiveTabs({ commit }, { value: 3 });
		expect(commit).toHaveBeenCalledWith('setActiveTabs', { value: 3 });
	});
	it('action updateAuth', () => {
		const commit = jest.fn();
		actions.updateAuth({ commit }, { value: true });
		expect(commit).toHaveBeenCalledWith('setAuth', { value: true });
	});
});
