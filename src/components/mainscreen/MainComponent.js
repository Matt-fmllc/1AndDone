


import React from 'react';
import './../../App.css';
import './../MainScreen.css';

import { mainScreenStates } from './../MainScreen.js'

import Button from '@material-ui/core/Button';
import BackGroundImage from "./../../assets/images/MainImage.jpg"

class Settings extends React.Component {
    render() {
        return null;
    }
}

class Picks extends React.Component {
    render() {
        return null;
    }
}

class Standings extends React.Component {
    render() {
        return null;
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            xCurScreen: mainScreenStates.HOME,
        }

        this.handleClick = this.handleClick.bind(this);
    }



    handleClick() {
        alert("click");
        return;
    }


    render() {
        const screenWidth = window.innerWidth - 120;
        const screenHeight = window.innerHeight + 2;

        return (
            <React.Fragment>
                <div class="home_button_wrapper" style={{ width: screenWidth, height: screenHeight }} >
                    <div class ="home_button_create_league">
                        <Button 
                            type="button"
                            size="large"
                            variant="contained"
                            color="primary"
                            onClick={() => this.handleClick()}
                            formControlProps={{
                                fullWidth: true
                            }}
                            >
                            Create League
                        </Button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


function MainBackGroundComponent() {
    const screenWidth = window.innerWidth - 120;
    const screenHeight = window.innerHeight + 2;

    return (
        <React.Fragment>
            <div className="main_background_image_wrapper">
                <img src={BackGroundImage} alt=""
                    width={screenWidth}
                    height={screenHeight}
                />
            </div>
            <div className="main_background_text_wrapper" >
                <h1 align="center" >League Name</h1>
            </div>
        </React.Fragment>
    );
}


export default class MainComponent extends React.Component {


    render() {
        switch (this.props.curScreen) {
            default:
            case mainScreenStates.HOME:
                return (
                    <div className="main_container">
                        <MainBackGroundComponent />
                        <Home />
                    </div>                        
                );
            case mainScreenStates.PICKS:
                return (
                    <div className="main_container">
                        <MainBackGroundComponent />
                        <Picks />
                    </div>                        
                );
            case mainScreenStates.STANDINGS:
                return (
                    <div className="main_container">
                        <MainBackGroundComponent />
                        <Standings />
                    </div>                        
                );
            case mainScreenStates.SETTINGS:
                return (
                    <div className="main_container">
                        <MainBackGroundComponent />
                        <Settings />
                    </div>                        
                );
        }
    }

}