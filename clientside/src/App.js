import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Quiz from "./components/Quiz";
import Home from "./components/Home";
import QuizResult from "./components/QuizResult";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            selectedQuiz: ''
        }
        this.handleStartQuiz = this.handleStartQuiz.bind(this);
    }

    handleStartQuiz({userName, quizType}){
        console.log(userName, quizType);
        this.setState({
            name: userName,
            selectedQuiz: quizType
        });

    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" exact>
                        <Home
                            handleStartQuiz={this.handleStartQuiz}
                        />
                    </Route>
                    <Route path="/quiz">
                        <Quiz name={this.state.name} quizeType={this.state.selectedQuiz} />
                    </Route>
                    <Route path="/result" component={QuizResult} />
                </div>
            </Router>
        );
    }
}

export default App;