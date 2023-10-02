import { Outlet } from "react-router-dom";
import LogIn from "./pages/LogIn/LogIn";
import { useState } from "react";

const useAuth = () => {
	const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

	return user && user;
};

const ProtectedRoutes = () => {
	const isAuth = useAuth();

	return isAuth === null ? <LogIn /> : <Outlet />;
};

export default ProtectedRoutes;
