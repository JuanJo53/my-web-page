import React, { Component, useState, useEffect } from "react";
import "../../styles/Profile.scss";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import * as Icon from "react-bootstrap-icons";
class Home extends React.Component {
	render() {
		return (
			<div id="profile" className="container profile-container">
				Soy el perfil
			</div>
		);
	}
}

export default Home;
