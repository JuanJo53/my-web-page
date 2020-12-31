import React from "react";

import { Card, CardGroup, CardDeck } from "react-bootstrap";

import FlutterCalScreen from "../assets/images/fluttercalc.png";
import PlataformaScreen from "../assets/images/plataforma-ucb.jpg";
import RAVScreen from "../assets/images/rav.jpg";
import PrintaloScreen from "../assets/images/printalo.jpg";

export default function ProjectCards() {
	return (
		<div className="project-card-container">
			<div className="row row-cols-1 row-cols-md-3 g-4">
				<div className="col">
					<div className="card h-100 project-card">
						<img src={PrintaloScreen} className="card-img-top" alt="printalo-screenshot"></img>
						<div className="card-body project-card-body">
							<h5 className="card-title">Printalo</h5>
							<p className="card-text">
								A web application to improve communication between clients and copier positions, thus improving
								business interaction.
							</p>
							<a
								href="https://printalo-ef2bc.firebaseapp.com/html/index/negocioIndex/indexNeg.html"
								target="_blank"
							>
								Visita el proyecto...
							</a>
						</div>
						<div className="card-footer">
							<small className="text-muted">JS, HTML, CSS, Firebase</small>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100 project-card">
						<img src={RAVScreen} className="card-img-top" alt="RAV-screenshot"></img>
						<div className="card-body project-card-body">
							<h5 className="card-title">RAV-Web</h5>
							<p className="card-text">
								Website for the Ríos de Agua Viva congregation. Where news in the world and religious material are
								posted.
							</p>
							<a href="https://juanjo53.github.io/RAV_Web/" target="_blank">
								Visita el proyecto...
							</a>
						</div>
						<div className="card-footer">
							<small className="text-muted">Bootstrap, JS, HTML, Firebase</small>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100 project-card">
						<img src={PlataformaScreen} className="card-img-top" alt="plataforma-ucb"></img>
						<div className="card-body project-card-body">
							<h5 className="card-title">Plataforma Idiomas UCB</h5>
							<p className="card-text">
								This is a platform that helps steudents and teachers in a better comunication, organization and
								interaction for lenguaje classes.
							</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">Angular, NodeJS, GCP</small>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100 project-card ">
						<img src={FlutterCalScreen} className="card-img-top" alt="flutter-calculator"></img>
						<div className="card-body project-card-body">
							<h5 className="card-title">Flutter Calculator</h5>
							<p className="card-text">This is simple scientific calculator builded with Flutter.</p>
						</div>
						<div className="card-footer">
							<small className="text-muted">Flutter</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
