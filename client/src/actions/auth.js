import * as api from "../api/index.js";

export const logIn = (formData, navigate) => async (dispatch) => {
	try {
		//log in user
		const { data } = await api.logIn(formData);

		dispatch({ type: "LOGIN", data });
		navigate("/home");
	} catch (error) {
		console.log(error);
	}
};
