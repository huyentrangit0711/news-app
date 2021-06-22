import { transformArticles } from '@/utilities/transform';

describe('Transform data article', () => {
	Math.random = jest.fn(() => 0.5017997104152048);
	it('transformArticles should be work correctly with articles array input', () => {
		const mockArticles = [
			{
				title: 'Mock title',
				description: 'Mock description',
				content: 'Mock content data',
			},
			{
				title: 'Mock title 2',
				description: 'Mock description data',
				content: 'Mock contents data',
			},
		];
		const expectData = [
			{
				id: 50180,
				title: 'Mock title',
				description: 'Mock description',
				content: 'Mock content data',
			},
			{
				id: 50180,
				title: 'Mock title 2',
				description: 'Mock description data',
				content: 'Mock contents data',
			},
		];
		expect(transformArticles(mockArticles)).toEqual(expectData);
	});
});
