import React from 'react';
import Button from '@material-ui/core/Button';
import QuestionTimer from './QuestionTimer';
import correct from './../correct.png';
import wrong from './../wrong.png';

export default class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentQuestionIndex: 0,
            points: 0,
            pageState: 'q'

        }

        this.state.questionOrders = [];

        this.state.questions = Object.assign([], this.props.questions);

        this.state.questions.forEach((item, index) => {
            item.incorrectAnswers.push(item.correctAnswer);

            item.incorrectAnswers = item.incorrectAnswers.sort(() => Math.random() - 0.5);

            this.state.questionOrders.push(index);

        });

        this.state.questions = this.state.questions.sort(() => Math.random() - 0.5);

    }

    handleChoice(e) {
        
        let currentQuestion = this.state.questions[this.state.currentQuestionIndex];
        currentQuestion.selected = e.currentTarget.innerText;
        if (currentQuestion.correctAnswer.toUpperCase() == e.currentTarget.innerText.toUpperCase()) {
            // correct answer
            this.setState({ pageState: 'c', points: this.state.points + 100 });
        }
        else {
            // wrong
            this.setState({ pageState: 'w' });
        }
    }

    nextButtons() {
        return (
            this.state.currentQuestionIndex == this.state.questions.length - 1 ?
                <Button variant="contained" color="primary" style={{ width: 300 }} onClick={() => {
                    this.setState({
                        pageState: 'r'
                    });
                }}> Complete </Button>
                :
                <Button variant="outlined" color="primary" style={{ width: 300 }} onClick={() => {
                    this.setState({
                        currentQuestionIndex: this.state.currentQuestionIndex + 1,
                        pageState: 'q'
                    });
                }}> Next </Button>

        )
    }

    correnctAnswerPage() {
        return <div>
            <img src={correct} style={{ width: 90, margin: 24 }} alt="correct" />
            <br />
            <p>Correct!</p>
            <p>You have earned 100 points</p>
            <p>Total: {this.state.points} points</p>
            <br />
            {this.nextButtons()}

        </div>;
    }
    wrongAnswerPage() {
        return <div>
            <img src={wrong} style={{ width: 90, margin: 24 }} alt="wrong" />
            <br />

            <p>Wrong!</p>
            <p>Total: {this.state.points} points</p>
            <br />
            {this.nextButtons()}

        </div>;
    }

    resultPage() {
        return <div>
            <h3> Results </h3>
            <hr />
            {this.state.questions.map((q, index) => {

                return (<div>
                    <div style={{ marginTop: 48, marginBottom: 48, fontSize: 17 }}>
                        <b> {index + 1} -) {q.question} </b>
                    </div>
                    <div style={{ margin: 'auto', width: '40%' }}>
                        {q.incorrectAnswers.map(a => {
                            return <div style={{ padding: 12, width: '100%' }}>
                                <div style={{
                                    margin: 'auto', paddingTop: 6, position: 'relative', textAlign: 'center',
                                    height: 40, backgroundColor: a.toUpperCase() == q.selected.toUpperCase() ? 'blue' : '#AAAAAA',
                                    color: 'white'
                                }}
                                >
                                    <div style={{ position: 'absolute', marginLeft: 12 }}>
                                        {a.toUpperCase() == q.correctAnswer.toUpperCase() ? <img src={correct} style={{ width: 20, margin: 4 }} alt="correct" /> : <span></span>}

                                        {a.toUpperCase() != q.correctAnswer.toUpperCase() && a.toUpperCase() == q.selected.toUpperCase() ? <img src={wrong} style={{ width: 20, margin: 4 }} alt="wrong" /> : <span></span>}
                                    </div>
                                    <span style={{}}> {a}  </span>

                                </div>
                            </div>
                        })}
                    </div>

                </div>)
            })}
        </div>;
    }

    onTimeEnd() {
        this.setState({ pageState: 'w' });

        let currentQuestion = this.state.questions[this.state.currentQuestionIndex];
        currentQuestion.selected = '';

    }

    questionPage() {
        let currentQuestion = this.state.questions[this.state.currentQuestionIndex];

        let answers = currentQuestion.incorrectAnswers;

        return <div>
            <div style={{ marginTop: 48, marginBottom: 48, fontSize: 17 }}>
                <b> {currentQuestion.question} </b>
            </div>
            <div>
                {answers.map(a => {
                    return <div style={{ padding: 12 }}>
                        <Button variant="outlined" color="primary" style={{ width: 300 }}
                            onClick={this.handleChoice.bind(this)}> {a} </Button>
                    </div>
                })}
            </div>
        </div>
    }

    getContentWithPageType() {
        if (this.state.pageState == 'c') { // correct answer page
            return this.correnctAnswerPage();
        }
        else if (this.state.pageState == 'w') { // wrong answer page
            return this.wrongAnswerPage();
        }
        else if (this.state.pageState == 'r') { // result page
            return this.resultPage();
        }
        else if (this.state.pageState == 'q') { // question page
            return this.questionPage();
        }
    }

    render() {

        return (
            <div>
                <div style={{
                    width: '80%', height: 80, backgroundColor: 'antiquewhite', margin: 'auto', paddingLeft: 24, paddingRight: 24,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                }}>
                    <div>Question {this.state.currentQuestionIndex + 1}  / {this.state.questions.length}</div>
                    <div> Points: {this.state.points}  </div>
                    {this.state.pageState == 'q' &&
                        <div> Remaining time:  <QuestionTimer onTimeEnd={this.onTimeEnd.bind(this)} /> </div>
                    }

                </div>

                {this.getContentWithPageType()}

            </div>
        )
    }
}