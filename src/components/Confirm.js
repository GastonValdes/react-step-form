import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List'; 
import RaisedButton from 'material-ui/RaisedButton'; 

export class FormPersonalDetails extends Component {

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
        const {values: {firstname, lastname, email, occupation, city, bio} } = this.props;
        
        return (
            <MuiThemeProvider> 
                <React.Fragment>
                    <AppBar title="Confirm user data" style={{ background: '#ff2600' }}/>
                    <List>
                        <ListItem
                        primaryText = "Nombre"
                        secondaryText = { firstname} 
                        />
                        <ListItem 
                        primaryText = "Apellido"
                        secondaryText = { lastname} 
                        />
                        <ListItem 
                        primaryText = "email"
                        secondaryText = { email} 
                        />
                        <ListItem 
                        primaryText = "Occupation"
                        secondaryText = { occupation } 
                        />
                        <ListItem 
                        primaryText = "city"
                        secondaryText = { city } 
                        />
                        <ListItem 
                        primaryText = "Bio"
                        secondaryText = { bio } 
                        />
                    </List>
                    <br/>
                    <RaisedButton 
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                    />
                    <RaisedButton 
                    label="Confirm & Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                    />

                   
                </React.Fragment>    
            </MuiThemeProvider>

        );
    }
}
const styles = {
    button : {
        margin: 15
    }
}
export default FormPersonalDetails;
