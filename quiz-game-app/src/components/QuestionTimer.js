import React from 'react';

export default class QuestionTimer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			minutes: 0,
			seconds: 15,
		}
	}

	componentDidMount() {
		this.myInterval = setInterval(() => {
			const { seconds, minutes } = this.state

			if (seconds > 0) {
				this.setState(({ seconds }) => ({
					seconds: seconds - 1
				}))
			}
			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(this.myInterval)
				} else {
					this.setState(({ minutes }) => ({
						minutes: minutes - 1,
						seconds: 59
					}))
				}
			}
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.myInterval)
	}

	render() {
		const { minutes, seconds } = this.state;

		if (minutes === 0 && seconds === 0) {
			this.props.onTimeEnd && this.props.onTimeEnd();

			return (<div> <span>Time is up!</span> </div>)
		}

		return (
			<div>
				{<span> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>}
			</div>
		)
	}
}