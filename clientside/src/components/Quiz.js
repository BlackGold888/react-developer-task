import React, {Component} from 'react';
import {connect} from "react-redux";
import userNameReducer from "../reducers";

const mapStateToProps = (props) => {
    return {
        data: props
    }
}

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>{this.props.data.name}</h1>
                <h1>{this.props.data.quizType}</h1>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Quiz);