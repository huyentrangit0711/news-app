import axios from 'axios';
export default axios.create({
	baseURL: process.env.DATA_API_URL,
});
export const getTopHeadLine = async () => {
	const res = await axios.get(
		`${process.env.VUE_APP_ENV_API_URL}/top-headlines?country=us&apiKey=${process.env.VUE_APP_ENV_API_KEY}`
	);
	return res.data;
};
export const getNewsByQuery = async (query) => {
	const res = await axios.get(`${process.env.VUE_APP_ENV_API_URL}everything`, {
		params: {
			q: query,
			apiKey: process.env.VUE_APP_ENV_API_KEY,
		},
	});
	return res.data;
};
