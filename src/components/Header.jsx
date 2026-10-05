import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { GitHub, Instagram, LinkedIn, Menu, DarkMode, LightMode, X } from "@mui/icons-material";

import { useTheme } from "../context/ThemeContext";
import darkLogo from "../assets/images/brand-logo/Logo-blanco-small.png";
import lightLogo from "../assets/images/brand-logo/Logo-turquesa-small.png";
import "../styles/Navbar.scss";

const SCROLL_OFFSET = -88;
const EXPERIENCE_SECTION_IDS = ["experiences", "work", "portfolio"];
const TRACKED_SECTION_IDS = ["home", "profile", ...EXPERIENCE_SECTION_IDS, "contact"];

const socialLinks = [
	{ href: "https://www.instagram.com/juanjo53fd/", label: "Instagram", Icon: Instagram },
	{ href: "https://x.com/JuanJo53FD", label: "X", Icon: X },
	{ href: "https://www.linkedin.com/in/juan-josé-fernández-duarte-096274163", label: "LinkedIn", Icon: LinkedIn },
	{ href: "https://github.com/JuanJo53", label: "GitHub", Icon: GitHub }
];

const Header = () => {
	const { isDark, handleToggleTheme } = useTheme();
	const location = useLocation();
	const [expanded, setExpanded] = useState(false);
	const [experiencesOpen, setExperiencesOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const isHome = location.pathname === "/";
	const logo = isDark ? darkLogo : lightLogo;
	const isExperienceActive = isHome && EXPERIENCE_SECTION_IDS.includes(activeSection);

	useEffect(() => {
		if (!isHome) {
			setActiveSection("");
			return undefined;
		}

		const updateActiveSection = () => {
			const currentSection = TRACKED_SECTION_IDS.reduce((activeId, sectionId) => {
				const section = document.getElementById(sectionId);
				return section && section.getBoundingClientRect().top <= 140 ? sectionId : activeId;
			}, "home");

			setActiveSection(currentSection);
		};

		updateActiveSection();
		window.addEventListener("scroll", updateActiveSection, { passive: true });
		window.addEventListener("resize", updateActiveSection);

		return () => {
			window.removeEventListener("scroll", updateActiveSection);
			window.removeEventListener("resize", updateActiveSection);
		};
	}, [isHome]);

	const handleCollapse = () => {
		setExpanded(false);
		setExperiencesOpen(false);
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
		<header className="site-navbar" role="navigation" aria-label="Primary">
			<div className="container site-navbar-inner">
				<div className="navbar-toolbar">
					<button
						type="button"
						className="theme-toggle"
						onClick={handleToggleTheme}
						aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
					>
						{isDark ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
						<span className="theme-toggle-label">{isDark ? "Light" : "Night"}</span>
					</button>
					<button
						type="button"
						className="site-nav-toggle"
						aria-controls="primary-navigation"
						aria-expanded={expanded}
						onClick={() => setExpanded(!expanded)}
					>
						<Menu className="menu-icon" fontSize="large" />
					</button>
				</div>

				<nav id="primary-navigation" className={`site-nav-collapse${expanded ? " is-open" : ""}`}>
					<div className="nav-section nav-primary-section">
						<Link className="navbar-brand site-brand" to="/" onClick={handleCollapse} aria-label="Juan Jo home">
							<img src={logo} alt="Juan Jo logo" />
						</Link>
						<ul className="site-nav-links">
							<li className="nav-item">{renderSectionLink("home", "Home")}</li>
							<li className="nav-item">{renderSectionLink("profile", "Profile")}</li>
							<li className="nav-item">
								<div className="site-nav-dropdown">
									<button
										type="button"
										className={`dropdown-toggle${isExperienceActive ? " active" : ""}`}
										aria-expanded={experiencesOpen}
										onClick={() => setExperiencesOpen(!experiencesOpen)}
									>
										Experiences
									</button>
									<div className={`dropdown-menu${experiencesOpen ? " is-open" : ""}`}>
										{isHome ? (
											<>
												<Scroll
													className={`dropdown-item${activeSection === "experiences" ? " active" : ""}`}
													to="experiences"
													smooth
													duration={500}
													offset={SCROLL_OFFSET}
													href="#experiences"
													onClick={handleCollapse}
												>
													Education
												</Scroll>
												<span
													className={`dropdown-item disabled${activeSection === "work" ? " active" : ""}`}
													aria-disabled="true"
												>
													Work
												</span>
												<Scroll
													className={`dropdown-item${activeSection === "portfolio" ? " active" : ""}`}
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
												<Link
													className={`dropdown-item${activeSection === "experiences" ? " active" : ""}`}
													to="/#experiences"
													onClick={handleCollapse}
												>
													Education
												</Link>
												<span
													className={`dropdown-item disabled${activeSection === "work" ? " active" : ""}`}
													aria-disabled="true"
												>
													Work
												</span>
												<Link
													className={`dropdown-item${activeSection === "portfolio" ? " active" : ""}`}
													to="/#portfolio"
													onClick={handleCollapse}
												>
													Portfolio
												</Link>
											</>
										)}
									</div>
								</div>
							</li>
							<li className="nav-item">{renderSectionLink("contact", "Contact")}</li>
						</ul>
					</div>

					<div className="nav-section nav-secondary-section">
						<ul className="site-nav-links site-nav-secondary">
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
						</ul>
					</div>

					<div className="nav-section nav-social-section">
						<ul className="site-socials">
							{socialLinks.map(({ href, label, Icon }) => (
								<li className="nav-item" key={label}>
									<a className="nav-link social-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
										<Icon className="social-icon" fontSize="medium" />
										<span className="social-label">{label}</span>
									</a>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
