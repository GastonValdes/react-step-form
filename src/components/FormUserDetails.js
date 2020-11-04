import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'; 
import RaisedButton from 'material-ui/RaisedButton'; 
import { colors } from 'material-ui/styles';

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {values, handleChange } = this.props;
        
        return (
            <MuiThemeProvider> 
                <React.Fragment>
                    <AppBar title="Datos del usuario" style={{ background: '#ff2600' }}/>
                    <TextField 
                    hintText="Ingrese su nombre"
                    floatingLabelText="Nombre"
                    onChange={handleChange('firstname')}
                    defaultValue={values.firstname}
                    />
                    <br/>
                    <TextField 
                    hintText="Ingrese su Apellido"
                    floatingLabelText="Apellido"
                    onChange={handleChange('lastname')}
                    defaultValue={values.lastname}
                    />
                    <br/>
                    <TextField 
                    hintText="Ingrese su direccion de email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton 
                    label="Continue"
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
export default FormUserDetails;
