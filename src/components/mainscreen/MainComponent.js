


import React from 'react';
import './../../App.css';
import './../MainScreen.css';

import { mainScreenStates } from './../MainScreen.js'

//import BackGroundImage from "./../../assets/images/MainImage.jpg"

import HomeComponent from "./HomeComponent.js"
import StandingsComponent2 from "./StandingsComponent2"
import PicksComponent3 from "./PicksComponent3"
import Results from "./ResultsComponent"
import Settings from "./SettingsComponent"





//function MainBackGroundComponent() {
    //const screenWidth = window.innerWidth - 120;
    //const screenHeight = window.innerHeight;

    //return (
    //    <React.Fragment>
    //        <div className="main_background_image_wrapper">
    //            <img src={BackGroundImage} alt=""
    //                width={screenWidth}
    //                height={screenHeight}
    //                display="block"
    //            />
    //        </div>
    //        <div className="main_background_text_wrapper" >
    //            <h1 align="center" >League Name</h1>
    //        </div>
    //    </React.Fragment>
    //);

    //return null;
//}


export default class MainComponent extends React.Component {


    render() {
        switch (this.props.curScreen) {
            default:
            case mainScreenStates.HOME:
                return (
                    <HomeComponent />
                );
            case mainScreenStates.PICKS:
                return (
                    <PicksComponent3 />
                );
            case mainScreenStates.STANDINGS:
                return (
                    <StandingsComponent2 />
                );
            case mainScreenStates.SETTINGS:
                return (
                    <Settings />
                );
            case mainScreenStates.RESULTS:
                return (
                    <Results />
                );
        }
    }

}