

import React from 'react'

import './MainScreen.css'
import './sidebar/SideBar'


import { sideBarItems } from "./ComponentConstants"
//import SideBar from './sidebar/SideBar'
import SideBar2 from './sidebar/SideBar'
import MainScreen from "./mainscreen/MainComponent"


export const mainScreenStates = {
    HOME: 'Home',
    STANDINGS: 'Standings',
    PICKS: 'Picks',
    SETTINGS: 'Settings',
}

export default class MainScreenController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xCurScrn : mainScreenStates.HOME,
        }

        this.setMainScreenState.bind(this);
    }

    setMainScreenState = (state) => {
        this.setState({ xCurScrn: state });
    }

    render() {
        //const screenWidth = window.innerWidth;
        //const screenHeight = window.innerHeight;

        //const PCWrapperStyle = {
        //    height: screenHeight,
        //    width: screenWidth,
        //}

        return (
            <div className="main_screen" >
                <div className="main_container" >
                    <SideBar2 items={sideBarItems} setState={this.setMainScreenState.bind(this)} class="main_container-sidebar"/>
                    <div class="main_content">
                        <MainScreen curScreen={this.state.xCurScrn} class="main_container-content" />
                    </div>
                </div>
            </div>
        );
    }
}