import React from "react";

function formatDate(value) {
	if (!value) {
		return "";
	}

	const date =
		value instanceof Date
			? value
			: typeof value.toDate === "function"
				? value.toDate()
				: typeof value.seconds === "number"
					? new Date(value.seconds * 1000 + (value.nanoseconds || 0) / 1000000)
					: typeof value === "string" || typeof value === "number"
						? new Date(value)
						: null;

	if (!date) {
		return "";
	}

	return Number.isNaN(date.getTime())
		? typeof value === "string" || typeof value === "number"
			? String(value)
			: ""
		: date.toLocaleDateString(undefined, { month: "short", year: "numeric" });
}

export default function EducationCard(props) {
	const school = props.school && typeof props.school === "object" ? props.school : {};
	const schoolName =
		school.name ||
		props.schoolName ||
		props.name ||
		props.organization ||
		(typeof props.school === "string" ? props.school : "School");
	const schoolImage = school.img || props.img || props.image || props.logo || "";
	const startDate = formatDate(props.start_date ?? props.startDate);
	const endDate = formatDate(props.end_date ?? props.endDate);
	const schoolUrl = props.url || props.link || "";
	const linkLabel = props.linkText || "Organization´s web site/Certificate Link";
	const skills = Array.isArray(props.skills) ? props.skills : typeof props.skills === "string" ? props.skills.split(",") : [];
	const visibleSkills = skills.filter(skill => typeof skill === "string" || typeof skill === "number");

	return (
		<article className="education-card">
			<div className="education-card-body">
				<aside className="education-identity">
					{schoolImage ? (
						<div className="education-img">
							<img src={schoolImage} alt={`${schoolName} logo`} />
						</div>
					) : null}
					<h3 className="education-org">{schoolName}</h3>
					{startDate || endDate ? (
						<p className="education-time">
							{startDate}
							{startDate && endDate ? " - " : ""}
							{endDate}
						</p>
					) : null}
				</aside>
				<div className="education-summary">
					<h3 className="education-detail">
						{props.degree} - {props.field_of_study}
					</h3>
					{props.description ? <p className="education-desc">{props.description}</p> : null}
					{visibleSkills.length ? (
						<ul className="education-skills" aria-label="Skills">
							{visibleSkills.map((skill, index) => (
								<li key={`${skill}-${index}`}>{skill}</li>
							))}
						</ul>
					) : null}
					{schoolUrl ? (
						<a
							className="education-link"
							href={schoolUrl}
							target="_blank"
							rel="noreferrer"
							aria-label={`${schoolName} website or certificate`}
						>
							{linkLabel}
						</a>
					) : null}
				</div>
			</div>
		</article>
	);
}
