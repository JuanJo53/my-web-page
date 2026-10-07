import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import "../../styles/Login.scss";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = event => {
		event.preventDefault();
	};

	return (
		<main className="admin-login">
			<section className="admin-login-card" aria-labelledby="admin-login-title">
				<div className="admin-login-mark" aria-hidden="true">
					<span>JJ</span>
				</div>
				<p className="admin-login-eyebrow">ADMINISTRATION</p>
				<h1 id="admin-login-title">Welcome back</h1>
				<p className="admin-login-description">Sign in to access the admin area.</p>

				<form className="admin-login-form" onSubmit={handleSubmit}>
					<div className="admin-login-field">
						<label htmlFor="admin-email">Email address</label>
						<input
							id="admin-email"
							name="email"
							type="email"
							autoComplete="username"
							placeholder="you@example.com"
							required
						/>
					</div>
					<div className="admin-login-field">
						<label htmlFor="admin-password">Password</label>
						<div className="admin-login-password">
							<input
								id="admin-password"
								name="password"
								type={showPassword ? "text" : "password"}
								autoComplete="current-password"
								placeholder="Enter your password"
								required
							/>
							<button
								className="admin-login-password-toggle"
								type="button"
								onClick={() => setShowPassword(visible => !visible)}
								aria-label={showPassword ? "Hide password" : "Show password"}
								aria-pressed={showPassword}
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</button>
						</div>
					</div>
					<button className="admin-login-submit" type="submit">
						Sign in
					</button>
				</form>
			</section>
		</main>
	);
};

export default Login;
