import React, { useState, useEffect } from "react";

import Home from "./home/Home";
import Profile from "./home/Profile";
import Experiences from "./home/Experiences";
import Contact from "./home/Contact";

import { Link as Scroll } from "react-scroll";
import { IconButton, Slide } from "@material-ui/core";
import * as Icon from "react-bootstrap-icons";

import "../styles/LandingHome.scss";

function LandingHome() {
	const [checked, setChecked] = useState(false);
	useEffect(() => {
		setChecked(true);
	}, []);
	return (
		<React.Fragment>
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
			<Slide direction="up" in={checked} {...(checked ? { timeout: 1000 } : {})} mountOnEnter unmountOnExit>
				<div className="down-button row justify-content-center">
					<div className="col-0">
						<Scroll to="experiences" smooth={true}>
							<IconButton>
								<Icon.ChevronDown size={50} color="white" />
							</IconButton>
						</Scroll>
					</div>
				</div>
			</Slide>
			<Experiences></Experiences>
			<Contact></Contact>
		</React.Fragment>
	);
}
export default LandingHome;
