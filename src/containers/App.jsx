import React, { useState, useEffect } from "react";
import Home from "../pages/home/Home";
import Profile from "../pages/home/Profile";
import Header from "../components/Header";

import * as Icon from "react-bootstrap-icons";
import { IconButton, Collapse, Slide, Zoom } from "@material-ui/core";
import "../styles/App.scss";

const App = () => {
	const [checked, setChecked] = useState(false);
	useEffect(() => {
		setChecked(true);
	}, []);
	return (
		<div className="App">
			<Header></Header>
			<body>
				<Home></Home>
				<Slide direction="up" in={checked} {...(checked ? { timeout: 1000 } : {})} mountOnEnter unmountOnExit>
					<div className="down-button row justify-content-center">
						<div className="col-0">
							<IconButton className="btn btn-link">
								<Icon.ChevronDown size={50} color="white" />
							</IconButton>
						</div>
					</div>
				</Slide>
				<Profile></Profile>
			</body>
		</div>
	);
};
export default App;
