import React, { useEffect, useState } from "react";

import { db, storage } from "../firebase-config";

export default function ProjectCards() {
	const [projectsData, setProjectsData] = useState([]);

	const getProjects = () => {
		db.collection("projects").onSnapshot(querySnapshot => {
			const docs = [];
			querySnapshot.forEach(doc => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setProjectsData(docs);
		});
	};

	useEffect(() => {
		getProjects();
		// const storageRef = storage.ref("organizations-logos/Coursera-Logo.png");
		// const fileUrl = storageRef.getDownloadURL();
		// console.log(fileUrl);
	}, []);
	return (
		<div className="project-card-container">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{projectsData.map(project => {
					return (
						<div className="col" key={project.id}>
							<div className="card h-100 project-card">
								<img src={project.project_img} className="card-img-top" alt="printalo-screenshot"></img>
								<div className="card-body project-card-body">
									<h5 className="card-title">{project.project_title}</h5>
									<p className="card-text">{project.project_description}</p>
									{project.project_link ? (
										!""
									) : (
										<a href={project.project_link} target="_blank">
											Visita el proyecto...
										</a>
									)}
								</div>
								<div className="card-footer">
									{project.project_tech_used.map(tech => {
										return <small className="text-muted">{tech}, </small>;
									})}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
