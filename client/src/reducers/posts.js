/* eslint-disable no-fallthrough */
/* eslint-disable import/no-anonymous-default-export */

export default (posts = [], action) => {
	switch (action.type) {
		case "FETCH_ALL":
			console.log(action.payload);
			return action.payload;
		case "CREATE":
			return [...posts, action.payload];
		case "UPDATE":
			return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
		case "DELETE":
			return posts.filter((post) => post._id !== action.payload);
		default:
			return posts;
	}
};
