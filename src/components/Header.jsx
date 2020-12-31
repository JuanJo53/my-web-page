import React from "react";

import { GitHub, LinkedIn, Instagram, Twitter, Menu } from "@material-ui/icons";

import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

import "./../styles/Navbar.scss";
import { Navbar, NavDropdown, Dropdown, DropdownButton } from "react-bootstrap";

const Header = () => (
	<Navbar collapseOnSelect expand="lg" variant="dark" className="Navbar">
		<div className="container justify-content-md-center">
			<Link className="navbar-brand" to="/">
				<img src="./src/assets/images/brand-logo/Logo-blanco-small.png" alt="jjfd_logo" />
			</Link>
			<Navbar.Toggle aria-controls="responsive-navbar-nav">
				<Menu className="menuIcon" fontSize="large" />
			</Navbar.Toggle>
			<Navbar.Collapse id="responsive-navbar-nav">
				<ul className="navbar-nav mr-auto align-middle">
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
							<Scroll className="dropdown-item disabled" href="#work" to="work" smooth={true} disabled>
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
							<Link className="nav-link navlinks disabled" to="/blog">
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
				<ul className="navbar-nav mr-auto">
					<li className="nav-item ">
						<a className="nav-link link-light" href="https://www.instagram.com/juanjo53fd/" target="_blank">
							<Instagram className="socialIcon" fontSize="large" />
							<span className="d-lg-none"> Instagram Account</span>
						</a>
					</li>
					<li className=" nav-item ">
						<a className="nav-link" href="https://twitter.com/JuanJo53FD" target="_blank">
							<Twitter className="socialIcon" fontSize="large" />
							<span className="d-lg-none"> Twitter Account</span>
						</a>
					</li>
					<li className="nav-item ">
						<a
							className="nav-link "
							href="https://www.linkedin.com/in/juan-josé-fernández-duarte-096274163"
							target="_blank"
						>
							<LinkedIn className="socialIcon" fontSize="large" />
							<span className="d-lg-none"> LinkedIn Account</span>
						</a>
					</li>
					<li className="nav-item ">
						<a className="nav-link " href="https://github.com/JuanJo53" target="_blank">
							<GitHub className="socialIcon" fontSize="large" />
							<span className="d-lg-none"> GitHub Account</span>
						</a>
					</li>
				</ul>
			</Navbar.Collapse>
		</div>
	</Navbar>
);

export default Header;
