

import React from 'react';
import "./../MainScreen.css"

//import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
//import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/styles/';

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

function PositionDropDown({ Players }) {
    const [selectedIndex, setSelectedIndex ] = React.useState(1);
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
            width: '10px',
            maxWidth: '15px',
            backgroundColor: '#00bcd4',
            '&:hover': {
                backgroundColor: '#00bcd4',
            },
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
                    color="primary"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label={Players[0]}
                    aria-haspopup="menu"
                    onClick={handleToggle}
                    >
                    <ArrowDropDownIcon style={{ width: '10px', padding:'0px', margin:'0px',}}/>
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


//class Round extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            QBs: this.props.QBs,
//            WRs: this.props.WRs,
//            RBs: this.props.RBs,
//            TEs: this.props.TEs,
//            DFs: this.props.DFs,
//            KIs: this.props.KIs,
//        }
//    }
//    render() {
//        return (
//            <div>
//                <ButtonGroup orientation="vertical"  >
//                    <div className="picks_screen_button_list">
//                        <PositionDropDown Players={this.state.QBs} />
//                        <PositionDropDown Players={this.state.WRs} />
//                        <PositionDropDown Players={this.state.RBs} />
//                        <PositionDropDown Players={this.state.TEs} />
//                        <PositionDropDown Players={this.state.DFs} />
//                        <PositionDropDown Players={this.state.KIs} />
//                    </div>
//                </ButtonGroup>
//            </div>
//        );
//    }
//}


class Round extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            QBs: this.props.QBs,
            WRs: this.props.WRs,
            RBs: this.props.RBs,
            TEs: this.props.TEs,
            DFs: this.props.DFs,
            KIs: this.props.KIs,
        }
    }
    render() {
        return (
            <div>
                <div className=" picks_screen_table_row">
                    <td> <PositionDropDown Players={this.state.QBs} />  </td>
                    <td> <PositionDropDown Players={this.state.WRs} />  </td>
                    <td> <PositionDropDown Players={this.state.RBs} />  </td>
                    <td> <PositionDropDown Players={this.state.TEs} />  </td>
                    <td> <PositionDropDown Players={this.state.DFs} />  </td>
                    <td> <PositionDropDown Players={this.state.KIs} />  </td>
                </div>
            </div>
        );
    }
}

export default class PicksComponent extends React.Component {
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
        const screenWidth = window.innerWidth - 120;
        const screenHeight = window.innerHeight - 2;

        const PCWrapperStyle = {
            height: screenHeight,
            width: screenWidth,
        }

        //const PCStyle = {
        //        color: 'white',
        //        dense: true,
        //    }

        return (
            <div className="picks_screen_wrapper" style={PCWrapperStyle} >
                <div className="picks_screen_grid_wrapper" style={PCWrapperStyle}>
                    <table className="picks_screen_table" >
                        <thead >
                            <tr >
                                <th className="picks_item_table_header">QB</th>
                                <th className="picks_item_table_header">RB</th>
                                <th className="picks_item_table_header">WR</th>
                                <th className="picks_item_table_header">TE</th>
                                <th className="picks_item_table_header">DF</th>
                                <th className="picks_item_table_header">KI</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>    
                                <Round // wildcard round
                                    QBs={this.state.QBs} WRs={this.state.WRs}
                                    RBs={this.state.RBs} TEs={this.state.TEs}
                                    DFs={this.state.DFs} KIs={this.state.KIs} />
                            </tr>
                            <tr>
                                <Round // division round
                                    QBs={this.state.QBs} WRs={this.state.WRs}
                                    RBs={this.state.RBs} TEs={this.state.TEs}
                                    DFs={this.state.DFs} KIs={this.state.KIs} />
                            </tr>
                            <tr>
                                <Round // championship round
                                    QBs={this.state.QBs} WRs={this.state.WRs}
                                    RBs={this.state.RBs} TEs={this.state.TEs}
                                    DFs={this.state.DFs} KIs={this.state.KIs} />
                            </tr>
                            <tr>
                                <Round // superbowl round
                                    QBs={this.state.QBs} WRs={this.state.WRs}
                                    RBs={this.state.RBs} TEs={this.state.TEs}
                                    DFs={this.state.DFs} KIs={this.state.KIs} />
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}




//export default class PicksComponent extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            QBs: qbChoices,
//            WRs: wrChoices,
//            RBs: rbChoices,
//            TEs: teChoices,
//            DFs: dChoices,
//            KIs: kChoices,
//        }
//    }
//    render() {
//        const screenWidth = window.innerWidth - 120;
//        const screenHeight = window.innerHeight - 2;

//        const PCWrapperStyle = {
//            height: screenHeight,
//            width: screenWidth,
//        }

//        //const PCStyle = {
//        //        color: 'white',
//        //        dense: true,
//        //    }

//        return (
//            <div className="picks_screen_wrapper" style={PCWrapperStyle} >
//                <div className="picks_screen_grid_wrapper" style={PCWrapperStyle}>
//                    <Grid container spacing={0} className="picks_screen_grid" >
//                        <Grid item>
//                            <h5 textColor="white">Wild Card</h5>
//                            <Round // wildcard round
//                                QBs={this.state.QBs} WRs={this.state.WRs}
//                                RBs={this.state.RBs} TEs={this.state.TEs}
//                                DFs={this.state.DFs} KIs={this.state.KIs} />
//                        </Grid>
//                        <Grid item>
//                            <h5 textColor="white">Divisional</h5>
//                            <Round // divisional round
//                                QBs={this.state.QBs} WRs={this.state.WRs}
//                                RBs={this.state.RBs} TEs={this.state.TEs}
//                                DFs={this.state.DFs} KIs={this.state.KIs} />
//                        </Grid>
//                        <Grid item>
//                            <h5 textColor="white">Semi's</h5>
//                            <Round // semi's round
//                                QBs={this.state.QBs} WRs={this.state.WRs}
//                                RBs={this.state.RBs} TEs={this.state.TEs}
//                                DFs={this.state.DFs} KIs={this.state.KIs} />
//                        </Grid>
//                        <Grid item>
//                            <h5 textColor='white' align='center'>Superbowl</h5>
//                            <Round  // superbowl round
//                                QBs={this.state.QBs} WRs={this.state.WRs}
//                                RBs={this.state.RBs} TEs={this.state.TEs}
//                                DFs={this.state.DFs} KIs={this.state.KIs} />
//                        </Grid>
//                    </Grid>
//                </div>
//            </div>
//        );
//    }
//}

