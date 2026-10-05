import React, { useEffect, useState } from "react";

export default function ProjectCards(props) {
	const id = props.id || "";
	const title = props.title || "Portfolio";
	const description = props.description || "Here are some of my projects.";
	const img = props.img || "";
	const tech_used = props.tech_used || [];
	const url = props.url || "";

	return (
		<article className="project-card" key={id}>
			<div className="project-card-media">
				<img src={img} alt={`${title} screenshot`} />
			</div>
			<div className="project-card-body">
				<h3 className="project-card-title">{title}</h3>
				<p className="project-card-desc">{description}</p>
				{url && (
					<a className="project-card-link" href={url} target="_blank" rel="noreferrer" aria-label={`Visit ${title}`}>
						Visita el proyecto...
					</a>
				)}
			</div>
			{tech_used.length > 0 && (
				<ul className="project-card-tech">
					{tech_used.map(tech => (
						<li key={tech}>{tech}</li>
					))}
				</ul>
			)}
		</article>
	);
}
