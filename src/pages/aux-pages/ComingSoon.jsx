import React, { Component } from "react";
import CountDown from "../../components/CountDown";
import "../../styles/ComingSoon.scss";

class ComingSoon extends Component {
	state = {
		countdown: {
			futureDate: "2026-12-30 00:00:00"
		}
	};
	render() {
		const { countdown } = this.state;
		return (
			<div className="comingsoon container">
				<div className="aux-grid">
					<div className="time">
						<p className="comingsoon-eyebrow">THE COUNTDOWN IS ON</p>
						<h2 className="comingsoon-countdown-title">Time until launch</h2>
						<CountDown futureDate={countdown.futureDate} />
						<div className="aux-actions">
							<button className="btn btn-secondary">MORE INFORMATION</button>
							<button className="btn btn-primary disabled">NOTIFY ME!</button>
						</div>
					</div>
					<div className="coming">
						<p className="comingsoon-eyebrow">A NEW EXPERIENCE IS ON ITS WAY</p>
						<h1 className="comingsoon-title">This page is coming soon.</h1>
						<h5 className="fw-normal">
							This section is still being built. It will be available soon, with some awesome things to explore.
						</h5>
					</div>
				</div>
			</div>
		);
	}
}
export default ComingSoon;
