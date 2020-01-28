

import React from 'react'
import './../../App.css'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'



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

        const SBStyle = {
            color: 'white',
        }

        return (
            <List style={SBStyle} >
                {sideBarItems.map(({ label, name, ...rest }) => (
                    <ListItem onClick={() => this.handleClick({ name })} key={name} button {...rest} >
                        <ListItemText>{label}</ListItemText>
                    </ListItem>
                ))}
            </List>
        );
    }

}

