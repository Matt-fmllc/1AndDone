



import React from 'react';
import './../App.css';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//import Button from "./custombuttons/Button.js";

import BackGroundImage from "./../assets/images/14-Team-NFL-Playoffs.jpg";

import { screenStates } from "./../App.js";


//const images = [
//    {
//        url: "./../assets/images/14-Team-NFL-Playoffs.jpg",
//        title: "playoff_brackets_image",
//    }
//]


export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name) {
        // put in logic here to validate signin

        switch (name) {
            case "signin":
                this.props.setScreen(screenStates.MAIN);
                return;
            case "back":
                this.props.setScreen(screenStates.LANDING);
                return;
            default:
                alert("unknown");
        }

    }

    render() {
        return (
            <div>
                <img src={BackGroundImage} alt="" width="400"/> 
                    <Grid container justify="center" spacing={1} textAlign="center" >
                        <Grid item xs={10} sm={4}>
                            <TextField
                                label="Email"
                                id="float1"
                                size="normal"
                                margin="dense"
                                variant="outlined"
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={10} sm={4}>
                            <TextField
                                label="Password"
                                id="float2"
                                type="password"
                                size="normal"
                                margin="dense"
                                variant="outlined"
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={10} sm={4}>
                            <Button
                                type="button"
                                color="primary"
                                variant="contained"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                onClick={() => this.handleClick("signin")}
                                >
                                Sign In
                            </Button>
                        </Grid>
                    <Grid item xs={10} sm={4}>
                        <Button
                            type="button"
                            color="primary"
                            variant="contained"
                            onClick={() => this.handleClick("signin")}
                            >
                            Sign In
                        </Button>
                    </Grid>

                    </Grid>
                    <Button
                        type="button"
                        color="primary"
                        variant="contained"
                        onClick={() => this.handleClick("signin")}
                        >
                        Sign In
                    </Button>
                    <Button
                        type="button"
                        color="secondary"
                        variant="contained"
                        onClick={() => this.handleClick("back")}
                        >
                        Back
                    </Button>
                </div>
        )
    }
}