



import React from 'react';
import './../App.css';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import Button from "./custombuttons/Button.js";

import { screenStates } from "./../App.js";


export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // put in logic here to validate signin

        // if valid, go to main screen
        this.props.setScreen(screenStates.MAIN);
    }

    render() {
        return (
            <header className="App-Body" >
                <div>
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
                    </Grid>
                    <Button type="button" color="success" onClick={this.handleClick}>Sign In</Button>
                </div>
            </header>
        )
    }
}