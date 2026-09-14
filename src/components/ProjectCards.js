import React, { useEffect, useState } from "react";

import { getAllProjects } from "../services/ProjectsService";

export default function ProjectCards() {
	const [projectsData, setProjectsData] = useState([]);

	useEffect(() => {
		const docs = getAllProjects();
		setProjectsData(docs);

		// const storageRef = storage.ref("organizations-logos/Coursera-Logo.png");
		// const fileUrl = storageRef.getDownloadURL();
		// console.log(fileUrl);
	}, []);
	return (
		<div className="project-card-container">
			<div className="project-grid">
				{projectsData.map(project => {
					return (
						<div className="project-card" key={project.id}>
							<img src={project.project_img} className="project-card-image" alt={`${project.project_title} screenshot`} />
							<div className="project-card-body">
								<h3>{project.project_title}</h3>
								<p>{project.project_description}</p>
								{project.project_link && (
									<a href={project.project_link} target="_blank" rel="noreferrer">
										Visita el proyecto...
									</a>
								)}
							</div>
							<div className="card-footer">
								{project.project_tech_used.map(tech => {
									return <small key={tech}>{tech}</small>;
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
