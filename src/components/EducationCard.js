import React from "react";

export default function EducationCard(props) {
	return (
		<div className="education-card">
			<article className="experiences-card">
				<div className="experiences-card-body">
					<div className="org-summary">
						<h4 className="org-title">{props.organization}</h4>
						<p className="org-time-text">{props.time}</p>
						<div className="org-img">
							<img src={props.img} alt={`${props.organization} logo`} />
						</div>
					</div>
					<div className="org-about">
						<h4 className="org-title">{props.edu_detail}</h4>
						<p className="org-about-text">{props.edu_desc}</p>
						<a href={props.link} target="_blank" rel="noreferrer">
							Organization´s web site/Certificate Link
						</a>
					</div>
				</div>
			</article>
			<br />
		</div>
	);
}
