import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';

import 'typeface-roboto';
//import "./material-ui-dev"
import TextField from '@material-ui/core/TextField';

import Button from "./components/custombuttons/Button.js";
import GridItem from "./components/Grid/GridItem.js"
//import CustomInput from "./components/customInput/CustomInput.js"
import Grid from "./components/Grid/GridContainer.js"



//const useStyles = makeStyles(styles);


function LoginControl() {
    return (
        <Grid container>
            <GridItem xs={12} sm={12} md={4}>
                <TextField
                    label="Enter Email"
                    id="float1"
                    formControlProps={{
                        fullWidth: true
                    }}
                />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
                <TextField
                    label="Password"
                    id="float2"
                    type="password"
                    formControlProps={{
                        fullWidth: true
                    }}
                />
            </GridItem>
        </Grid>
    )
}

function App() {
    return (
        <div className="App">
            <LoginControl />
            <Button type="button" color="primary">Primary</Button>
            <Button type="button" color="info">Info</Button>
            <Button type="button" color="success">Success</Button>
            <Button type="button" color="danger">Danger</Button>
            <Button type="button" color="warning">Warning</Button>
        </div>

    );

}



export default App;
