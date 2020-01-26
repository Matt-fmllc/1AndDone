

import React from 'react'
import './../../App.css'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
//import Button from '@material-ui/core/Button'


import { sideBarItems } from "./../ComponentConstants"
import { mainScreenStates } from "./../MainScreen.js"

export default class SideBar2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items,
        }

        this.handleClick.bind(this);
    }

    handleClick = (e) => {
        switch (e.name) {
            default:
            case mainScreenStates.HOME:
                this.props.setState(mainScreenStates.HOME);
                return null;
            case mainScreenStates.PICKS:
                this.props.setState(mainScreenStates.PICKS);
                return null;
            case mainScreenStates.SETTINGS:
                this.props.setState(mainScreenStates.SETTINGS);
                return null;
            case mainScreenStates.STANDINGS:
                this.props.setState(mainScreenStates.STANDINGS);
                return null;
            case mainScreenStates.RESULTS:
                this.props.setState(mainScreenStates.RESULTS);
                return null;
        }
    }

    render() {
        const screenHeight = window.innerHeight-2;

        const SBWrapperStyle = {
            height: screenHeight,
        };

        const SBStyle = {
            color: 'white',
        }

        return (
            <div class="main_sidebar_wrapper" style={SBWrapperStyle}>
                <List class="main_sidebar" dense style={SBStyle} >
                    {sideBarItems.map(({ label, name, ...rest }) => (
                        <ListItem onClick={() => this.handleClick({ name })} key={name} button {...rest} >
                            <ListItemText>{label}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }

}


//function Sidebar({ items }) {
//    const screenHeight = window.innerHeight;

//    const SBWrapperStyle = {
//        height: screenHeight,
//    };

//    const SBStyle = {
//        color: 'white',
//    }

//    function handleClick(e) {
//        const name = e.target.name;
//        alert(e.target.key);
//        return;
//    }

//    return (
//        <div class="main_sidebar_wrapper" style={SBWrapperStyle}>
//            <List class="main_sidebar" dense style={SBStyle} >
//                {sideBarItems.map(({ label, name, ...rest }) => (
//                    <ListItem onClick={handleClick({ name })} key={name} button {...rest} >
//                        <ListItemText>{label}</ListItemText>
//                    </ListItem>
//                ))}
//            </List>
//        </div>
//    );
//}

//export default Sidebar


    //< List disablePadding dense >
    //    <ListItem button>
    //        <ListItemText>Home</ListItemText>
    //    </ListItem>
    //    <ListItem button>
    //        <ListItemText>Standings</ListItemText>
    //    </ListItem>
    //    <ListItem button>
    //        <ListItemText>Picks</ListItemText>
    //    </ListItem>
    //    </List >


