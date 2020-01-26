


import React from 'react';
import './../../App.css';
import './../MainScreen.css';

import { mainScreenStates } from './../MainScreen.js'

import BackGroundImage from "./../../assets/images/MainImage.jpg"

import HomeComponent from "./HomeComponent.js"
import StandingsComponent2 from "./StandingsComponent2"
import PicksComponent3 from "./PicksComponent3"
import Results from "./ResultsComponent"
import Settings from "./SettingsComponent"





function MainBackGroundComponent() {
    const screenWidth = window.innerWidth - 120;
    const screenHeight = window.innerHeight;

    return (
        <React.Fragment>
            <div className="main_background_image_wrapper">
                <img src={BackGroundImage} alt=""
                    width={screenWidth}
                    height={screenHeight}
                    display="block"
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
                        <HomeComponent />
                    </div>                        
                );
            case mainScreenStates.PICKS:
                return (
                    <div className="main_container">
                        <MainBackGroundComponent />
                        <PicksComponent3 />
                    </div>                        
                );
            case mainScreenStates.STANDINGS:
                return (
                    <div className="main_container">
                        <MainBackGroundComponent />
                        <StandingsComponent2 />
                    </div>                        
                );
            case mainScreenStates.SETTINGS:
                return (
                    <div className="main_container">
                        <MainBackGroundComponent />
                        <Settings />
                    </div>                        
                );
            case mainScreenStates.RESULTS:
                return (
                    <div className="main_container">
                        <MainBackGroundComponent />
                        <Results />
                    </div>
                );
        }
    }

}