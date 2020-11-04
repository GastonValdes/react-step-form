import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {

    continue = e => {
        e.preventDefault();
        //PROCESS FORM - Aca llamamos a la API
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
     
        
        return (
            <MuiThemeProvider> 
                <React.Fragment>
                    <AppBar title="Success" style={{ background: '#ff2600' }}/>
                    <h1>Thanks for trying</h1>
                    
                </React.Fragment>    
            </MuiThemeProvider>

        );
    }
}


export default Success;
