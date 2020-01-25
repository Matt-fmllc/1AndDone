

import React from 'react';
import "./../MainScreen.css"

import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles/';

const Rounds = [
    { id: 'WildCard', label: 'WildCard' },
    { id: 'Divisional', label: 'Divisional' },
    { id: 'Semis', label: 'Semis' },
    { id: 'SuperBowl', label: 'SuperBowl' },
]

const qbChoices = [
    'P Mahomes',
    'A Rodgers',
    'R Wilson',
]

const wrChoices = [
    'T Hill',
    'D Adams',
    'J Edelman'
]

const rbChoices = [
    'M Lynch',
    'D Cook',
    'D Walker',
]

const teChoices = [
    'T Kelce',
    'G Kittle',
    'D Pitta',
]

const dChoices = [
    'Seattle',
    'Green Bay',
    'Minnesota',
]

const kChoices = [
    'kicker 1',
    'kicker 2',
    'kicker 3',
]





//function CreateRowData(round, { qbs }, { rbs }, { wrs }, { tes }, { des }, { kis }) {
//    return {
//        round, qbs, rbs, wrs, tes, des, kis };
//}





const useStyles = makeStyles({
    root: {
        width: '90%',
        position: 'absolute',
        top: '5%',
        left: '5%',
        border: '1px solid green',
    },
    container: {
        position: 'relative',
        height: '100%',
        width: '100%',
        border: '1px solid red',
    },
    header: {
        fontSize: '36pt',
    },
    header_cell: {
        padding: '2px',
        fontSize: '16pt',
    },
    cell: {
        fontSize: '8pt',
    },
    dyncell: {
        padding: '2px',
        align: 'center',
    },
    downarrowbutton: {
        color: 'white',
        width: '100px',
        maxWidth: '15px',
        backgroundColor: '#00bcd4',
        '&:hover': {
            backgroundColor: '#00bcd4',
        },

    }
});


