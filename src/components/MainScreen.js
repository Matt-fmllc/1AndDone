

import React from 'react'

import './MainScreen.css'
import './sidebar/SideBar'


import { sideBarItems } from "./ComponentConstants"
//import SideBar from './sidebar/SideBar'
import SideBar2 from './sidebar/SideBar'
import MainComponent from "./mainscreen/MainComponent"


export const mainScreenStates = {
    HOME: 'Home',
    STANDINGS: 'Standings',
    PICKS: 'Picks',
    RESULTS: 'Results',
    SETTINGS: 'Settings',
}

export default class MainScreenController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xCurScrn: mainScreenStates.HOME,
            width: 0,
            height: 0,
        }

        this.setMainScreenState.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    setMainScreenState = (state) => {
        this.setState({ xCurScrn: state });
    }

    render() {
//        const screenWidth = window.innerWidth;
//        const screenHeight = window.innerHeight;

        const PCWrapperStyle = {
            height: this.state.height,
            width: this.state.width,
        }
        //const PCWrapperStyle2 = {
        //    height: this.state.height,
        //}

        //className = "main_container"

        return (
            <div className="main_screen" style={PCWrapperStyle} >
                <div className="main_container" style={PCWrapperStyle}>
                    <div className="main_container-sidebar" >
                        <SideBar2  
                            items={sideBarItems}
                            setState={this.setMainScreenState.bind(this)}
                        />
                    </div>
                    <div className="main_container_content" >
                        <MainComponent 
                            curScreen={this.state.xCurScrn}
                        />
                    </div>
                </div>
            </div>
        );
    }
}