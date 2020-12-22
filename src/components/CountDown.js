import React, { Component } from "react";
import moment, { duration } from "moment";
import "../styles/CountDown.scss";

class CountDown extends Component {
	state = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	};

	addZeros(value) {
		value = String(value);
		while (value.length < 2) {
			value = `0${value}`;
		}
		return value;
	}

	setCountDown() {
		const futureDate = moment(this.props.futureDate);
		const today = moment();
		const clockDuration = duration(futureDate.diff(today));
		const days = Math.floor(clockDuration.asDays());
		const hours = clockDuration.hours();
		const minutes = clockDuration.minutes();
		const seconds = clockDuration.seconds();

		this.setState({ days, hours, minutes, seconds });
	}

	componentDidMount() {
		this.setCountDown();
		this.interval = setInterval(() => {
			this.setCountDown();
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div className="countdown row">
				{Object.keys(this.state).map((key, i) => (
					<div className="countdown-segment col-2 ">
						<span className="countdown-segment-number row justify-content-center ">
							{this.addZeros(this.state[key])}
						</span>
						<span className="countdown-segment-caption row justify-content-center">{key.toUpperCase()}</span>
					</div>
				))}
			</div>
		);
	}
}
export default CountDown;
