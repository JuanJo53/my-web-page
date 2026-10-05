import React from "react";

import "../../styles/Profile.scss";

import ProfilePhoto from "../../assets/images/profile_pic.png";

class Home extends React.Component {
	render() {
		return (
			<section id="profile" className="container profile-container">
				<div className="profile-header">
					<h2 className="profile-title fw-bolder">Profile</h2>
					<h5 className="profile-desc">I'm a software developer</h5>
					<hr className="solid"></hr>
				</div>
				<div className="profile-card">
					<div className="profile-card-body">
						<aside className="profile-identity">
							<div className="profile-img">
								<img src={ProfilePhoto} alt="Juan José Fernández Duarte" />
							</div>
							<h3 className="profile-name">Juan José Fernández Duarte</h3>
							<p className="profile-role">Software developer</p>
						</aside>
						<div className="profile-summary">
							<h3 className="profile-about-title">About me</h3>
							<p className="profile-about-text">
								Systems engineering student and software developer, enthusiastic about building useful software, leading with
								curiosity, and continually learning.
							</p>
							<dl className="profile-facts">
								<div>
									<dt>Age</dt>
									<dd>27 years</dd>
								</div>
								<div>
									<dt>Location</dt>
									<dd>La Paz, Bolivia, Earth</dd>
								</div>
								<div>
									<dt>Currently</dt>
									<dd>Systems Engineer, expanding into Data Engineering</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Home;
