

import React from 'react';
import "./../MainScreen.css"

import Grid from '@material-ui/core/Grid'
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

//const wrChoices = [
//    'T Hill',
//    'D Adams',
//    'J Edelman'
//]

//const rbChoices = [
//    'M Lynch',
//    'D Cook',
//    'D Walker',
//]

//const teChoices = [
//    'T Kelce',
//    'G Kittle',
//    'D Pitta',
//]

//const dChoices = [
//    'Seattle',
//    'Green Bay',
//    'Minnesota',
//]

//const kChoices = [
//    'kicker 1',
//    'kicker 2',
//    'kicker 3',
//]

function QBDropDown(Choices) {
    const [selectedIndex, setSelectedIndex ] = React.useState(1);
    const anchorRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);

    //const handleClick = () => {
    //    console.info(`You clicked ${qbChoices[selectedIndex]}`);
    //};

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
            fontsize: '10',
            padding: '5px',
            color: 'white',
            width: '100px',
            lineHeight: 1.0,
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
            backgroundColor: '#00bcd4',
            '&:hover': {
                backgroundColor: '#00bcd4',
            },
        },
    }))(Button);

    return (
        <div>
            <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
                <ColorButton size="small">{qbChoices[selectedIndex]}</ColorButton>
                <ColorButtonDownArrow 
                    color="primary"
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label={qbChoices[0]}
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
                                    {qbChoices.map((option, index) => (
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

//function WRDropDown() {
//    const [selectedIndex, setSelectedIndex] = React.useState(1);
//    const anchorRef = React.useRef(null);
//    const [open, setOpen] = React.useState(false);

//    const handleClick = () => {
//        console.info(`You clicked ${wrChoices[selectedIndex]}`);
//    };

//    const handleMenuItemClick = (event, index) => {
//        setSelectedIndex(index);
//        setOpen(false);
//    };

//    const handleToggle = () => {
//        setOpen(prevOpen => !prevOpen);
//    };

//    const handleClose = event => {
//        if (anchorRef.current && anchorRef.current.contains(event.target)) {
//            return;
//        }

//        setOpen(false);
//    };
//    return (
//        <div>
//            <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
//                <Button onClick={handleClick}>{wrChoices[selectedIndex]}</Button>
//                <Button
//                    color="primary"
//                    size="small"
//                    aria-controls={open ? 'split-button-menu' : undefined}
//                    aria-expanded={open ? 'true' : undefined}
//                    aria-label={wrChoices[0]}
//                    aria-haspopup="menu"
//                    onClick={handleToggle}
//                >
//                    <ArrowDropDownIcon />
//                </Button>
//            </ButtonGroup>
//            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
//                {({ TransitionProps, placement }) => (
//                    <Grow
//                        {...TransitionProps}
//                        style={{
//                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
//                        }}
//                    >
//                        <Paper>
//                            <ClickAwayListener onClickAway={handleClose}>
//                                <MenuList id="split-button-menu">
//                                    {wrChoices.map((option, index) => (
//                                        <MenuItem
//                                            key={option}
//                                            disabled={index === 2}
//                                            selected={index === selectedIndex}
//                                            onClick={event => handleMenuItemClick(event, index)}
//                                        >
//                                            {option}
//                                        </MenuItem>
//                                    ))}
//                                </MenuList>
//                            </ClickAwayListener>
//                        </Paper>
//                    </Grow>
//                )}
//            </Popper>
//        </div>
//    );
//}

//function RBDropDown() {
//    const [selectedIndex, setSelectedIndex] = React.useState(1);
//    const anchorRef = React.useRef(null);
//    const [open, setOpen] = React.useState(false);

//    const handleClick = () => {
//        console.info(`You clicked ${rbChoices[selectedIndex]}`);
//    };

//    const handleMenuItemClick = (event, index) => {
//        setSelectedIndex(index);
//        setOpen(false);
//    };

//    const handleToggle = () => {
//        setOpen(prevOpen => !prevOpen);
//    };

//    const handleClose = event => {
//        if (anchorRef.current && anchorRef.current.contains(event.target)) {
//            return;
//        }

//        setOpen(false);
//    };
//    return (
//        <div>
//            <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
//                <Button onClick={handleClick}>{rbChoices[selectedIndex]}</Button>
//                <Button
//                    color="primary"
//                    size="small"
//                    aria-controls={open ? 'split-button-menu' : undefined}
//                    aria-expanded={open ? 'true' : undefined}
//                    aria-label={rbChoices[0]}
//                    aria-haspopup="menu"
//                    onClick={handleToggle}
//                >
//                    <ArrowDropDownIcon />
//                </Button>
//            </ButtonGroup>
//            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
//                {({ TransitionProps, placement }) => (
//                    <Grow
//                        {...TransitionProps}
//                        style={{
//                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
//                        }}
//                    >
//                        <Paper>
//                            <ClickAwayListener onClickAway={handleClose}>
//                                <MenuList id="split-button-menu">
//                                    {wrChoices.map((option, index) => (
//                                        <MenuItem
//                                            key={option}
//                                            disabled={index === 2}
//                                            selected={index === selectedIndex}
//                                            onClick={event => handleMenuItemClick(event, index)}
//                                        >
//                                            {option}
//                                        </MenuItem>
//                                    ))}
//                                </MenuList>
//                            </ClickAwayListener>
//                        </Paper>
//                    </Grow>
//                )}
//            </Popper>
//        </div>
//    );
//}

//function TEDropDown() {
//    const [selectedIndex, setSelectedIndex] = React.useState(1);
//    const anchorRef = React.useRef(null);
//    const [open, setOpen] = React.useState(false);

//    const handleClick = () => {
//        console.info(`You clicked ${teChoices[selectedIndex]}`);
//    };

//    const handleMenuItemClick = (event, index) => {
//        setSelectedIndex(index);
//        setOpen(false);
//    };

//    const handleToggle = () => {
//        setOpen(prevOpen => !prevOpen);
//    };

//    const handleClose = event => {
//        if (anchorRef.current && anchorRef.current.contains(event.target)) {
//            return;
//        }

//        setOpen(false);
//    };
//    return (
//        <div>
//            <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
//                <Button onClick={handleClick}>{teChoices[selectedIndex]}</Button>
//                <Button
//                    color="primary"
//                    size="small"
//                    aria-controls={open ? 'split-button-menu' : undefined}
//                    aria-expanded={open ? 'true' : undefined}
//                    aria-label={teChoices[0]}
//                    aria-haspopup="menu"
//                    onClick={handleToggle}
//                >
//                    <ArrowDropDownIcon />
//                </Button>
//            </ButtonGroup>
//            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
//                {({ TransitionProps, placement }) => (
//                    <Grow
//                        {...TransitionProps}
//                        style={{
//                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
//                        }}
//                    >
//                        <Paper>
//                            <ClickAwayListener onClickAway={handleClose}>
//                                <MenuList id="split-button-menu">
//                                    {teChoices.map((option, index) => (
//                                        <MenuItem
//                                            key={option}
//                                            disabled={index === 2}
//                                            selected={index === selectedIndex}
//                                            onClick={event => handleMenuItemClick(event, index)}
//                                        >
//                                            {option}
//                                        </MenuItem>
//                                    ))}
//                                </MenuList>
//                            </ClickAwayListener>
//                        </Paper>
//                    </Grow>
//                )}
//            </Popper>
//        </div>
//    );
//}

//function DDropDown() {
//    const [selectedIndex, setSelectedIndex] = React.useState(1);
//    const anchorRef = React.useRef(null);
//    const [open, setOpen] = React.useState(false);

//    const handleClick = () => {
//        console.info(`You clicked ${dChoices[selectedIndex]}`);
//    };

//    const handleMenuItemClick = (event, index) => {
//        setSelectedIndex(index);
//        setOpen(false);
//    };

//    const handleToggle = () => {
//        setOpen(prevOpen => !prevOpen);
//    };

//    const handleClose = event => {
//        if (anchorRef.current && anchorRef.current.contains(event.target)) {
//            return;
//        }

//        setOpen(false);
//    };
//    return (
//        <div>
//            <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
//                <Button onClick={handleClick}>{dChoices[selectedIndex]}</Button>
//                <Button
//                    color="primary"
//                    size="small"
//                    aria-controls={open ? 'split-button-menu' : undefined}
//                    aria-expanded={open ? 'true' : undefined}
//                    aria-label={dChoices[0]}
//                    aria-haspopup="menu"
//                    onClick={handleToggle}
//                >
//                    <ArrowDropDownIcon />
//                </Button>
//            </ButtonGroup>
//            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
//                {({ TransitionProps, placement }) => (
//                    <Grow
//                        {...TransitionProps}
//                        style={{
//                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
//                        }}
//                    >
//                        <Paper>
//                            <ClickAwayListener onClickAway={handleClose}>
//                                <MenuList id="split-button-menu">
//                                    {dChoices.map((option, index) => (
//                                        <MenuItem
//                                            key={option}
//                                            disabled={index === 2}
//                                            selected={index === selectedIndex}
//                                            onClick={event => handleMenuItemClick(event, index)}
//                                        >
//                                            {option}
//                                        </MenuItem>
//                                    ))}
//                                </MenuList>
//                            </ClickAwayListener>
//                        </Paper>
//                    </Grow>
//                )}
//            </Popper>
//        </div>
//    );
//}

//function KDropDown() {
//    const [selectedIndex, setSelectedIndex] = React.useState(1);
//    const anchorRef = React.useRef(null);
//    const [open, setOpen] = React.useState(false);

//    const handleClick = () => {
//        console.info(`You clicked ${kChoices[selectedIndex]}`);
//    };

//    const handleMenuItemClick = (event, index) => {
//        setSelectedIndex(index);
//        setOpen(false);
//    };

//    const handleToggle = () => {
//        setOpen(prevOpen => !prevOpen);
//    };

//    const handleClose = event => {
//        if (anchorRef.current && anchorRef.current.contains(event.target)) {
//            return;
//        }

//        setOpen(false);
//    };
//    return (
//        <div>
//            <ButtonGroup variant="contained" color="primary" ref={anchorRef} aria-label="split button">
//                <Button onClick={handleClick}>{kChoices[selectedIndex]}</Button>
//                <Button
//                    color="primary"
//                    size="small"
//                    aria-controls={open ? 'split-button-menu' : undefined}
//                    aria-expanded={open ? 'true' : undefined}
//                    aria-label={kChoices[0]}
//                    aria-haspopup="menu"
//                    onClick={handleToggle}
//                >
//                    <ArrowDropDownIcon />
//                </Button>
//            </ButtonGroup>
//            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
//                {({ TransitionProps, placement }) => (
//                    <Grow
//                        {...TransitionProps}
//                        style={{
//                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
//                        }}
//                    >
//                        <Paper>
//                            <ClickAwayListener onClickAway={handleClose}>
//                                <MenuList id="split-button-menu">
//                                    {kChoices.map((option, index) => (
//                                        <MenuItem
//                                            key={option}
//                                            disabled={index === 2}
//                                            selected={index === selectedIndex}
//                                            onClick={event => handleMenuItemClick(event, index)}
//                                        >
//                                            {option}
//                                        </MenuItem>
//                                    ))}
//                                </MenuList>
//                            </ClickAwayListener>
//                        </Paper>
//                    </Grow>
//                )}
//            </Popper>
//        </div>
//    );
//}

function WildCardRound() {
    return (
        <div>
            <QBDropDown />
        </div>
    );
}

//function DivisionalRound() {
//    return (
//        <div>
//            <QBDropDown />
//        </div>
//    );
//}

//function SemiRound() {
//    return (
//        <div>
//            <QBDropDown />
//        </div>
//    );
//}

//function SuperBowlRound() {
//    return (
//        <div>
//            <QBDropDown />
//        </div>
//    );
//}

export default class PicksComponent extends React.Component {
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
                <div>
                    <Grid container spacing={0} className="picks_screen_grid_wrapper" style={PCWrapperStyle}>
                        <Grid item>
                            <WildCardRound />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}