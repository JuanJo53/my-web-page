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

export default function WorkCard(props) {
	const company = props.company && typeof props.company === "object" ? props.company : {};
	const location = props.location && typeof props.location === "object" ? props.location : {};
	const timeSpent =
		props.time_spent && typeof props.time_spent === "object" ? props.time_spent : {};
	const companyName = company.name || "Company";
	const position = props.title || props.position || "";
	const startDate = formatDate(props.start_date);
	const endDate = props.currently_working ? "Present" : formatDate(props.end_date);
	const dateRange = [startDate, endDate].filter(Boolean).join(" - ");
	const duration =
		timeSpent.value !== undefined && timeSpent.value !== null && timeSpent.unit
			? `${timeSpent.value} ${timeSpent.unit}`
			: "";
	const locationName = [location.city, location.country].filter(Boolean).join(", ");
	const geopoint = location.geopoint;
	const latitude = geopoint && (geopoint.latitude ?? geopoint._latitude);
	const longitude = geopoint && (geopoint.longitude ?? geopoint._longitude);
	const mapUrl =
		typeof latitude === "number" && typeof longitude === "number"
			? `https://www.google.com/maps?q=${latitude},${longitude}`
			: "";
	const skills = Array.isArray(props.skills)
		? props.skills.filter(skill => typeof skill === "string" || typeof skill === "number")
		: [];
	const companyImage = typeof company.img === "string" ? company.img : "";
	const hasDetails =
		props.employment_type || location.type || locationName || mapUrl || duration;

	return (
		<article className="work-card">
			<header className="work-card-header">
				<div className="work-card-company">
					<div className="work-card-logo">
						{companyImage ? (
							<img src={companyImage} alt={`${companyName} logo`} />
						) : (
							<span aria-hidden="true">{companyName.charAt(0)}</span>
						)}
					</div>
					<div className="work-card-heading">
						<h4 className="work-card-company-name">
							{company.link ? (
								<a href={company.link} target="_blank" rel="noreferrer">
									{companyName}
								</a>
							) : (
								companyName
							)}
						</h4>
						{position ? <p className="work-card-position">{position}</p> : null}
					</div>
				</div>
				{dateRange ? <p className="work-card-dates">{dateRange}</p> : null}
			</header>

			<div className="work-card-body">
				{props.description ? <p className="work-card-description">{props.description}</p> : null}

				{hasDetails ? (
					<div className="work-card-details">
						{props.employment_type ? (
							<div className="work-card-detail">
								<span className="work-card-detail-label">Employment</span>
								<span>{props.employment_type}</span>
							</div>
						) : null}
						{location.type ? (
							<div className="work-card-detail">
								<span className="work-card-detail-label">Workplace</span>
								<span>{location.type}</span>
							</div>
						) : null}
						{locationName ? (
							<div className="work-card-detail">
								<span className="work-card-detail-label">Location</span>
								{mapUrl ? (
									<a href={mapUrl} target="_blank" rel="noreferrer">
										{locationName}
									</a>
								) : (
									<span>{locationName}</span>
								)}
							</div>
						) : mapUrl ? (
							<div className="work-card-detail">
								<span className="work-card-detail-label">Location</span>
								<a href={mapUrl} target="_blank" rel="noreferrer">
									View location
								</a>
							</div>
						) : null}
						{duration ? (
							<div className="work-card-detail">
								<span className="work-card-detail-label">Duration</span>
								<span>{duration}</span>
							</div>
						) : null}
					</div>
				) : null}

				{skills.length ? (
					<ul className="work-card-skills" aria-label="Skills">
						{skills.map((skill, index) => (
							<li key={`${skill}-${index}`}>{skill}</li>
						))}
					</ul>
				) : null}

			</div>
		</article>
	);
}
