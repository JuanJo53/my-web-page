import Header from "../components/Header";
import LandingHome from "../pages/LandingHome";
import ComingSoon from "../pages/aux-pages/ComingSoon";
import NotFound from "../pages/aux-pages/NotFound";
import Login from "../pages/admin/Login";

import { ThemeProvider } from "../context/ThemeContext";

import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";

const AppRoutes = () => {
	const location = useLocation();

	return (
		<>
			{location.pathname !== "/admin" && <Header />}
			<main>
				<Routes>
					<Route path="/" element={<LandingHome />} />
					<Route path="/admin" element={<Login />} />
					<Route path="/blog" element={<ComingSoon />} />
					<Route path="/courses" element={<NotFound />} />
					<Route path="/404" element={<NotFound />} />
					<Route path="*" element={<Navigate to="/404" replace />} />
				</Routes>
			</main>
		</>
	);
};

const App = () => (
	<ThemeProvider>
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	</ThemeProvider>
);

export default App;
