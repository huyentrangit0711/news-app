import NewsStore from '@/store/modules/news/index';
import { transformArticles } from '@/utilities/transform';
import { getTopHeadLine, getNewsByQuery } from '@/utilities/api';
jest.mock('@/utilities/transform');
jest.mock('@/utilities/api');
afterEach(() => {
	jest.clearAllMocks();
});
describe('News store', () => {
	it('state data', () => {
		const expectState = {
			articles: [],
			loading: false,
		};
		expect(NewsStore.state()).toEqual(expectState);
	});
	it('mutation setArticles', () => {
		// mock state
		const state = { articles: [], loading: false };
		// apply mutation
		const payload = {
			value: [
				{
					id: 23523553,
					title: 'Mock title',
				},
				{
					id: 3535345,
					title: 'Mock title',
				},
			],
		};
		NewsStore.mutations.setArticles(state, payload);
		const expectResult = [
			{
				id: 23523553,
				title: 'Mock title',
			},
			{
				id: 3535345,
				title: 'Mock title',
			},
		];
		expect(state.articles).toEqual(expectResult);
	});
	it('mutation setLoading', () => {
		// mock state
		const state = { articles: [], loading: false };
		// apply mutation
		const payload = {
			value: true,
		};
		NewsStore.mutations.setLoading(state, payload);
		expect(state.loading).toEqual(true);
	});
	it('getters getArticles', () => {
		// mock state
		const state = {
			articles: [
				{
					id: 243677,
					title: 'Mock title',
					description: 'Mock description',
				},
			],
		};
		// get the result from the getter
		const result = NewsStore.getters.getArticles(state);
		expect(result).toEqual(state.articles);
	});
	it('getters getLoading', () => {
		// mock state
		const state = {
			articles: [
				{
					id: 243677,
					title: 'Mock title',
					description: 'Mock description',
				},
			],
			loading: true,
		};
		// get the result from the getter
		const result = NewsStore.getters.getLoading(state);
		expect(result).toEqual(true);
	});
	it('action getTopHeadLineArticles', async () => {
		const items = [
			{
				id: 1222,
				title: 'Test 1',
			},
			{
				id: 1223,
				title: 'Test 2',
			},
		];
		const state = { articles: [] };
		getTopHeadLine.mockResolvedValue({
			articles: [
				{
					title: 'Test 1',
				},
				{
					title: 'Test 2',
				},
			],
		});

		transformArticles.mockReturnValue(items);

		const commit = jest.fn();
		await NewsStore.actions.getTopHeadLineArticles({ commit, state });
		// await flushPromises();
		expect(commit).toHaveBeenCalledWith('setArticles', { value: items });
	});
	it('action getNewsByQuery', async () => {
		const items = [
			{
				id: 1222,
				title: 'Test Mock Query 1',
			},
			{
				id: 1223,
				title: 'Test Mock Query 2',
			},
		];
		const state = { articles: [] };
		getNewsByQuery.mockImplementation(() => {
			return {
				articles: [
					{
						title: 'Test Mock Query 1',
					},
					{
						title: 'Test Mock Query 2',
					},
				],
			};
		});
		transformArticles.mockReturnValue(items);

		const commit = jest.fn();
		await NewsStore.actions.getNewsByQuery({ commit, state });
		expect(commit).toHaveBeenCalledWith('setArticles', { value: items });
	});
});
