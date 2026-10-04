import React, { useEffect, useState } from "react";

import { getAllProjects } from "../services/ProjectsService";

export default function ProjectCards() {
	const [projectsData, setProjectsData] = useState([]);

	useEffect(() => {
		const docs = getAllProjects();
		setProjectsData(docs);
	}, []);

	return (
		<div className="project-grid">
			{projectsData.map(project => {
				const technologies = project.project_tech_used || [];

				return (
					<article className="project-card" key={project.id}>
						<div className="project-card-media">
							<img src={project.project_img} alt={`${project.project_title} screenshot`} />
						</div>
						<div className="project-card-body">
							<h3 className="project-card-title">{project.project_title}</h3>
							<p className="project-card-desc">{project.project_description}</p>
							{project.project_link && (
								<a
									className="project-card-link"
									href={project.project_link}
									target="_blank"
									rel="noreferrer"
									aria-label={`Visit ${project.project_title}`}
								>
									Visita el proyecto...
								</a>
							)}
						</div>
						{technologies.length > 0 && (
							<ul className="project-card-tech">
								{technologies.map(tech => (
									<li key={tech}>{tech}</li>
								))}
							</ul>
						)}
					</article>
				);
			})}
		</div>
	);
}
