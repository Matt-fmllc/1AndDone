


import React from 'react';
import './../App.css';

import TextField from '@material-ui/core/TextField';

import { screenStates } from "./../App.js";

export default class JoinLeagueControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xID: 0,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        const target = event.target;
        const name = target.name;

        if (name === 'IDBox') {
            this.setState({ xID: target.value });
        }
    }

    handleClick(event) {
        const target = event.target;
        const name = target.name;

        if (name === 'submitbutton') {
            // validate entries

            //alert(this.state.xID);

            // if entries are valid, process
            this.props.setLeagueID(this.state.xID);
            this.props.setScreen(screenStates.MAIN);

            return;
        } else if (name === 'back') {
            this.props.setScreen(screenStates.LANDING);
            return;
        }
    }

    render() {
        return (
            <header className="App-Body" >
                <div>
                    <TextField
                        name="IDBox"
                        label="League ID"
                        id="float"
                        margin="dense"
                        variant="outlined"
                        formControlProps={{ fullWidth: true }}
                        onChange={this.handleOnChange}
                    />
                    <button name="submitbutton" type="button" color="success" onClick={this.handleClick}>Submit</button>
                    <button name="back" type="button" color="success" onClick={this.handleClick}>Back</button>
                </div>
            </header>
        );
    }
}
