import React from 'react';
import Game from './Game';
import Button from '@material-ui/core/Button';
import quizlogo from './../quizlogo.png';
import * as CONSTS from './../constants.js';

export default class QuizPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			gameStarted: false,
			questions: null
		}
	}

	handleStart() {
		let apiUrl = CONSTS.API_URL;

		fetch(apiUrl + '/questions?amount=10&category=9&difficulty=easy&type=multiple')
			.then(response => response.json())
			.then((data) => {
				this.setState({ gameStarted: true, questions: data });
			})
			.catch((err) => {
				console.log(err);
				alert('error occured!');
			})
	}

	welcome() {
		return (
			<div >
				<img src={quizlogo} style={{ width: 300, margin: 24 }} alt="logo" />
				<div>
					<Button variant="contained" color="primary" style={{ width: 300 }}
						onClick={this.handleStart.bind(this)}
					>GET STARTED</Button>
				</div>
			</div>
		)
	}

	render() {

		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div style={{ marginTop: 100 }}>

							{this.state.gameStarted ?
								<Game questions={this.state.questions} />
								:
								this.welcome()
							}
						</div>
					</div>
				</div>
			</div>
		);

	}
}