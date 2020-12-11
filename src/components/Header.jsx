import React from "react";
import "./../styles/Navbar.scss";

const Header = () => (
	<header>
		<div className="Navbar navbar navbar-expand-lg">
			<div className="container justify-content-md-center">
				<div className="row collapse navbar-collapse" id="navbarSupportedContent">
					<div className="colnavbar-brand">
						<a href="">
							<img src="src/assets/images/logo.png" alt="jjfd_logo" width="50" height="50" />
						</a>
					</div>
					<ul className="col navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="">
								HOME
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="">
								PROFILE
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="">
								EXPIRIENCES
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="">
								CONTACT
							</a>
						</li>
					</ul>
					<ul className="col-sm-4 navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="">
								BLOG
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="">
								MY COURSES
							</a>
						</li>
					</ul>
					<ul className="col col-lg-2 navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="">
								Instagram
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="">
								Twitter
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="">
								LinkedIn
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="">
								Github
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
);

export default Header;
