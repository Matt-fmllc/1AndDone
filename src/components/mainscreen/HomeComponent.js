


import React from 'react';

//import Button from '@material-ui/core/Button';
//import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
//import { withStyles } from '@material-ui/styles/';

import BackGroundImage from "./../../assets/images/14-Team-NFL-Playoffs.jpg";


const useStyles = makeStyles({
    root: {
        width: '90%',
        height: '90%',
        position: 'relative',
        top: '5%',
        left: '5%',
    },
    container: {
        position: 'relative',
        height: '100%',
        width: '100%',
    },
});

//const ColorButton = withStyles(theme => ({
//    root: {
//        fontSize: '0.6em',
//        padding: '5px',
//        color: 'white',
//        width: '120px',
//        backgroundColor: '#00bcd4',
//        '&:hover': {
//            backgroundColor: '#00bcd4',
//        },
//    },
//}))(Button);


// move these to the menu bar at the top
// display
//      create league
//      manage league
//      dropdown which shows current league
//function DrawButtons(props) {

//    return (
//        <ButtonGroup variant="text" >
//            <ColorButton 
//                type="button"
//                size="small"
//                color="primary"
//                onClick={(event) => props.onClick(event)}
//                formControlProps={{
//                    fullWidth: true
//                }}
//            >
//                Create League
//            </ColorButton>
//            <ColorButton
//                type="button"
//                size="small"
//                color="primary"
//                onClick={(event) => props.onClick(event)}
//                formControlProps={{
//                    fullWidth: true
//                }}
//            >
//                Manage League
//            </ColorButton>
//        </ButtonGroup>
//    );
//}

function DrawBackGround(props) {
    return(
        <img src={BackGroundImage} alt=""
            width="100%"
            maxHeight="441px"
            style={{
                position: 'relative',
            }}
        />
    )
}

//<DrawButtons onClick={(event) => props.onClick(event)} />

function DrawHomeScreen(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root} >
            <Grid className={classes.container} >
                <DrawBackGround />
            </Grid>
        </Paper>
    );
}

export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        alert("click");
        return;
    }

    render() {
        return (
            <DrawHomeScreen onClick={(event)=>this.handleClick(event)} />
        )

    }

}

