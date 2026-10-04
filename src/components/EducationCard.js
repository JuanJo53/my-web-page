import React from "react";

export default function EducationCard(props) {
	return (
		<article className="education-card">
			<div className="education-card-body">
				<aside className="education-identity">
					<div className="education-img">
						<img src={props.img} alt={`${props.organization} logo`} />
					</div>
					<h3 className="education-org">{props.organization}</h3>
					<p className="education-time">{props.time}</p>
				</aside>
				<div className="education-summary">
					<h3 className="education-detail">{props.edu_detail}</h3>
					<p className="education-desc">{props.edu_desc}</p>
					<a
						className="education-link"
						href={props.link}
						target="_blank"
						rel="noreferrer"
						aria-label={`${props.organization} website or certificate`}
					>
						Organization´s web site/Certificate Link
					</a>
				</div>
			</div>
		</article>
	);
}
