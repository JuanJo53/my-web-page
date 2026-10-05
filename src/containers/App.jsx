import Header from "../components/Header";
import LandingHome from "../pages/LandingHome";
import ComingSoon from "../pages/aux-pages/ComingSoon";
import NotFound from "../pages/aux-pages/NotFound";
import { ThemeProvider } from "../context/ThemeContext";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const App = () => (
	<ThemeProvider>
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<LandingHome />} />
					<Route path="/blog" element={<ComingSoon />} />
					<Route path="/courses" element={<NotFound />} />
					<Route path="/404" element={<NotFound />} />
					<Route path="*" element={<Navigate to="/404" replace />} />
				</Routes>
			</main>
		</BrowserRouter>
	</ThemeProvider>
);

export default App;
