import React, { useState, useEffect } from "react";

import EducationCard from "../../components/EducationCard";
import WorkCard from "../../components/WorkCard";
import ProjectCard from "../../components/ProjectCard";

import "../../styles/Experiences.scss";

import { getAllEducations } from "../../services/EducationsService";
import { getAllProjects } from "../../services/ProjectsService";

export default function Experiences() {
	const [eduData, setEduData] = useState([]);
	const [workData, setWorkData] = useState([]);
	const [projectData, setProjectData] = useState([]);

	useEffect(() => {
		const unsubscribeEducation = getAllEducations(setEduData);
		const unsubscribeProjects = getAllProjects(setProjectData);
		return () => {
			unsubscribeEducation();
			unsubscribeProjects();
		};
	}, []);

	return (
		<div id="experiences" className="container experiences-container">
			<div className="experiences-header">
				<h2 className="experiences-title fw-bolder">Experiences</h2>
				<h5 className="experiences-desc">Here´s some of my work and experiences.</h5>
				<hr className="solid"></hr>
			</div>

			{/* <div id="work" className="experiences-work">
				<h3 className="experiences-titles">Work Experiences</h3>
				<WorkCard />
				<hr className="solid"></hr>
			</div> */}

			<div className="experiences-education">
				<h3 className="experiences-titles">Education</h3>
				<div className="education-list">
					{eduData.map(education => {
						return (
							<EducationCard
								key={education.id}
								school={education.school}
								end_date={education.end_date}
								degree={education.degree}
								field_of_study={education.field_of_study}
								description={education.description}
								url={education.url}
								start_date={education.start_date}
								skills={education.skills}
								id={education.id}
							/>
						);
					})}
				</div>
			</div>
			<hr className="solid"></hr>

			<div id="portfolio" className="experiences-portfolio">
				<h3 className="experiences-titles">Portfolio</h3>
				<div className="project-grid">
					{projectData.map(project => {
						return (
							<ProjectCard
								key={project.id}
								title={project.title || project.project_title}
								description={project.description || project.project_description}
								img={project.img || project.project_img}
								url={project.url || project.project_link}
								tech_used={project.tech_used || project.project_tech_used}
								id={project.id}
							/>
						);
					})}
				</div>
			</div>
			<hr className="solid"></hr>
		</div>
	);
}
