import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import ProtectedRoutes from "./protectedRoutes";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<LogIn />} />
				<Route element={<ProtectedRoutes />}>
					<Route path="/home" exact element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
