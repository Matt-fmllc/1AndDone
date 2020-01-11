



import React from 'react';
import './../App.css';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//import Button from "./custombuttons/Button.js";

import BackGroundImage from "./../assets/images/nfl-wild-card.jpg";

import { screenStates } from "./../App.js";



//style = {{ position: 'relative', left: '15%', }}




export default class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.ButtonRow = this.ButtonRow.bind(this);
        this.forgotPasswordRow = this.forgotPasswordRow.bind(this);
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
            case "forgot_password":
                this.props.setScreen(screenStates.MAIN);
                return;
            default:
                alert("unknown");
        }

    }

    ImageRow() {
        return (
            <img src={BackGroundImage} alt=""
                width="400"
                style={{
                    position: 'relative',
                    verticalAlign: 'center',
                }}
            />
        );

    }

    TextBoxRow() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
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
                <Grid item xs={4}>
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
            </React.Fragment>
        );
    }

    ButtonRow() {
        return (
            <React.Fragment>
                <Grid item xs={3}>
                    <Button
                        type="button"
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={() => this.handleClick("back")}
                        formControlProps={{
                            fullWidth: true
                        }}
                        >
                        Back
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        type="button"
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={() => this.handleClick("signin")}
                        formControlProps={{
                            fullWidth: true
                        }}
                        >
                        Sign In
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        type="button"
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={() => this.handleClick("new")}
                        formControlProps={{
                            fullWidth: true
                        }}
                        >
                        Create
                    </Button>
                </Grid>
            </React.Fragment>
        );
    }

    forgotPasswordRow() {
        return (
            <Button
                color="secondary"
                size="small"
                href=""
                style={{
                    position: 'relative',
                    verticalAlign: 'center',
                    left: '15%'
                }}
                onClick={() => this.handleClick("forgot_password")}
                >
                Forgot Password?
            </Button>
        );
    }
//            <div class="App-Body">

    render() {
        return (
            <div >
            <div class="landing_container">
                <this.ImageRow />
                <Grid container spacing={2}
                    style={{ justify: 'center', position: 'absolute', top: '40%', left: '20%', }} >
                    <Grid container item xs={12} spacing={2}>
                        <this.TextBoxRow />
                    </Grid>
                        <Grid container item xs={10} spacing={1} style={{
                            position: 'relative',
                            verticalAlign: 'center',
                            left: '1%'
                        }} >
                        <this.ButtonRow />
                    </Grid>
                    <Grid container item xs={12} spacing={1} >
                        <this.forgotPasswordRow />
                    </Grid> 
                </Grid>
            </div>
            </div>
        );
    }

    //render() {
    //    return (
    //        <div class="App-Body">
    //            <div class="landing_container" >
    //                <img src={BackGroundImage} alt=""
    //                    width="400"
    //                    style={{
    //                        position: 'relative',
    //                        verticalAlign: 'center',
    //                    }}
    //                /> 
    //                <Grid
    //                    container justify="center"
    //                    spacing={1}
    //                    textAlign="center"
    //                    style={{ position: 'absolute', left: '0%', top: '40%', }}
    //                >
    //                    <Grid item xs={10} sm={4}>
    //                        <TextField
    //                            label="Email"
    //                            id="float1"
    //                            size="normal"
    //                            margin="dense"
    //                            variant="outlined"
    //                            color="secondary"
    //                            style={{ backgroundColor: '#ffff' }}
    //                            formControlProps={{
    //                                fullWidth: true
    //                            }}
    //                        />
    //                    </Grid>
    //                    <Grid item xs={10} sm={4}>
    //                        <TextField
    //                            label="Password"
    //                            id="float2"
    //                            type="password"
    //                            size="normal"
    //                            margin="dense"
    //                            variant="outlined"
    //                            color="secondary"
    //                            style={{ backgroundColor: '#ffff' }}
    //                            formControlProps={{
    //                                fullWidth: true
    //                            }}
    //                        />
    //                    </Grid>
    //                </Grid>
    //            </div>
    //            <div  style={{ position: 'absolute', left: '42%', top: '60%',}}>
    //                    <Button
    //                        type="button"
    //                        variant="contained"
    //                        color="secondary"
    //                        onClick={() => this.handleClick("back")}
    //                        >
    //                        Back
    //                    </Button>
    //                    <Button
    //                        type="button"
    //                        variant="contained"
    //                        color="secondary"
    //                        style={{ position: 'relative', left: '15%', }}
    //                        onClick={() => this.handleClick("signin")}
    //                        >
    //                        Sign In
    //                    </Button>
    //            </div>
    //        </div>
    //    )
    //}
}