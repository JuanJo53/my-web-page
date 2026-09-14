import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { GitHub, Instagram, LinkedIn, Menu, DarkMode, LightMode, Twitter } from "@mui/icons-material";

import { useTheme } from "../context/ThemeContext";
import darkLogo from "../assets/images/brand-logo/Logo-blanco-small.png";
import lightLogo from "../assets/images/brand-logo/Logo-turquesa-small.png";
import "../styles/Navbar.scss";

const SCROLL_OFFSET = -88;

const socialLinks = [
	{ href: "https://www.instagram.com/juanjo53fd/", label: "Instagram", Icon: Instagram },
	{ href: "https://twitter.com/JuanJo53FD", label: "Twitter", Icon: Twitter },
	{ href: "https://www.linkedin.com/in/juan-josé-fernández-duarte-096274163", label: "LinkedIn", Icon: LinkedIn },
	{ href: "https://github.com/JuanJo53", label: "GitHub", Icon: GitHub }
];

const Header = () => {
	const { isDark, handleToggleTheme } = useTheme();
	const location = useLocation();
	const [expanded, setExpanded] = useState(false);
	const isHome = location.pathname === "/";
	const logo = isDark ? darkLogo : lightLogo;

	const handleCollapse = () => {
		setExpanded(false);
	};

	const handleToggleMenu = (nextExpanded) => {
		setExpanded(nextExpanded);
	};

	const handleKeyDownToggle = (event) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			handleToggleTheme();
		}
	};

	const renderSectionLink = (target, label) => {
		if (isHome) {
			return (
				<Scroll
					className="nav-link site-nav-link"
					to={target}
					smooth
					spy
					duration={500}
					offset={SCROLL_OFFSET}
					href={`#${target}`}
					onClick={handleCollapse}
				>
					{label}
				</Scroll>
			);
		}

		return (
			<Link className="nav-link site-nav-link" to={`/#${target}`} onClick={handleCollapse}>
				{label}
			</Link>
		);
	};

	return (
		<Navbar
			expand="lg"
			expanded={expanded}
			onToggle={handleToggleMenu}
			onSelect={handleCollapse}
			collapseOnSelect
			className="site-navbar fixed-top"
			role="navigation"
			aria-label="Primary"
		>
			<Container>
				<Link className="navbar-brand site-brand" to="/" onClick={handleCollapse} aria-label="Juan Jo home">
					<img src={logo} alt="Juan Jo logo" />
				</Link>

				<div className="navbar-toolbar">
					<button
						type="button"
						className="theme-toggle"
						onClick={handleToggleTheme}
						onKeyDown={handleKeyDownToggle}
						aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
						tabIndex={0}
					>
						{isDark ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
						<span className="theme-toggle-label">{isDark ? "Light" : "Night"}</span>
					</button>
					<Navbar.Toggle aria-controls="primary-navigation" className="site-nav-toggle">
						<Menu className="menu-icon" fontSize="large" />
					</Navbar.Toggle>
				</div>

				<Navbar.Collapse id="primary-navigation">
					<Nav className="site-nav-links" as="ul">
						<li className="nav-item">{renderSectionLink("home", "Home")}</li>
						<li className="nav-item">{renderSectionLink("profile", "Profile")}</li>
						<li className="nav-item">
							<NavDropdown title="Experiences" id="experiences-dropdown" className="site-nav-dropdown">
								{isHome ? (
									<>
										<Scroll
											className="dropdown-item"
											to="experiences"
											smooth
											duration={500}
											offset={SCROLL_OFFSET}
											href="#experiences"
											onClick={handleCollapse}
										>
											Education
										</Scroll>
										<span className="dropdown-item disabled" aria-disabled="true">
											Work
										</span>
										<Scroll
											className="dropdown-item"
											to="portfolio"
											smooth
											duration={500}
											offset={SCROLL_OFFSET}
											href="#portfolio"
											onClick={handleCollapse}
										>
											Portfolio
										</Scroll>
									</>
								) : (
									<>
										<Link className="dropdown-item" to="/#experiences" onClick={handleCollapse}>
											Education
										</Link>
										<span className="dropdown-item disabled" aria-disabled="true">
											Work
										</span>
										<Link className="dropdown-item" to="/#portfolio" onClick={handleCollapse}>
											Portfolio
										</Link>
									</>
								)}
							</NavDropdown>
						</li>
						<li className="nav-item">{renderSectionLink("contact", "Contact")}</li>
					</Nav>

					<Nav className="site-nav-links site-nav-secondary" as="ul">
						<li className="nav-item">
							<Link className="nav-link site-nav-link" to="/blog" onClick={handleCollapse}>
								Blog <span className="soon-badge">Soon</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link site-nav-link" to="/courses" onClick={handleCollapse}>
								Courses <span className="soon-badge">Soon</span>
							</Link>
						</li>
					</Nav>

					<Nav className="site-socials" as="ul">
						{socialLinks.map(({ href, label, Icon }) => (
							<li className="nav-item" key={label}>
								<a
									className="nav-link social-link"
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={label}
								>
									<Icon className="social-icon" fontSize="medium" />
									<span className="d-lg-none">{label}</span>
								</a>
							</li>
						))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
