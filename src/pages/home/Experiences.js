import React, { Component } from "react";

import EducationCard from "../../components/EducationCard";
import WorkCard from "../../components/WorkCard";
import ProjectCard from "../../components/ProjectCard";

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
					<EducationCard
						organization="Universidad Católica Boliviana San Pablo"
						time="Feb 2018 - Dec 2022"
						edu_detail="Career - Systems Engineer"
						edu_desc="Modeling, developing, implementing and evaluating computer systems applying information and
						communication technologies in organizations from the operational field of information management to
						decision making. This career thought me about how to use information technologies for making human
						life easier and better."
						link="https://www.ucb.edu.bo/"
						img="./src/assets/images/UCBlogo.png"
					/>
					<br />
					<EducationCard
						organization="Coursera"
						time="Feb 2018 - Dec 2022"
						edu_detail="Course - Google Cloud Platform Fundamentals: Core Infrastructure"
						edu_desc="Modeling, developing, implementing and evaluating computer systems applying information and
						communication technologies in organizations from the operational field of information management to
						decision making. This career thought me about how to use information technologies for making human
						life easier and better."
						link="https://www.coursera.org/account/accomplishments/verify/4JEVULALASVF"
						img=""
					/>
					<br />
					<EducationCard
						organization="Platzi"
						time="Feb 2018 - Dec 2022"
						edu_detail="Course - Curso de Angular"
						edu_desc="Modeling, developing, implementing and evaluating computer systems applying information and
						communication technologies in organizations from the operational field of information management to
						decision making. This career thought me about how to use information technologies for making human
						life easier and better."
						link="https://platzi.com/p/JuanJo/curso/1670-angular/diploma/detalle/"
						img=""
					/>
					<br />
				</div>
				<hr className="solid"></hr>

				{/* <div id="work" className="experiences-work">
					<h2 className="experiences-titles">Work Experiences</h2>
					<WorkCard/>
					<br />
					<WorkCard/>
					<br />
					<WorkCard/>
					<br />
				</div>
				<hr className="solid"></hr> */}

				<div id="portfolio" className="experiences-portfolio">
					<h2 className="experiences-titles">Portfolio</h2>
					<ProjectCard></ProjectCard>
					<br />
					<ProjectCard></ProjectCard>
					<br />
					<ProjectCard></ProjectCard>
					<br />
				</div>
			</div>
		);
	}
}
