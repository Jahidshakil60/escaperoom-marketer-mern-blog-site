import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import logo from "../../images/logo.svg";

import { useDispatch } from "react-redux";
import { logIn } from "../../actions/auth";

const initialState = {
	email: "",
	password: "",
};

function LogIn() {
	const [formData, setFormData] = useState(initialState);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(logIn(formData, navigate));
		console.log(formData);
	};

	return (
		<div>
			<div className="main-container">
				<div className="input-wrapper">
					<img src={logo} alt="" className="logo-img" />
					<input type="email" name="email" required placeholder="Your email" onChange={handleChange} />
					<input type="password" name="password" required placeholder="Your password" onChange={handleChange} />
					<button className="" onClick={handleSubmit}>
						Log In
					</button>
				</div>
			</div>
		</div>
	);
}

export default LogIn;
