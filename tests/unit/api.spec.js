import axios from 'axios';
import { getTopHeadLine, getNewsByQuery } from '@/utilities/api';
jest.mock('axios');
afterEach(() => {
	jest.clearAllMocks();
});
describe('API call for data source of News ADD TWO', () => {
	it('getTopHeadLine should be called correctly test', async () => {
		const resData = {
			data: [
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
			],
		};
		axios.get.mockImplementationOnce(() => Promise.resolve(resData));
		await expect(getTopHeadLine()).resolves.toEqual(resData.data);
	});
	it('getTopHeadLine have error when call API', async () => {
		const errorMessage = 'Network Error';

		axios.get.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage))
		);
		await expect(getTopHeadLine()).rejects.toThrow(errorMessage);
	});

	it('getNewsByQuery should be called correctly with query', async () => {
		const resData = {
			data: [
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
			],
		};
		axios.get.mockImplementationOnce(() => Promise.resolve(resData));
		const data = await getNewsByQuery('mockQuery');
		expect(data).toEqual(resData.data);
		expect(axios.get).toHaveBeenCalledWith(
			`${process.env.VUE_APP_ENV_API_URL}everything`,
			{
				params: {
					q: 'mockQuery',
					apiKey: process.env.VUE_APP_ENV_API_KEY,
				},
			}
		);
	});
});
