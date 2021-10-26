import React, {Component} from 'react';
import {Button, Grid} from "@material-ui/core";
import {connect} from "react-redux";

const mapStateToProps = (props) => {
    return {
        data: props
    }
}

class QuizResult extends Component {
    constructor(props) {
        super(props);
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
                    xs={12}
                >
                    <Grid item xs={12}>
                        <h1>Thank you {this.props.data.userName}</h1>
                        <h3>You responded correctly yo {this.props.data.rightAnswers} out of {this.props.data.questionLength}</h3>
                    </Grid>
                    <Grid>
                        <Button
                            variant="contained"
                            size={"large"}
                            color={'primary'}
                            href={"/"}
                        >
                            One more
                        </Button>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default connect(mapStateToProps)(QuizResult);