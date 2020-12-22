import React, { Component } from "react";
import CountDown from "../../components/CountDown";
import "../../styles/ComingSoon.scss";

class ComingSoon extends Component {
	state = {
		countdown: {
			futureDate: "2020-12-31 00:00:00"
		}
	};
	render() {
		const { countdown } = this.state;
		return (
			<div className="comingsoon container ">
				<div className="row align-items-center">
					<div className="time col-6">
						<div className="row">
							<h1 className="fs-1 fw-bolder">Time Remaining!</h1>
						</div>
						<CountDown futureDate={countdown.futureDate}></CountDown>
						<br />
						<div className="row justify-content-end">
							<button className="btn btn-secondary">MORE INFORMATION</button>
							<button className="btn btn-primary disabled">NOTIFY ME!</button>
						</div>
					</div>
					<div className="coming col">
						<h1 className="fs-1 fw-bolder">This Page is Coming Soon!</h1>
						<h5 className="fw-normal">
							This sections is still in building. It will be available for your soon, with some awesome stuff to
							checkout here!
						</h5>
					</div>
				</div>
			</div>
		);
	}
}
export default ComingSoon;
