import React, { Component } from "react";
import CountDown from "../../components/CountDown";
import "../../styles/ComingSoon.scss";

class ComingSoon extends Component {
	state = {
		countdown: {
			futureDate: "2021-06-30 00:00:00"
		}
	};
	render() {
		const { countdown } = this.state;
		return (
			<div className="comingsoon container-fluid container-lg">
				<div className="row align-items-center">
					<div className="time col col-sm-auto col-lg-4 col-lg-6 col-md-auto">
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
					<div className="coming col col-sm-auto col-lg-4 col-lg-5 col-md-auto ">
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
