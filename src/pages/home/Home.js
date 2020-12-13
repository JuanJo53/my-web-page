import React, { Component, useState, useEffect } from "react";
import "../../styles/Home.scss";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import * as Icon from "react-bootstrap-icons";
class Home extends React.Component {
	render() {
		return (
			<div className="container home-container">
				<div className="row align-items-center">
					<div className="col">
						<h1 className="font-weight-bold">Hi! I´m Juan Jo. A systems engineer.</h1>
						<h3>
							I´m also a software engineer that really really loves to build tecnology. A true believer that every
							problem can be solved with software and tecnology.
						</h3>
					</div>
					<div className="col">
						<img src="src/assets/images/logo.png" alt="logo" width="500" height="500" />
					</div>
				</div>
				<div className=" down-button row justify-content-center">
					<div className="col-2">
						<IconButton>
							<Icon.ChevronDown size={50} color="white" />
						</IconButton>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
