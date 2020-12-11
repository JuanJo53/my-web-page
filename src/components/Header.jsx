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
							<a className="nav-link navlinks" href="">
								HOME
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link navlinks" href="">
								PROFILE
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link navlinks" href="">
								EXPIRIENCES
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link navlinks" href="">
								CONTACT
							</a>
						</li>
					</ul>
					<ul className="col-sm-4 navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link navlinks" href="">
								BLOG
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link navlinks" href="">
								MY COURSES
							</a>
						</li>
					</ul>
					<ul className="col col-lg-2 navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="https://www.instagram.com/juanjo53fd/" target="_blank">
								<img src="src/assets/images/instagram-white.png" alt="github" width="30" height="30" />
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="https://twitter.com/JuanJo53FD" target="_blank">
								<img src="src/assets/images/twitter-white.png" alt="github" width="30" height="30" />
							</a>
						</li>
						<li className="nav-item active">
							<a
								className="nav-link "
								href="https://www.linkedin.com/in/juan-josé-fernández-duarte-096274163"
								target="_blank"
							>
								<img src="src/assets/images/linkedin-white.png" alt="github" width="30" height="30" />
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="https://github.com/JuanJo53" target="_blank">
								<img src="src/assets/images/github-white.png" alt="github" width="30" height="30" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
);

export default Header;
