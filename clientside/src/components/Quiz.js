import React, {Component} from 'react';
import {connect} from "react-redux";
import { Button, Grid} from "@material-ui/core";
import {Redirect} from "react-router";


const mapStateToProps = (props) => {
    return {
        data: props
    }
}

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 0,
            rightAnswers: 0,
            selectedQuiz: null,
            showResult: false
        }
        this.renderSelectedQuiz = this.renderSelectedQuiz.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
    }

    handleAnswer(isCorrect){
        if (isCorrect) {
            this.setState((state, props) => ({
                rightAnswers: state.rightAnswers + 1
            }))
        }

        let selectedQuiz = this.renderSelectedQuiz();
        console.log(selectedQuiz)
        if (this.state.currentQuestion + 1 > selectedQuiz.questions.length - 1) {
            // window.location.replace("/");
            return <Redirect to={{pathname: '/'}} push/>
        }else{
            this.setState((state, props) => ({
                currentQuestion: state.currentQuestion + 1
            }))
        }
        console.log(this.state.currentQuestion)

    }

    renderSelectedQuiz()
    {
        return this.props.quizzes.find(quiz => quiz.id === this.props.data.quizType);
    }

    render() {
        const selectedQuiz = this.renderSelectedQuiz();

        return (
            <>
                <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                xs={12}
                sm={9}
                md={6}
            >
                <Grid item xs={12}>
                    <h1>{selectedQuiz.questions[this.state.currentQuestion].questionsTitle}</h1>
                </Grid>
                {selectedQuiz.questions[this.state.currentQuestion].answers.map(question =>
                    <Grid item xs={12} sm={6}>
                        <Button
                            variant="contained"
                            size={"large"}
                            style={{width: "200px"}}
                            onClick={() => this.handleAnswer(question.isCorrect)}
                        >
                            {question.text}
                        </Button>
                    </Grid>)}
            </Grid>
            </>
        );
    }
}

export default connect(mapStateToProps)(Quiz);