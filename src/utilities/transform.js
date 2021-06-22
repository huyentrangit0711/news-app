export const transformArticles = (articles) => {
	return articles.map((article) => {
		return {
			id: Math.round(Math.random() * 100000),
			...article,
		};
	});
};
