

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

const Positions = [
    { id: 'QB', label: 'QB' },
    { id: 'RB', label: 'RB' },
    { id: 'WR', label: 'WR' },
    { id: 'TE', label: 'TE' },
    { id: 'DF', label: 'DF' },
    { id: 'KI', label: 'KI' },
]

const qbChoices = [
    'P Mahomes',
    'A Rodgers',
    'R Wilson',
    'L Jackson',
]

const wrChoices = [
    'T Hill',
    'D Adams',
    'J Edelman',
    'D Samuel'
]

const rbChoices = [
    'M Lynch',
    'D Cook',
    'D Walker',
    'R Mostert',
]

const teChoices = [
    'T Kelce',
    'G Kittle',
    'D Pitta',
    'D Fisrter'
]

const dChoices = [
    'Seattle',
    'Green Bay',
    'Minnesota',
    'Baltimore',
]

const kChoices = [
    'kicker 1',
    'kicker 2',
    'kicker 3',
    'kicker 4',
]



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
                    <ArrowDropDownIcon />
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

function DrawStaticCell(props) {
    const classes = useStyles();

    return (
        <TableCell className={classes.dyncell}
            key={props.text}
            align='center'
            style={{ minWidth: 70 }}
        >
            {props.text}
        </TableCell>
    );
}


function DrawDynamicCell(props) {
    const classes = useStyles();

    return (
        <TableCell className={classes.dyncell} key='qb1' align='center' >
            <PositionDropDown Players={props.Players} />
        </TableCell>
    );
}

// row is locked, no changes can be made
function DrawStaticRow(props) {

    return (
        <TableRow>
            <DrawStaticCell text={Positions[props.Pos].label} />
            <DrawStaticCell text={props.Players[0]} />
            <DrawStaticCell text={props.Players[1]} />
            <DrawStaticCell text={props.Players[2]} />
            <DrawStaticCell text={props.Players[3]} />
        </TableRow>
    );
}

// row is not locked, user gets drop down to select form
// locked starts at 0, ie-> at qb's
function DrawDynamicRow(props) {

    var Cell1 = <DrawDynamicCell Players={props.Players} />;
    var Cell2 = <DrawDynamicCell Players={props.Players} />;
    var Cell3 = <DrawDynamicCell Players={props.Players} />;
    var Cell4 = <DrawDynamicCell Players={props.Players} />;
    switch (props.Locked) {
        case "1":
            Cell1 = <DrawStaticCell text={props.Players[0]} />
            break;
        case "2":
            Cell1 = <DrawStaticCell text={props.Players[0]} />
            Cell2 = <DrawStaticCell text={props.Players[1]} />
            break;
        case "3":
            Cell1 = <DrawStaticCell text={props.Players[0]} />
            Cell2 = <DrawStaticCell text={props.Players[1]} />
            Cell3 = <DrawStaticCell text={props.Players[2]} />
            break;
        case "4":
            Cell1 = <DrawStaticCell text={props.Players[0]} />
            Cell2 = <DrawStaticCell text={props.Players[1]} />
            Cell3 = <DrawStaticCell text={props.Players[2]} />
            Cell4 = <DrawStaticCell text={props.Players[3]} />
            break;
        default:
            break;
    }

    return (
        <TableRow>
            <DrawStaticCell text={Positions[props.Pos].label} />
            {Cell1}
            {Cell2}
            {Cell3}
            {Cell4}
        </TableRow>
    );

}


function DrawRow(props) {

    if (props.Locked === 'true') {
        return (
            <DrawStaticRow
                Pos={props.Pos}
                Locked={props.Locked}
                Players={props.Players}
            />
        );
    } else {
        return (
            < DrawDynamicRow
                Pos={props.Pos}
                Locked={props.Locked}
                Players={props.Players}
            />
        );
    }

}


function DrawTableHeader() {

    const classes = useStyles();

    const columns = [
        { id: 'Pos', label: "Pos", minWidth: 70, maxWidth: 70, align: 'center' },
        { id: 'WildCard', label: "Wildcard", minWidth: 40, maxWidth: 40, align: 'center' },
        { id: 'Division', label: "Divisional", minWidth: 40, maxWidth: 40, align: 'center' },
        { id: 'Semis', label: "Semis", minWidth: 40, maxWidth: 40, align: 'center' },
        { id: 'SuperBowl', label: "SuperBowl", minWidth: 40, maxWidth: 40, align: 'center' },
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
                            Pos='0'
                            Locked='2'
                            Players={props.QBs}  />
                        <DrawRow
                            Pos='1'
                            Locked ='2'
                            Players={props.RBs}  />
                        <DrawRow
                            Pos='2'
                            Locked='2'
                            Players={props.WRs} />
                        <DrawRow
                            Pos='3'
                            Locked='2'
                            Players={props.TEs} />
                        <DrawRow
                            Pos='4'
                            Locked='2'
                            Players={props.DFs} />
                        <DrawRow
                            Pos='5'
                            Locked='2'
                            Players={props.KIs} />
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



