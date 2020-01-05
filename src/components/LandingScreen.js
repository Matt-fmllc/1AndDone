


import React from 'react';
import './../App.css';

import Button from '@material-ui/core/Button';

import BackGroundImage from "./../assets/images/14-Team-NFL-Playoffs.jpg";
//import BannerImage from "./../assets/images/one-and-done-series-banner-3.jpg"
import BannerImage from "./../assets/images/one-and-done-typewriter.jpg"

import { screenStates } from "./../App.js";


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
        return (
            <div>
                <div class="App-Body">
                    <img src={BannerImage} alt=""
                        width="450"
                        height="100"
                        style={{
                            position: 'relative',
                            verticalAlign: 'center',
                        }}
                    />
                    <div class="landing_container" >
                        <img src={BackGroundImage} alt=""
                            width="400"
                            style={{
                                position: 'relative',
                                verticalAlign: 'center',
                            }}
                        />
                        <Button 
                            name="signin"
                            variant="contained"
                            color="secondary"
                            type="button"
                            style={{ position: 'absolute', left: '25%', top: '90%' }}
                            onClick={() => this.handleClick("1")}
                            >
                            Sign In
                        </Button>
                        <Button 
                            name="join"
                            variant="contained"
                            color="secondary"
                            type="button"
                            style={{ position: 'absolute', left: '50%', top: '90%' }}
                            onClick={()=>this.handleClick("2")}
                            >
                            Join League
                        </Button>
                    </div >
                </div>
            </div>
        )
    }
}


