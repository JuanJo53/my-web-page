import React, { useState, useEffect } from "react";

import EducationCard from "../../components/EducationCard";
import WorkCard from "../../components/WorkCard";
import ProjectCards from "../../components/ProjectCards";

import "../../styles/Experiences.scss";

import { db, storage } from "../../firebase-config";

export default function Experiences() {
	const [eduData, setEduData] = useState([]);

	const getEducations = () => {
		db.collection("educations").onSnapshot(querySnapshot => {
			const docs = [];
			querySnapshot.forEach(doc => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setEduData(docs);
		});
	};

	useEffect(() => {
		getEducations();
		// const storageRef = storage.ref("organizations-logos/Coursera-Logo.png");
		// const fileUrl = storageRef.getDownloadURL();
		// console.log(fileUrl);
	}, []);

	return (
		<div id="experiences" className="container experiences-container">
			<div className="experiences-header">
				<h1 className="experiences-title fw-bolder">Experiences</h1>
				<h5 className="experiences-desc">Here´s some of my work and experiences.</h5>
				<hr className="solid"></hr>
			</div>
			<div className="experiences-education">
				<h2 className="experiences-titles">Education</h2>
				{eduData.map(edu => {
					return (
						<EducationCard
							key={edu.id}
							organization={edu.organization_name}
							time={edu.time_spent}
							edu_detail={edu.edu_detail}
							edu_desc={edu.edu_description}
							link={edu.organization_link}
							img={edu.organization_img}
							id={edu.id}
						/>
					);
				})}
			</div>
			<hr className="solid"></hr>

			{/* <div id="work" className="experiences-work">
					<h2 className="experiences-titles">Work Experiences</h2>
					<WorkCard/>
				<hr className="solid"></hr> */}

			<div id="portfolio" className="experiences-portfolio">
				<h2 className="experiences-titles">Portfolio</h2>
				<ProjectCards />
				<br />
			</div>
			<hr className="solid"></hr>
		</div>
	);
}
