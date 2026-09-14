import React, { Component } from "react";
import { GitHub, LinkedIn, Instagram, X, Email } from "@mui/icons-material";

import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

import "../../styles/Contact.scss";

import Logo from "../../assets/images/brand-logo/Logo-turquesa-small.png";
export default class Contact extends Component {
	render() {
		return (
			<div id="contact" className="container contact-container ">
				<div className="contact-header">
					<h1 className="contact-title fw-bolder">Contact</h1>
					<h3 className="contact-subtitle fw-bolder">Let me help you build the software you need!</h3>
					<h5 className="contact-subtitle fw-bolder">Want to hire me?</h5>
					<h5>You can find me on my socials or send me an email. Links down below!</h5>
				</div>
				<div className="contact-content">
					<nav className="contact-nav">
						<div className="contact-nav-inner">
							<div id="responsive-navbar-nav">
								<ul className="contact-links">
									<li>
										<Scroll className="contact-link" to="home" smooth={true} href="#home">
											HOME
										</Scroll>
									</li>
									<li>
										<Scroll className="contact-link" to="profile" smooth={true} href="#profile">
											PROFILE
										</Scroll>
									</li>
									<li>
										<div className="contact-dropdown">
											<button type="button" className="contact-dropdown-toggle">
												EXPERIENCES
											</button>
											<div className="contact-dropdown-menu">
												<Scroll className="contact-dropdown-link" href="#experiences" to="experiences" smooth={true}>
													EDUCATION
												</Scroll>
												<Scroll className="contact-dropdown-link disabled" href="#work" to="work" smooth={true} disabled>
													WORK
												</Scroll>
												<Scroll className="contact-dropdown-link" href="#portfolio" to="portfolio" smooth={true}>
													PORTFOLIO
												</Scroll>
											</div>
										</div>
									</li>
									<li>
										<Scroll className="contact-link" href="#contact" to="contact" smooth={true}>
											CONTACT
										</Scroll>
									</li>
								</ul>
								<ul className="contact-secondary-links">
									<li>
										<div title="This amazing content will be available soon!">
											<Link className="contact-link disabled" to="/blog">
												BLOG
											</Link>
										</div>
									</li>
									<li>
										<div title="This amazing content will be available soon!">
											<Link className="contact-link disabled" to="/courses">
												MY COURSES
											</Link>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					<br />
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
