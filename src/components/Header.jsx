import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

import "./../styles/Navbar.scss";
import Navbar from "react-bootstrap/Navbar";

const Header = () => (
	<Navbar collapseOnSelect expand="lg" variant="dark" className="Navbar sticky-top ">
		<div className="container justify-content-md-center">
			<Link className="navbar-brand" to="/">
				<img src="./src/assets/images/Logo-principal-JJFD-Blanco.png" alt="jjfd_logo" width="50" height="50" />
			</Link>
			<Navbar.Toggle aria-controls="responsive-navbar-nav">
				<MenuIcon className="menuIcon" fontSize="large" />
			</Navbar.Toggle>
			<Navbar.Collapse id="responsive-navbar-nav">
				<ul className="navbar-nav mr-auto">
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
					<li className="nav-item ">
						<Scroll className="nav-link navlinks" href="#expiriences" to="experiences" smooth={true}>
							EXPIRIENCES
						</Scroll>
					</li>
					<li className="nav-item ">
						<Scroll className="nav-link navlinks" href="#contact" to="contact" smooth={true}>
							CONTACT
						</Scroll>
					</li>
				</ul>
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link className="nav-link navlinks" to="/blog">
							BLOG
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link navlinks" to="/courses">
							MY COURSES
						</Link>
					</li>
				</ul>
				<ul className="navbar-nav mr-auto">
					<li className="nav-item ">
						<a className="nav-link link-light" href="https://www.instagram.com/juanjo53fd/" target="_blank">
							<InstagramIcon className="socialIcon" fontSize="large" />
							<span className="d-lg-none"> Instagram Account</span>
						</a>
					</li>
					<li className=" nav-item ">
						<a className="nav-link" href="https://twitter.com/JuanJo53FD" target="_blank">
							<TwitterIcon className="socialIcon" fontSize="large" />
							<span className="d-lg-none"> Twitter Account</span>
						</a>
					</li>
					<li className="nav-item ">
						<a
							className="nav-link "
							href="https://www.linkedin.com/in/juan-josé-fernández-duarte-096274163"
							target="_blank"
						>
							<LinkedInIcon className="socialIcon" fontSize="large" />
							<span className="d-lg-none"> LinkedIn Account</span>
						</a>
					</li>
					<li className="nav-item ">
						<a className="nav-link " href="https://github.com/JuanJo53" target="_blank">
							<GitHubIcon className="socialIcon" fontSize="large" />
							<span className="d-lg-none"> GitHub Account</span>
						</a>
					</li>
				</ul>
			</Navbar.Collapse>
		</div>
	</Navbar>
);

export default Header;
