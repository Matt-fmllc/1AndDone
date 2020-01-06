



import React from 'react';
import './../App.css';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//import Button from "./custombuttons/Button.js";

import BackGroundImage from "./../assets/images/nfl-wild-card.jpg";

import { screenStates } from "./../App.js";


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
            <div class="App-Body">
                <div class="landing_container" >
                    <img src={BackGroundImage} alt=""
                        width="400"
                        style={{
                            position: 'relative',
                            verticalAlign: 'center',
                        }}
                    /> 
                    <Grid
                        container justify="center"
                        spacing={1}
                        textAlign="center"
                        style={{ position: 'absolute', left: '10%', top: '50%', }}
                    >
                        <Grid item xs={10} sm={4}>
                            <TextField
                                label="Email"
                                id="float1"
                                size="normal"
                                margin="dense"
                                variant="outlined"
                                color="secondary"
                                style={{ backgroundColor: '#ffff' }}
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
                                color="secondary"
                                style={{ backgroundColor: '#ffff' }}
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </Grid>
                    </Grid>
                </div>
                <div  style={{ position: 'relative', left: '25%', top: '50%',}}>
                        <Button
                            type="button"
                            variant="contained"
                            color="secondary"
                            onClick={() => this.handleClick("back")}
                            >
                            Back
                        </Button>
                        <Button
                            type="button"
                            variant="contained"
                            color="secondary"
                            style={{ position: 'relative', left: '15%', }}
                            onClick={() => this.handleClick("signin")}
                            >
                            Sign In
                        </Button>
                </div>
            </div>
        )
    }
}