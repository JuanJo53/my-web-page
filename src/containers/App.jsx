import React from "react";
import Home from "../pages/home/Home";
import Profile from "../pages/home/Profile";
import Header from "../components/Header";
const App = () => (
	<div className="App">
		<Header></Header>
		<body>
			<Home />
			<Profile />
		</body>
	</div>
);
export default App;
