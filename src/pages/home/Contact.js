import React, { Component } from "react";
import { GitHub, LinkedIn, Instagram, Twitter, Menu, Email } from "@material-ui/icons";

import { Button, Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

import { Navbar, NavDropdown } from "react-bootstrap";
import "../../styles/Contact.scss";
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
					<Navbar collapseOnSelect expand="lg" variant="dark">
						<div className="container justify-content-center justify-content-md-center justify-content-sm-center">
							<Navbar.Toggle aria-controls="responsive-navbar-nav">
								<Menu className="menuIcon" fontSize="large" />
							</Navbar.Toggle>
							<Navbar.Collapse id="responsive-navbar-nav">
								<ul className="navbar-nav mr-auto align-middle ">
									<li className="nav-item ">
										<Scroll className="nav-link navlinks" to="home" smooth={true} href="#home">
											HOME
										</Scroll>
									</li>
									<li className="nav-item">
										<Scroll className="nav-link navlinks" to="profile" smooth={true} href="#profile">
											PROFILE
										</Scroll>
									</li>
									<li className="nav-item">
										<NavDropdown title="EXPERIENCES" id="basic-nav-dropdown">
											<Scroll className="dropdown-item" href="#experiences" to="experiences" smooth={true}>
												EDUCATION
											</Scroll>
											<Scroll
												className="dropdown-item disabled"
												href="#work"
												to="work"
												smooth={true}
												disabled
											>
												WORK
											</Scroll>
											<Scroll className="dropdown-item" href="#portfolio" to="portfolio" smooth={true}>
												PORTFOLIO
											</Scroll>
										</NavDropdown>
									</li>
									<li className="nav-item ">
										<Scroll className="nav-link navlinks" href="#contact" to="contact" smooth={true}>
											CONTACT
										</Scroll>
									</li>
								</ul>
								<ul className="navbar-nav mr-auto">
									<li className="nav-item">
										<div
											data-bs-toggle="tooltip"
											data-bs-placement="bottom"
											title="This amazing content will be available soon!"
										>
											<Link className="nav-link navlinks disabled disabled-links " to="/blog">
												BLOG
											</Link>
										</div>
									</li>
									<li className="nav-item">
										<div
											data-bs-toggle="tooltip"
											data-bs-placement="bottom"
											title="This amazing content will be available soon!"
										>
											<Link className="nav-link navlinks disabled" to="/courses">
												MY COURSES
											</Link>
										</div>
									</li>
								</ul>
							</Navbar.Collapse>
						</div>
					</Navbar>
					<br />
					<div className="row social-icons justify-content-center mb-5">
						<a className="nav-link link-light" href="https://www.instagram.com/juanjo53fd/" target="_blank">
							<Instagram className="socialIcon" fontSize="large" />
						</a>
						<a className="nav-link" href="https://twitter.com/JuanJo53FD" target="_blank">
							<Twitter className="socialIcon" fontSize="large" />
						</a>
						<a
							className="nav-link "
							href="https://www.linkedin.com/in/juan-josé-fernández-duarte-096274163"
							target="_blank"
						>
							<LinkedIn className="socialIcon" fontSize="large" />
						</a>
						<a className="nav-link " href="https://github.com/JuanJo53" target="_blank">
							<GitHub className="socialIcon" fontSize="large" />
						</a>
						<a className="nav-link " href="mailto: fernandez.duarte.juanjose@gmail.com" target="_blank">
							<Email className="socialIcon" fontSize="large" />
						</a>
					</div>
					<div className="contact-logo">
						<img src="./src/assets/images/brand-logo/Logo-turquesa-small.png" alt="jjfd_logo" />
					</div>
				</div>
				<div className="contact-footer">
					<small>
						This website was fully made by me, using{" "}
						<a href="https://reactjs.org/" target="_blank">
							ReactJS
						</a>{" "}
						and{" "}
						<a href="https://getbootstrap.com/" target="_blank">
							Bootstrap
						</a>
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
