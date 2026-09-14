import React from "react";

import "../../styles/Profile.scss";

import ProfilePhoto from "../../assets/images/profile.jpg";

class Home extends React.Component {
	render() {
		return (
			<section id="profile" className="container profile-container">
				<div className="profile-header">
					<h1 className="profile-title fw-bolder">Profile</h1>
					<h5 className="profile-desc">I'm a software developer</h5>
					<hr className="solid"></hr>
				</div>
				<div className="profile-card">
					<div className="profile-card-body">
						<div className="profile-img">
							<img src={ProfilePhoto} alt="Juan José Fernández Duarte" />
						</div>
						<div className="profile-details">
							<h2 className="profile-details-title">Details</h2>
							<h5 className="profile-details-subtitle">Name:</h5>
							<p className="profile-details-text">Juan José Fernández Duarte</p>
							<h5 className="profile-details-subtitle">Age:</h5>
							<p className="profile-details-text">21 years</p>
							<h5 className="profile-details-subtitle">Location:</h5>
							<p className="profile-details-text">La Paz, Bolivia, Earth</p>
						</div>
						<div className="profile-about">
							<h2 className="profile-about-title">About me</h2>
							<p className="profile-about-text">
								Systems engineer student. Lover of software development. Enthusiastic leader eager to improve everything in his
								life. Passionate about never stopping learning.
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Home;
