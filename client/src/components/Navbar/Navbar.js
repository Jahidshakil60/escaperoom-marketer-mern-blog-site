import React, { useState } from "react";
import logo from "../../images/logo.svg";
import "./styles.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar() {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logout = () => {
		dispatch({ type: "LOGOUT" });

		navigate("/");
		setUser(null);
	};

	return (
		<div>
			<div className="nav-container">
				<div className="nav-logo">
					<img src={logo} alt="" className="logo-img" />
				</div>
				<div className="nav-items">
					<p className="avatar">{user?.result?.name.charAt(0)}</p>
					<p className="user__name">{user?.result?.name}</p>
					<button className="add_btn">+ Add User</button>
					<button className="Logout__btn" onClick={logout}>
						Log Out
					</button>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
