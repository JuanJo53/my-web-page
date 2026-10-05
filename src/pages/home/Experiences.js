import React, { useState, useEffect } from "react";

import EducationCard from "../../components/EducationCard";
import WorkCard from "../../components/WorkCard";
import ProjectCard from "../../components/ProjectCard";

import "../../styles/Experiences.scss";

import { getAllEducations } from "../../services/EducationsService";
import { getAllProjects } from "../../services/ProjectsService";
import { getAllWorkExperiences } from "../../services/WorkService";
import { getAllCertificates } from "../../services/CertificatesService";

export default function Experiences() {
	const [eduData, setEduData] = useState([]);
	const [projectData, setProjectData] = useState([]);
	const [workExperiencesData, setWorkExperiences] = useState([]);
	const [certificatesData, setCertificatesData] = useState([]);

	useEffect(() => {
		const unsubscribeEducation = getAllEducations(setEduData);
		const unsubscribeProjects = getAllProjects(setProjectData);
		const unsubscribeWorkExperiences = getAllWorkExperiences(setWorkExperiences);
		const unsubscribeCertificates = getAllCertificates(setCertificatesData);
		return () => {
			unsubscribeEducation();
			unsubscribeProjects();
			unsubscribeWorkExperiences();
			unsubscribeCertificates();
		};
	}, []);

	return (
		<div id="experiences" className="container experiences-container">
			<div className="experiences-header">
				<h2 className="experiences-title fw-bolder">Experiences</h2>
				<h5 className="experiences-desc">Here´s some of my work and experiences.</h5>
				<hr className="solid"></hr>
			</div>

			<div id="work" className="experiences-work">
				<h3 className="experiences-titles">Work Experiences</h3>
				<div className="work-list">
					{workExperiencesData.map(work => {
						return (
							<WorkCard
								key={work.id}
								company={work.company}
								position={work.position}
								title={work.title}
								start_date={work.start_date}
								end_date={work.end_date}
								description={work.description}
								employment_type={work.employment_type}
								currently_working={work.currently_working}
								location={work.location}
								time_spent={work.time_spent}
								skills={work.skills}
								id={work.id}
							/>
						);
					})}
				</div>
				<hr className="solid"></hr>
			</div>

			<div id="education" className="experiences-education">
				<h3 className="experiences-titles">Education</h3>
				<div className="education-list">
					{/* {certificatesData.map(certificate => {
						return (
							<EducationCard
								key={certificate.id}
								school={certificate.school}
								end_date={certificate.end_date}
								degree={certificate.degree}
								field_of_study={certificate.field_of_study}
								description={certificate.description}
								url={certificate.url}
								start_date={certificate.start_date}
								skills={certificate.skills}
								id={certificate.id}
							/>
						);
					})} */}
				</div>
			</div>
			<hr className="solid"></hr>

			<div id="certifications" className="experiences-certifications">
				<h3 className="experiences-titles">Certifications</h3>
				<div className="certifications-list">
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
