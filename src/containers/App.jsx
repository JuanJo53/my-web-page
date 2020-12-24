import React from "react";

import Header from "../components/Header";
import LandingHome from "../pages/LandingHome";

import ComingSoon from "../pages/aux-pages/ComingSoon";
import NotFound from "../pages/aux-pages/NotFound";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Header></Header>
			<Switch>
				<Route exact path="/">
					<LandingHome />
				</Route>
				<Route exact path="/ComingSoon">
					<ComingSoon />
				</Route>
				<Route exact path="/NotFound">
					<NotFound />
				</Route>
				<Route path="/404">
					<NotFound />
				</Route>
				<Redirect from="*" to="/404" />
			</Switch>
		</BrowserRouter>
	);
}
export default App;
