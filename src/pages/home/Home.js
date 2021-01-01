import React, { Component, useState, useEffect } from "react";

import "../../styles/Home.scss";

import logo from "../../assets/images/brand-logo/Logo-turquesa-claro.png";
class Home extends React.Component {
	render() {
		return (
			<div className="container home-container">
				<div className="row align-items-center">
					<div className="col-auto col-sm-auto col-lg-6 col-md-auto">
						<h1 className="font-weight-bold">Hi! I´m Juan Jo. A systems engineer.</h1>
						<h3>
							I´m also a software engineer that really really loves to build tecnology. A true believer that every
							problem can be solved with software and tecnology.
						</h3>
					</div>
					<div className="col-auto col-sm-auto col-lg-6 col-md-auto">
						<img className="img-logo img-fluid" src={logo} alt="logo" />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
