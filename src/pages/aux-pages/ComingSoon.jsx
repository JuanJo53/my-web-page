import React, { Component } from "react";
import CountDown from "../../components/CountDown";

class ComingSoon extends Component {
	state = {
		countdown: {
			futureDate: "2020-12-31 00:00:00"
		}
	};
	render() {
		const { countdown } = this.state;
		return (
			<div className="comingsoon container">
				<CountDown futureDate={countdown.futureDate}></CountDown>
			</div>
		);
	}
}
export default ComingSoon;
