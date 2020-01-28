

import React from 'react'

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableRow';

import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles/';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '5%',
        minHeight: '30px',
        position: 'absolute',
        top: '0px',
        left: '0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#d3d3d3',
    },

    table: {
        border: '3px solid red',
        justify: "right",
        alignItems:"right",
        flexDirection: 'row',
    },

    table_cell: {
        align: 'center',
        border: '3px solid black',
    },

    buttons: {
    }
});

const ColorButton = withStyles(theme => ({
    root: {
        fontSize: '0.6em',
        padding: '2px',
        color: 'white',
        width: '120px',
        height: '20px',
        top: '20%', 
        border: '1px solid white',
        backgroundColor: '#00bcd4',
        '&:hover': {
            backgroundColor: '#00bcd4',
        },
    },
}))(Button);



function DrawButtons(props) {

    return (
        <ButtonGroup variant="text" >
            <ColorButton 
                type="button"
                size="small"
                onClick={(event) => props.handleClick(event)}
                formControlProps={{
                    fullWidth: true
                }}
            >
                Create League
            </ColorButton>
            <ColorButton
                type="button"
                size="small"
                onClick={(event) => props.handleClick(event)}
                formControlProps={{
                    fullWidth: true
                }}
            >
                Manage League
            </ColorButton>
        </ButtonGroup>
    );
}

function DrawTableCell(props) {
    const classes = useStyles();

    return (
            <DrawButtons handleClick={(event) => props.handleClick(event)} />
    );
}

function RenderMenuBar(props) {
    const classes = useStyles();
        
    return (
        <Paper className={classes.root} >
            <DrawTableCell handleClick={(event) => props.handleClick(event)} />
        </Paper>
    );
}

export default class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLeague: 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        alert("click");
        return;
    }

    render() {
        return (
            <RenderMenuBar CurLeage={this.state.selectedLeague} handleClick={(event) => this.handleClick(event)} />            
        );
    }
}