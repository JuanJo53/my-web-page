import React from "react";

import { Card, CardGroup, CardDeck } from "react-bootstrap";

export default function ProjectCard() {
	return (
		<div className="project-card">
			<div class="row row-cols-1 row-cols-md-3 g-4">
				<div class="col">
					<div class="card h-100">
						<img src="..." class="card-img-top" alt="..."></img>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								This is a longer card with supporting text below as a natural lead-in to additional content. This content is a
								little bit longer.
							</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100">
						<img src="..." class="card-img-top" alt="..."></img>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">This is a short card.</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100">
						<img src="..." class="card-img-top" alt="..."></img>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								This is a longer card with supporting text below as a natural lead-in to additional content.
							</p>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card h-100">
						<img src="..." class="card-img-top" alt="..."></img>
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								This is a longer card with supporting text below as a natural lead-in to additional content. This content is a
								little bit longer.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* <CardDeck>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little
							bit longer.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>This card has supporting text below as a natural lead-in to additional content. </Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
				<Card>
					<Card.Img variant="top" src="holder.js/100px160" />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to additional content. This card has even
							longer content than the first to show that equal height action.
						</Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted">Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
			</CardDeck> */}
		</div>
	);
}
