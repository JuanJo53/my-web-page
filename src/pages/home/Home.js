import React from "react";
import { Link as Scroll } from "react-scroll";
import * as Icon from "react-bootstrap-icons";

import { useTheme } from "../../context/ThemeContext";
import darkLogo from "../../assets/images/brand-logo/Logo-Blanco.png";
import lightLogo from "../../assets/images/brand-logo/Logo-turquesa-claro.png";
import "../../styles/Home.scss";

const Home = () => {
	const { isDark } = useTheme();
	const heroLogo = isDark ? darkLogo : lightLogo;

	return (
		<section id="home" className="hero-section" aria-labelledby="hero-title">
			<div className="hero-pattern" aria-hidden="true" />
			<div className="hero-glow" aria-hidden="true" />
			<div className="container hero-content">
				<div className="row align-items-center gy-5">
					<div className="col-lg-6">
						<p className="hero-eyebrow">Systems engineer · Software builder</p>
						<h1 id="hero-title" className="hero-title">
							Hi, I&apos;m <span className="hero-name">Juan Jo.</span>
						</h1>
						<p className="hero-copy">
							I build technology with a simple belief: every problem can be solved with software. This is my digital CV
							— a place to see how I work, what I&apos;ve built, and how we can collaborate.
						</p>
						<div className="hero-actions">
							<Scroll
								className="btn btn-primary"
								to="profile"
								smooth
								duration={500}
								offset={-88}
								href="#profile"
								role="button"
								tabIndex={0}
							>
								View profile
							</Scroll>
							<Scroll
								className="btn btn-secondary"
								to="contact"
								smooth
								duration={500}
								offset={-88}
								href="#contact"
								role="button"
								tabIndex={0}
							>
								Get in touch
							</Scroll>
						</div>
					</div>
					<div className="col-lg-6 d-flex justify-content-center">
						<div className="hero-visual">
							<img className="hero-logo" src={heroLogo} alt="Juan Jo brand logo" />
						</div>
					</div>
				</div>
				<Scroll
					className="hero-scroll"
					to="profile"
					smooth
					duration={500}
					offset={-88}
					href="#profile"
					aria-label="Scroll to profile"
					tabIndex={0}
				>
					<Icon.ChevronDown size={28} />
					<span>Scroll</span>
				</Scroll>
			</div>
		</section>
	);
};

export default Home;
