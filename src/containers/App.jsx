import Header from "../components/Header";
import LandingHome from "../pages/LandingHome";

import ComingSoon from "../pages/aux-pages/ComingSoon";
import NotFound from "../pages/aux-pages/NotFound";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Header></Header>
			<Routes>
				<Route path="/" element={<LandingHome />} />
				<Route path="/blog" element={<ComingSoon />} />
				<Route path="/courses" element={<NotFound />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" replace />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
