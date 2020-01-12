


import React from 'react';
import Button from '@material-ui/core/Button';


export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }



    handleClick() {
        alert("click");
        return;
    }


    render() {
        const screenWidth = window.innerWidth - 120;
        const screenHeight = window.innerHeight + 2;

        return (
            <React.Fragment>
                <div class="home_button_wrapper" style={{ width: screenWidth, height: screenHeight }} >
                    <div class="home_button_create_league">
                        <Button
                            type="button"
                            size="large"
                            variant="contained"
                            color="primary"
                            onClick={() => this.handleClick()}
                            formControlProps={{
                                fullWidth: true
                            }}
                        >
                            Create League
                        </Button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

