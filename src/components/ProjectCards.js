import React from "react";

import { Card, CardGroup, CardDeck } from "react-bootstrap";

export default function ProjectCards() {
	return (
		<div className="project-card-container">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<div className="col">
					<div className="card h-100 project-card">
						<img src="..." className="card-img-top" alt="..."></img>
						<div className="card-body project-card-body">
							<h5 className="card-title">Printalo</h5>
							<p className="card-text">
								A web application to improve communication between clients and copier positions, thus improving
								business interaction.
							</p>
						</div>
						<div class="card-footer">
							<small class="text-muted">JS, HTML, CSS, Firebase</small>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100 project-card">
						<img src="..." className="card-img-top" alt="..."></img>
						<div className="card-body project-card-body">
							<h5 className="card-title">RAV-Web</h5>
							<p className="card-text">
								Website for the Ríos de Agua Viva congregation. Where news in the world and religious material are
								posted.
							</p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Bootstrap, JS, HTML, Firebase</small>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100 project-card">
						<img src="..." className="card-img-top" alt="..."></img>
						<div className="card-body project-card-body">
							<h5 className="card-title">Plataforma Idiomas UCB</h5>
							<p className="card-text">
								This is a platform that helps steudents and teachers in a better comunication, organization and
								interaction for lenguaje classes.
							</p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Angular, NodeJS, GCP</small>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100 project-card ">
						<img src="..." className="card-img-top" alt="..."></img>
						<div className="card-body project-card-body">
							<h5 className="card-title">Flutter Calculator</h5>
							<p className="card-text">This is simple scientific calculator made with Flutter.</p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Flutter</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
