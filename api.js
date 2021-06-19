import axios from 'axios';
const NEWS_API_KEY = '290bb5986e44446293242d8392393ff9';
const DATA_API_URL = 'https://newsapi.org/v2/';
export default axios.create({
	baseURL: process.env.DATA_API_URL,
});
// export const getOrdersLength = async () => {
// 	const res = await axios.get(`http://localhost:3001/orders`);
// 	const length = res.data && res.data.length;
// 	return length;
// };
// export const getOrdersWithSort = async (
// 	fieldName: string = 'updated_time',
// 	order: string = 'desc'
// ) => {
// 	const ordersWithSorted = await axios.get(
// 		`http://localhost:3001/orders?_sort=${fieldName}&_order=${order}`
// 	);
// 	return ordersWithSorted.data;
// };
export const getTopHeadLine = async () => {
	// newsapi.org/v2/top-headlines?country=us&apiKey=
	const res = await axios.get(
		`${DATA_API_URL}/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
	);
	return res.data;
};
export const getNewsByQuery = async (query = 'apple') => {
	// newsapi.org/v2/top-headlines?country=us&apiKey=
	const res = await axios.get(
		`${DATA_API_URL}/everything?q=${query}&apiKey=${NEWS_API_KEY}`
	);
	return res.data;
};
