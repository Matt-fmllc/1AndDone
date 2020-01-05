import React from 'react';
import './App.css';

import 'typeface-roboto';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'

import Button from "./components/custombuttons/Button.js";


class LandingControl extends React.Component {
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
                alert("signin pressed");
                return;
            case "join":
                this.props.setScreen(screenStates.JOIN_LEAGUE);
                alert("join pressed");
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

class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.setScreen(screenStates.JOIN_LEAGUE);
    }

    render() {
        return (
            <header className="App-Body" >
                <div>
                    <Grid container justify="center" spacing={1} textAlign="center" >
                        <Grid item xs={10} sm={4}>
                            <TextField
                                label="Email"
                                id="float1"
                                size="normal"
                                margin="dense"
                                variant="outlined"
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </Grid>
                        <Grid item xs={10} sm={4}>
                            <TextField
                                label="Password"
                                id="float2"
                                type="password"
                                size="normal"
                                margin="dense"
                                variant="outlined"
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button type="button" color="success" onClick={this.handleClick}>Sign In</Button>
                </div>
            </header>
        )
    }
}

const screenStates = {
    LANDING: 'landing',
    LOGIN: 'login',
    JOIN_LEAGUE: 'join_league',
    CREATE_ACCOUNT: 'create_account'
}

class OneAndDone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xCurScreen: screenStates.LANDING,
        };
    }

    setCurScreen = (value) => {
        this.setState({
            xCurScreen: value
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
                    <LoginControl setScreen={this.setCurScreen.bind(this)}/>
                );
            case screenStates.JOIN_LEAGUE:
            case screenStates.CREATE_ACCOUNT:
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

//<LoginControl />
//<Button type="button" color="primary">Primary</Button>
//<Button type="button" color="info">Info</Button>
//<Button type="button" color="success">Success</Button>
//<Button type="button" color="danger">Danger</Button>
//<Button type="button" color="warning">Warning</Button>

export default App;
