


import React from 'react';

import "./../MainScreen.css"

//import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'

const Players = [
    { name: 'player1', label: 'Bobba OReilly' },
    { name: 'player2', label: 'Bell' },
    { name: 'player3', label: 'Biv' },
    { name: 'player4', label: 'Devoe' },
    { name: 'player5', label: 'jimi' },
    { name: 'player6', label: 'John' },
    { name: 'player7', label: 'Tiffany' },
    { name: 'player8', label: 'Dorothy' },
]

const Standing = [
    { position: 'First' },
    { position: '2' },
    { position: '3' },
    { position: '4' },
    { position: '5' },
    { position: '6' },
    { position: '7' },
    { position: 'Last' },
]

const Scores = [
    { score: '12' },
    { score: '34' },
    { score: '56' },
    { score: '78' },
    { score: '90' },
    { score: '21' },
    { score: '43' },
    { score: '65' },
]



export default class StandingsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick.bind(this);
    }

    handleClick = () => {
        alert("Clicked");
        return null;
    }

    render() {
        const screenWidth = window.innerWidth - 120;
        const screenHeight = window.innerHeight;

        const SCWrapperStyle = {
            height: screenHeight,
            width: screenWidth,
        }

        const SCStyle = {
            color: 'white',
            dense: true,
        }

        return (
            <div className="standings_screen_wrapper" style={SCWrapperStyle} >
                <Grid container spacing={0} className="standings_screen_grid_wrapper">
                    <Grid item>
                        <Grid container spacing={0}>
                            <Grid item>
                                <List className="standings_screen_list_wrapper" dense style={SCStyle}>
                                    {
                                        Standing.map(({ position, ...rest }) => (
                                            <ListItem className="standings_screen_list_position" key={position} {...rest}>
                                                <ListItemText className="standings_screen_list_element">{position}</ListItemText>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </Grid>
                            <Grid item>
                                <List className="standings_screen_list_wrapper" dense style={SCStyle}>
                                    {
                                        Players.map(({ label, name, ...rest }) => (
                                            <ListItem className="standings_screen_list" key={name} {...rest} >
                                                <ListItemText className="standings_screen_list_element">{label}</ListItemText>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </Grid>
                            <Grid item>
                                <List className="standings_screen_list_wrapper" dense style={SCStyle}>
                                    {
                                        Scores.map(({ score, ...rest }) => (
                                            <ListItem className="standings_screen_list" key={score} {...rest} >
                                                <ListItemText className="standings_screen_list_element">{score}</ListItemText>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}



//<List className="standings_screen_list_wrapper" dense style={SCStyle}>
//    {
//        Standing.map(({ position, ...rest }) => (
//            <ListItem className="standings_screen_list_position" key={position} {...rest}>
//                <ListItemText className="standings_screen_list_element">{position}</ListItemText>
//            </ListItem>
//        ))
//    }
//    {
//        Players.map(({ label, name, ...rest }) => (
//            <ListItem className="standings_screen_list" onClick={() => this.handleClick({ name })} key={name} button {...rest} >
//                <ListItemText className="standings_screen_list_element">{label}</ListItemText>
//            </ListItem>
//        ))
//    }
//</List>
//<List className="standings_screen_list_wrapper" dense disablePadding="true" style={SCStyle}>
//    {
//        Players.map(({ label, name, ...rest }) => (
//            <ListItem className="standings_screen_list" onClick={() => this.handleClick({ name })} key={name} button {...rest} >
//                <ListItemText className="standings_screen_list_element">{label}</ListItemText>
//            </ListItem>
//        ))
//    }
//</List>

