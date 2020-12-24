import React, { useState, useEffect } from "react";

import Home from "../pages/home/Home";
import Profile from "../pages/home/Profile";
import Header from "../components/Header";
import ComingSoon from "../pages/aux-pages/ComingSoon";
import NotFound from "../pages/aux-pages/NotFound";

import * as Icon from "react-bootstrap-icons";
import "../styles/App.scss";

import { Link as Scroll } from "react-scroll";
import { IconButton, Collapse, Slide } from "@material-ui/core";

const App = () => {
	const [checked, setChecked] = useState(false);
	useEffect(() => {
		setChecked(true);
	}, []);
	return (
		<div className="App">
			<Header></Header>
			{/* <NotFound></NotFound>
			<ComingSoon></ComingSoon> */}
			<Home></Home>
			<Slide direction="up" in={checked} {...(checked ? { timeout: 1000 } : {})} mountOnEnter unmountOnExit>
				<div className="down-button row justify-content-center">
					<div className="col-0">
						<Scroll to="profile" smooth={true}>
							<IconButton>
								<Icon.ChevronDown size={50} color="white" />
							</IconButton>
						</Scroll>
					</div>
				</div>
			</Slide>
			<Profile></Profile>
		</div>
	);
};
export default App;
