import React, { Component } from "react";
import { GitHub, LinkedIn, Instagram, X, Email } from "@mui/icons-material";

import "../../styles/Contact.scss";

import Logo from "../../assets/images/brand-logo/Logo-turquesa-small.png";
export default class Contact extends Component {
	render() {
		return (
			<div id="contact" className="container contact-container ">
				<div className="contact-header">
					<h1 className="contact-title fw-bolder">Contact</h1>
					<h3 className="contact-subtitle fw-bolder">Have a project, an opportunity, or a bug with an excellent excuse?</h3>
					<h5 className="contact-subtitle fw-bolder">I would be pleased to hear from you.</h5>
					<h5>For hiring, collaboration, or other professional inquiries, email me or connect with me on social media.</h5>
				</div>
				<div className="contact-content">
					<div className="social-icons">
						<a href="https://www.instagram.com/juanjo53fd/" target="_blank" rel="noreferrer">
							<Instagram className="socialIcon" fontSize="large" />
						</a>
						<a href="https://x.com/JuanJo53FD" target="_blank" rel="noreferrer" aria-label="X">
							<X className="socialIcon" fontSize="large" />
						</a>
						<a href="https://www.linkedin.com/in/juan-josé-fernández-duarte-096274163" target="_blank" rel="noreferrer">
							<LinkedIn className="socialIcon" fontSize="large" />
						</a>
						<a href="https://github.com/JuanJo53" target="_blank" rel="noreferrer">
							<GitHub className="socialIcon" fontSize="large" />
						</a>
						<a href="mailto:fernandez.duarte.juanjose@gmail.com">
							<Email className="socialIcon" fontSize="large" />
						</a>
					</div>
					<div className="contact-logo">
						<img src={Logo} alt="jjfd_logo" />
					</div>
				</div>
				<div className="contact-footer">
					<small>
						This website was fully made by me, using{" "}
						<a href="https://reactjs.org/" target="_blank">
							ReactJS
						</a>{" "}
						and modern CSS
					</small>
					<br />
					<small>
						My awesome logo was made by: <a href="mailto: enrique.gutierrez.davila@gmail.com">Enrique Gutierrez</a>
					</small>
					<small> a.k.a Kurlangas</small>
				</div>
			</div>
		);
	}
}
