

import React from 'react'
import './../../App.css'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
//import Button from '@material-ui/core/Button'


import { sideBarItems } from "./../ComponentConstants"

//<List className="main_sidebar" dense  >
//<div className="main_sidebar_wrapper" min-height={xHeight} height={screenHeight}>


function Sidebar({ items }) {
    const screenHeight = window.innerHeight;

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
                    <ListItem key={name} button {...rest} >
                        <ListItemText>{label}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Sidebar


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


