import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField'; 
import RaisedButton from 'material-ui/RaisedButton'; 

export class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {values, handleChange } = this.props;
        
        return (
            <MuiThemeProvider> 
                <React.Fragment>
                    <AppBar title="Detalles del Requerimiento" style={{ background: '#ff2600' }}/>
                    <TextField 
                    hintText="Nombre del Requerimiento"
                    floatingLabelText="Requerimiento"
                    onChange={handleChange('requirement')}
                    defaultValue={values.requirement}
                    />
                    <br/>
                    <TextField 
                    hintText="Descripción del requerimiento"
                    floatingLabelText="Descripcion"
                    onChange={handleChange('description')}
                    defaultValue={values.description}
                    />
                    <br/>
                    <TextField 
                    hintText="Enter your bio"
                    floatingLabelText="Bio"
                    onChange={handleChange('bio')}
                    defaultValue={values.bio}
                    />
                    <br/>
                    <RaisedButton 
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                    />
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
export default FormPersonalDetails;
