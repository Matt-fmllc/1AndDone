

import React from 'react'
import './../App.css'
import './sidebar/SideBar'


import { sideBarItems } from "./ComponentConstants"
import SideBar from './sidebar/SideBar'

// need side bar + main area for displaying sub components




export default class MainScreenController extends React.Component {

    render() {
        return (
            <div className="main_screen" >
                <SideBar items={sideBarItems} />
            </div>
        );
    }
}