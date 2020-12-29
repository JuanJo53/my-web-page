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
							<small class="text-muted">Last updated 3 mins ago</small>
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
							<small class="text-muted">Last updated 3 mins ago</small>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100 project-card">
						<img src="..." className="card-img-top" alt="..."></img>
						<div className="card-body project-card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a longer card with supporting text below as a natural lead-in to additional content.
							</p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Last updated 3 mins ago</small>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="card h-100 project-card ">
						<img src="..." className="card-img-top" alt="..."></img>
						<div className="card-body project-card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								This is a longer card with supporting text below as a natural lead-in to additional content. This
								content is a little bit longer.
							</p>
						</div>
						<div class="card-footer">
							<small class="text-muted">Last updated 3 mins ago</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
