


import React from 'react';
import './../App.css';

import { screenStates } from "./../App.js";


export default class LandingControl extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const target = event.target;
        const name = target.name;

        switch (name) {
            case "signin":
                this.props.setScreen(screenStates.LOGIN);
                return;
            case "join":
                this.props.setScreen(screenStates.JOIN_LEAGUE);
                return;
            default:
                alert("unknown");
                return;
        }
    }

    render() {
        return (
            <header className="App-Body">
                <div>
                    <button name="signin" type="button" color="success" onClick={this.handleClick}>Sign In</button>
                    <button name="join" type="button" color="success" onClick={this.handleClick}>Join League</button>
                </div >
            </header>
        )
    }
}
