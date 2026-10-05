import React, { useState, useEffect } from "react";

import EducationCard from "../../components/EducationCard";
import WorkCard from "../../components/WorkCard";
import ProjectCards from "../../components/ProjectCards";

import "../../styles/Experiences.scss";

import { getAllEducations } from "../../services/EducationsService";

export default function Experiences() {
	const [eduData, setEduData] = useState([]);

	useEffect(() => {
		const unsubscribe = getAllEducations(setEduData);
		return () => unsubscribe();
	}, []);

	return (
		<div id="experiences" className="container experiences-container">
			<div className="experiences-header">
				<h2 className="experiences-title fw-bolder">Experiences</h2>
				<h5 className="experiences-desc">Here´s some of my work and experiences.</h5>
				<hr className="solid"></hr>
			</div>
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
								field_of_study={education.field_of_study || education.fieldOfStudy}
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

			{/* <div id="work" className="experiences-work">
					<h2 className="experiences-titles">Work Experiences</h2>
					<WorkCard/>
				<hr className="solid"></hr> */}

			<div id="portfolio" className="experiences-portfolio">
				<h2 className="experiences-titles">Portfolio</h2>
				<ProjectCards />
			</div>
			<hr className="solid"></hr>
		</div>
	);
}