function PositionDropDown({ Players }) {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const anchorRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const ColorButton = withStyles(theme => ({
        root: {
            fontSize: '0.6em',
            padding: '5px',
            color: 'white',
            width: '80px',
            backgroundColor: '#00bcd4',
            '&:hover': {
                backgroundColor: '#00bcd4',
            },
        },
    }))(Button);

    const ColorButtonDownArrow = withStyles(theme => ({
        root: {
            padding: '0px',
            margin: '0px',
            color: 'white',
            minwidth: '100px',
            maxWidth: '100px',
            backgroundColor: '#00bcd4',
            '&:hover': {
                backgroundColor: '#00bcd4',
            },
            border: "1px solid green",
        },
    }))(Button);

    // abstract this button group out so that it can toggle between button group and labels
    return (
        <div className="picks_screen_table_item">
            <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                <ColorButton size="small"
                    >{Players[selectedIndex]}
                </ColorButton>
                <ColorButtonDownArrow
                    size="small" 
                    color="primary"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label={Players[0]}
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <ArrowDropDownIcon  />
                </ColorButtonDownArrow>
            </ButtonGroup>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList className="picks_screen_menu_list_dropdown" id="split-button-menu">
                                    {Players.map((option, index) => (
                                        <MenuItem className="picks_screen_menu_list_item"
                                            disableGutters='true'
                                            component='h2'
                                            key={option}
                                            disabled={index === selectedIndex}
                                            selected={index === selectedIndex}
                                            onClick={event => handleMenuItemClick(event, index)}
                                            style={{
                                                fontSize: '0.7em',
                                                padding: '4px',
                                            }}
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}


// row is locked, no changes can be made
function DrawStaticRow(props) {
    const classes = useStyles();

    return (
        <TableRow>
            <TableCell className={classes.dyncell}
                key='round'
                align='center'
                style={{ minWidth: 70, maxWidth: 70 }}
            >
                {Rounds[props.Round].label}
            </TableCell>
            <TableCell className={classes.cell}
                key='qb1'
                align='center'
                style={{ minWidth: 40, maxWidth: 40 }}
            >
                {props.QBs[1]}
            </TableCell>
            <TableCell className={classes.cell}
                key='rb1'
                align='center'
                style={{ minWidth: 40, maxWidth: 40 }}
            >
                {props.RBs[1]}
            </TableCell>
            <TableCell className={classes.cell}
                key='wr1'
                align='center'
                style={{ minWidth: 40, maxWidth: 40 }}
            >
                {props.WRs[1]}
            </TableCell>
            <TableCell className={classes.cell}
                key='te1'
                align='center'
                style={{ minWidth: 40, maxWidth: 40 }}
            >
                {props.TEs[1]}
            </TableCell>
            <TableCell className={classes.cell}
                key='de1'
                align='center'
                style={{ minWidth: 40, maxWidth: 40 }}
            >
                {props.DFs[1]}
            </TableCell>
            <TableCell className={classes.cell}
                key='ki1'
                align='center'
                style={{ minWidth: 40, maxWidth: 40 }}
            >
                {props.KIs[1]}
            </TableCell>
        </TableRow>
    );
}

// row is not locked, user gets drop down to select form
function DrawDynamicRow(props) {

    const classes = useStyles();

    return (
        <TableRow>
            <TableCell className={classes.dyncell}
                key='round'
                align='center'
                style={{ minWidth: 70, maxWidth: 70 }}
            >
                {Rounds[props.Round].label}
            </TableCell>
            <TableCell className={classes.dyncell} key='qb1' align='center' >
                <PositionDropDown Players={props.QBs} />
            </TableCell>
            <TableCell className={classes.dyncell} key='rb1' align='center' >
                <PositionDropDown Players={props.RBs} />
            </TableCell>
            <TableCell className={classes.dyncell} key='wr1' align='center' >
                <PositionDropDown Players={props.WRs} />
            </TableCell>
            <TableCell className={classes.dyncell} key='te1' align='center' >
                <PositionDropDown Players={props.TEs} />
            </TableCell>
            <TableCell className={classes.dyncell} key='de1' align='center' >
                <PositionDropDown Players={props.DFs} />
            </TableCell>
            <TableCell className={classes.dyncell} key='ki1' align='center' >
                <PositionDropDown Players={props.KIs} />
            </TableCell>
        </TableRow>
    );

}


function DrawRow(props) {

    if (props.Locked === 'true') {
        return(
            <DrawStaticRow 
                Round={props.Round}
                QBs={props.QBs} RBs={props.RBs}
                WRs={props.WRs} TEs={props.TEs}
                DFs={ props.DFs} KIs={ props.KIs} />
        );
    } else {
        return (
            < DrawDynamicRow
                Round={props.Round}
                QBs={props.QBs} RBs={props.RBs}
                WRs={props.WRs} TEs={props.TEs}
                DFs={props.DFs} KIs={props.KIs} />
        );
    }

}


function DrawTableHeader() {

    const classes = useStyles();

    const columns = [
        { id: 'Round', label: "Round", minWidth: 70, maxWidth: 70, align: 'center' },
        { id: 'QB', label: "QB", minWidth: 40, maxWidth: 40, align: 'center' },
        { id: 'RB', label: "RB", minWidth: 40, maxWidth: 40, align: 'center' },
        { id: 'WR', label: "WR", minWidth: 40, maxWidth: 40, align: 'center' },
        { id: 'TE', label: "TE", minWidth: 40, maxWidth: 40, align: 'center' },
        { id: 'DE', label: "DE", minWidth: 40, maxWidth: 40, align: 'center' },
        { id: 'KI', label: "KI", minWidth: 40, maxWidth: 40, align: 'center' },
    ]

    return (
        <TableRow>
            {columns.map(column => (
                <TableCell className={classes.header_cell}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    );
}

function DrawTable(props) {

    const classes = useStyles();

    return (
        <Paper className={classes.root} aria-label="sticky table">
            <TableContainer className={classes.container}>
                <Table stickyheader='true' size='small' >
                    <TableHead className={classes.header}>
                        <DrawTableHeader />
                    </TableHead>
                    <TableBody>
                        <DrawRow
                            Round='0' Locked='true'
                            QBs={props.QBs} WRs={props.WRs}
                            RBs={props.RBs} TEs={props.TEs}
                            DFs={props.DFs} KIs={props.KIs} />
                        <DrawRow 
                            Round='1' Locked='false'
                            QBs={props.QBs} WRs={props.WRs}
                            RBs={props.RBs} TEs={props.TEs}
                            DFs={props.DFs} KIs={props.KIs} />
                        <DrawRow 
                            Round='2' Locked='false'
                            QBs={props.QBs} WRs={props.WRs}
                            RBs={props.RBs} TEs={props.TEs}
                            DFs={props.DFs} KIs={props.KIs} />
                        <DrawRow 
                            Round='3' Locked='false'
                            QBs={props.QBs} WRs={props.WRs}
                            RBs={props.RBs} TEs={props.TEs}
                            DFs={props.DFs} KIs={props.KIs} />
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default class PicksComponent2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            QBs: qbChoices,
            WRs: wrChoices,
            RBs: rbChoices,
            TEs: teChoices,
            DFs: dChoices,
            KIs: kChoices,
        }
    }
    render() {
        return (
                <DrawTable
                    QBs={this.state.QBs} WRs={this.state.WRs}
                    RBs={this.state.RBs} TEs={this.state.TEs}
                    DFs={this.state.DFs} KIs={this.state.KIs} />
        );
    }
}



