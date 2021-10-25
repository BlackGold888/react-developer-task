import React, {Component} from 'react';
// instead of importing the container from material-ui
import {Grid, Button, TextField, FormControl, InputLabel, Select, MenuItem, Box, NativeSelect} from "@material-ui/core";
import {setQuizType, setUserName} from "../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const mapDispatchToProps = (dispatch) => {
    return {
        setUserNames: (name) => dispatch(setUserName(name)),
        setQuizTypes: (type) => dispatch(setQuizType(type)),
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizType: 1,
            userName: '',
        };
        this.startQuiz = this.startQuiz.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleQuizTypeChanged = this.handleQuizTypeChanged.bind(this);
    }

    handleChangeName(e){
        console.log(e.target.value)
        this.setState({
            userName: e.target.value
        })
    }

    handleQuizTypeChanged(e)
    {
        console.log(e.target.value)
        this.setState({
            quizType: e.target.value
        })
    }

    startQuiz()
    {
        this.props.setUserNames(this.state.userName)
        this.props.setQuizTypes(this.state.quizType)
        this.props.handleStartQuiz(this.state);
    }

    render() {
        return (
            <>
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    xs={2}
                >
                    <Grid item xs={12}>
                        <h1>Technical task</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-basic"
                            label="Please enter your name"
                            variant="outlined"
                            onChange={this.handleChangeName}
                        />
                    </Grid>
                    <Grid item xs={12} >
                       <Box sx={{ m: "1rem" }}>
                           <Select
                               labelId="label"
                               fullWidth
                               onChange={this.handleQuizTypeChanged}
                               value={this.props.quizzes[this.state.quizType - 1].id}
                           >
                               {this.props.quizzes.map(quiz => <MenuItem key={quiz.id} value={quiz.id}>{quiz.quizType}</MenuItem>)}
                           </Select>
                       </Box>
                    </Grid>
                    <Grid item xs={12} >
                       <Box sx={{ m: "1rem" }}>
                           <Link to={{pathname: "/quiz",}}>
                               <Button variant="contained" onClick={this.startQuiz}>START</Button>
                           </Link>

                       </Box>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default connect(null, mapDispatchToProps)(Home);