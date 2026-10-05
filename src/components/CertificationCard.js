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
		return typeof value === "string" || typeof value === "number" ? String(value) : "";
	}

	return Number.isNaN(date.getTime())
		? typeof value === "string" || typeof value === "number"
			? String(value)
			: ""
		: date.toLocaleDateString(undefined, { month: "short", year: "numeric" });
}

export default function CertificationCard(props) {
	const organization = props.organization && typeof props.organization === "object" ? props.organization : {};
	const certificateName = props.name || "Certificate";
	const organizationName = organization.name || "Certification provider";
	const issuedDate = formatDate(props.exped_date);
	const expiryDate = formatDate(props.expiry_date);

	return (
		<article className="project-card certification-card">
			{organization.img ? (
				<div className="project-card-media certification-card-media">
					<img src={organization.img} alt={`${organizationName} logo`} />
				</div>
			) : null}
			<div className="project-card-body">
				<h3 className="project-card-title">{certificateName}</h3>
				{props.description ? <p className="project-card-desc">{props.description}</p> : null}
				<p className="certification-card-organization">
					{organization.url ? (
						<a href={organization.url} target="_blank" rel="noreferrer">
							{organizationName}
						</a>
					) : (
						organizationName
					)}
				</p>
				{issuedDate || expiryDate ? (
					<p className="certification-card-dates">
						{issuedDate && expiryDate ? `Issued ${issuedDate} · Expires ${expiryDate}` : issuedDate || `Expires ${expiryDate}`}
					</p>
				) : null}
				{props.url ? (
					<a
						className="project-card-link"
						href={props.url}
						target="_blank"
						rel="noreferrer"
						aria-label={`View ${certificateName}`}
					>
						View certificate
					</a>
				) : null}
			</div>
		</article>
	);
}
