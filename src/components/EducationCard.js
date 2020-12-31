import React from "react";

import { Card, Image } from "react-bootstrap";

export default function EducationCard(props) {
	return (
		<div className="education-card">
			<Card className="experiences-card container">
				<Card.Body className="row justify-content-around experiences-card-body">
					<div className="col col-auto col-sm-auto col-lg-3 col-md-auto">
						<Card.Title as="h4" className="org-title text-center">
							{props.organization}
						</Card.Title>
						<Card.Text className="org-time-text text-center">{props.time}</Card.Text>
						<div className="org-img text-center">
							<Card.Img className="img-fluid img-thumbnail flex-sm-nowrap" src={props.img} />
						</div>
					</div>
					<div className="col col-8 org-about">
						<Card.Title as="h4" className="org-title">
							{props.edu_detail}
						</Card.Title>
						<Card.Text className="org-about-text">{props.edu_desc}</Card.Text>
						<Card.Link href={props.link} target="_blank">
							Organization´s web site/Certificate Link
						</Card.Link>
					</div>
				</Card.Body>
			</Card>
			<br />
		</div>
	);
}
