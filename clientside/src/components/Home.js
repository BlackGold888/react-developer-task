import React, {Component} from 'react';
// instead of importing the container from material-ui
import {Grid, Button, TextField, FormControl, InputLabel, Select, MenuItem, Box, NativeSelect} from "@material-ui/core";
import {setQuizType, setUserName} from "../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Redirect} from "react-router";

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
            redirect: false
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
        if (this.state.userName.length < 3 || this.state.userName.length > 12) {
            return toast.error('Min name length 3 and Max 12!', {
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }else{
            this.props.setUserNames(this.state.userName);
            this.props.setQuizTypes(this.state.quizType)
            this.props.handleStartQuiz(this.state);
            this.setState({
                redirect: true
            })
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={"/quiz"} />
        }

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
                            label="Enter your name"
                            variant="outlined"
                            onChange={this.handleChangeName}
                            min={3}
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
                           <Button variant="contained" onClick={this.startQuiz}>START</Button>
                       </Box>
                    </Grid>
                    <ToastContainer
                        position="bottom-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </Grid>
            </>
        );
    }
}

export default connect(null, mapDispatchToProps)(Home);