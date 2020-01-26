


import React from 'react';
import './../App.css';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import BackGroundImage from "./../assets/images/14-Team-NFL-Playoffs.jpg";
//import BannerImage from "./../assets/images/one-and-done-series-banner-3.jpg"
import BannerImage from "./../assets/images/one-and-done-typewriter.jpg"

import { screenStates } from "./../App.js";


function DrawButtons(props) {
    return (
        <React.Fragment>
            <Button
                name="signin"
                variant="contained"
                color="secondary"
                type="button"
                style={{ position: 'absolute', left: '30%', top: '70%', width:'125px' }}
                onClick={() => props.handleClick("1")}
            >
                Sign In
            </Button>
            <Button
                name="join"
                variant="contained"
                color="secondary"
                type="button"
                style={{ position: 'absolute', left: '55%', top: '70%', width:'125px' }}
                onClick={() => props.handleClick("2")}
            >
                Join League
            </Button>
        </React.Fragment>
    );
}


export default class LandingControl extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(name) {
        switch (name) {
            case "1":
                this.props.setScreen(screenStates.LOGIN);
                return;
            case "2":
                this.props.setScreen(screenStates.JOIN_LEAGUE);
                return;
            default:
                alert("unknown");
                return;
        }
    }

   render() {
        const screenWidth = window.innerWidth;

        return (
            <Paper >
                <img src={BannerImage} alt=""
                    width="100%"
                    height="100"
                    top="0"
                    left="0"
                    style={{
                        position: 'relative',
                        verticalAlign: 'center',
                    }}
                />
                <img src={BackGroundImage} alt=""
                    width={screenWidth}
                    height="100%"
                    style={{
                        position: 'relative',
                        verticalAlign: 'center',
                    }}
                />
                <DrawButtons handleClick={this.handleClick.bind(this)}/>
            </Paper>
        )
    }
}


