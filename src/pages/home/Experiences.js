import React, { Component } from "react";

import "../../styles/Experiences.scss";
export default class Experiences extends Component {
	render() {
		return (
			<div id="experiences" className="container experiences-container">
				<div className="experiences-header">
					<h1 className="experiences-title fw-bolder">Experiences</h1>
					<h5 className="experiences-desc">Here´s some of my work and experiences.</h5>
					<hr className="solid"></hr>
				</div>
			</div>
		);
	}
}
