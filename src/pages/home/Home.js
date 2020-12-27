import React, { Component, useState, useEffect } from "react";
import "../../styles/Home.scss";
class Home extends React.Component {
	render() {
		return (
			<div id="home" className="container home-container">
				<div className="row align-items-center">
					<div className="col">
						<h1 className="font-weight-bold">Hi! I´m Juan Jo. A systems engineer.</h1>
						<h3>
							I´m also a software engineer that really really loves to build tecnology. A true believer that every
							problem can be solved with software and tecnology.
						</h3>
					</div>
					<div className="col">
						<img className="img-logo" src="./src/assets/images/Logo-turquesa-claro.png" alt="logo" />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
