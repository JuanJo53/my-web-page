import React, { Component, useState, useEffect } from "react";

import "../../styles/Profile.scss";

import { Card, Button } from "react-bootstrap";
class Home extends React.Component {
	render() {
		return (
			<div id="profile" className="container profile-container">
				<div className="profile-header">
					<h1 className="profile-title fw-bolder">Profile</h1>
					<h5 className="profile-desc">I'm a software developer</h5>
					<hr className="solid"></hr>
				</div>
				<Card className="card container profile-card text-sm-center text-lg-left text-center">
					<Card.Body className="row justify-content-md-center justify-content-center justify-content-sm-center card-body profile-card-body">
						<div className="col-8 col-md-4 profile-img">
							<Card.Img src="./src/assets/images/profile.jpg" className="img-fluid" />
						</div>
						<div className="col-8 col-md-4 profile-details">
							<Card.Title as="h2" className="profile-details-title">
								Details
							</Card.Title>
							<Card.Subtitle className="profile-details-subtitle fw-bolder">Name:</Card.Subtitle>
							<Card.Text className="profile-details-text">Juan José Fernández Duarte</Card.Text>
							<Card.Subtitle className="profile-details-subtitle">Age:</Card.Subtitle>
							<Card.Text className="profile-details-text">21 years </Card.Text>
							<Card.Subtitle className="profile-details-subtitle">Location:</Card.Subtitle>
							<Card.Text className="profile-details-text ">La Paz, Bolivia, Earth</Card.Text>
						</div>
						<div className="col-8 col-md-4 profile-about">
							<Card.Title as="h2" className="profile-about-title">
								About me
							</Card.Title>
							<Card.Text className="profile-about-text ">
								Systems engineer student. Lover of software development. Enthusiastic leader eager to improve
								everything in his life. Passionate about never stopping learning.
							</Card.Text>
						</div>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default Home;
