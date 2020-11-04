import React, {Component} from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';


export class UserForm extends Component {
state = {
    step: 1,
    firstname: '',
    lastname: '',
    email: '',
    requitrement: '',
    description:'',
    bio: ''
}

// ir al paso siguiente
 nextStep = () => {
     const {step} = this.state;
     this.setState({
         step: step + 1
     })
 }

 
// ir al paso anterior
prevStep = () => {
    const {step} = this.state;
    this.setState({
        step: step - 1
    })
}

// cambios en los campos del formulario

handleChange = input => e => {
    this.setState({[input]: e.target.value});
}

    render () {
        const { step } = this.state;
        const {firstname, lastname, email, requirement, description, bio} = this.state;
        const values ={firstname, lastname, email, requirement, description, bio}
        
        // eslint-disable-next-line
        switch (step) {
            case 1:
                return (
                    <FormUserDetails 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                        )
            case 2:
                return (
                    <FormPersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                        )
            case 3:
                return (
                    <Confirm 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                        )
            case 4:
                return (
                    <Success />
                )
        }
    }
}

export default UserForm