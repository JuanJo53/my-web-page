import React, { Component } from "react";

import EducationCard from "../../components/EducationCard";

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
				<div className="experiences-education">
					<h2 className="experiences-titles">Education</h2>
					<EducationCard></EducationCard>
				</div>

				<hr className="solid"></hr>
				<div id="work" className="experiences-work">
					<h2 className="experiences-titles">Work Experiences</h2>
				</div>

				<hr className="solid"></hr>
				<div id="portfolio" className="experiences-portfolio">
					<h2 className="experiences-titles">Portfolio</h2>
				</div>
			</div>
		);
	}
}
