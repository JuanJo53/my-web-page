import React from "react";

import { Card, Image } from "react-bootstrap";

export default function EducationCard() {
	return (
		<div className="education-card">
			<Card className="card container">
				<Card.Body className="row justify-content-around card-body">
					<div className="col col-3">
						<Card.Title as="h4" className="org-title text-center">
							Universidad Católica Boliviana "San Pablo"
						</Card.Title>
						<Card.Text className="org-time-text text-center">Feb 2018 - Dec 2022</Card.Text>
						<div className="org-img text-center">
							<Card.Img className="img-fluid img-thumbnail " src="./src/assets/images/UCBlogo.png" />
						</div>
					</div>
					<div className="col col-8 org-about">
						<Card.Title as="h4" className="org-title">
							Career - Systems Engineer
						</Card.Title>
						<Card.Text className="org-about-text">
							Modeling, developing, implementing and evaluating computer systems applying information and
							communication technologies in organizations from the operational field of information management to
							decision making. This career thought me about how to use information technologies for making human
							life easier and better.
						</Card.Text>
						<Card.Link href="https://www.ucb.edu.bo/" target="_blank">
							Organization´s web site
						</Card.Link>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}
