import React, {Component} from 'react';
// instead of importing the container from material-ui
import {Grid, Button, TextField, FormControl, InputLabel, Select, MenuItem, Box, NativeSelect} from "@material-ui/core";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizType: '20',
            userName: ''
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
                               id="select"
                               value={this.state.quizType}
                               onChange={this.handleQuizTypeChanged}
                           >
                               <MenuItem value="10">Ten</MenuItem>
                               <MenuItem value="20">Twenty</MenuItem>
                           </Select>
                       </Box>
                    </Grid>
                    <Grid item xs={12} >
                       <Box sx={{ m: "1rem" }}>
                           <Button href="/quiz" variant="contained" onClick={this.startQuiz}>START</Button>
                       </Box>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default Home;