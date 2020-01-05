import React from 'react';
import './App.css';

import 'typeface-roboto';

import JoinLeagueControl from "./components/JoinLeagueScreen.js"
import LoginControl from "./components/LoginScreen.js"
import LandingControl from "./components/LandingScreen.js"



export const screenStates = {
    LANDING: 'landing',
    LOGIN: 'login',
    JOIN_LEAGUE: 'join_league',
    CREATE_ACCOUNT: 'create_account',
    MAIN: 'main'
}


class OneAndDone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xCurScreen: screenStates.LANDING,
            xLeagueID: 0,
            xSignedIn: false,
        };

    }

    setSignedIn = (value) => {
        this.setState({
            xSignedIn: value
        })
    }

    setCurScreen = (value) => {
        this.setState({
            xCurScreen: value
        })
    }

    setLeagueID = (value) => {
        this.setState({
            xLeagueID: value
        })
    }

    render() {
        const curScreen = this.state.xCurScreen;
        switch (curScreen) {
            
            case screenStates.LANDING:
                return (
                    <LandingControl setScreen={this.setCurScreen.bind(this)}/>
                );
            case screenStates.LOGIN:
                return (
                    <LoginControl setScreen={this.setCurScreen.bind(this)} setSignIn={this.setSignedIn.bind(this)} />
                );
            case screenStates.JOIN_LEAGUE:
                return (
                    <JoinLeagueControl setScreen={this.setCurScreen.bind(this)} setLeagueID={this.setLeagueID.bind(this)} />
                );
            case screenStates.CREATE_ACCOUNT:
            case screenStates.MAIN:
            default:
                return null;
        }
    }
}

function App() {
    return (
        <header className="App-Body">
            <div className="OneAndDone">
                <OneAndDone />
            </div>
        </header>
    );

}

export default App;
