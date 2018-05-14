import React, {Component} from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const hasNumber = /\d/;

class SignUpForm extends Component {
    state = {
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: "",
        secondPassword: "",
        secondPasswordError: "",
    };

    change = event => {
        this.props.onChange({[event.target.name]: event.target.value});
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    validate = () => {
        let isError = false;
        const errors = {
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            passwordError: ""
        };

        if (this.state.firstName.length < 1) {
            isError = true;
            errors.firstnameError = "First name cant be empty";
        }

        if (this.state.lastName.length < 5) {
            isError = true;
            errors.lastNameError = "Last name must be 6 symbol length";
        }else if(hasNumber.test(this.state.lastName)){
            isError = true;
            errors.lastNameError = "Last name can't contain numbers";
        }

        if (this.state.email.indexOf("@") === -1) {
            isError = true;
            errors.emailError = "Requires valid email";
        }

        this.setState({
            ...this.state,
            ...errors
        });

        return isError;
    };

    onSubmit = event => {
        event.preventDefault();

        const err = this.validate();
        if (!err) {
            fetch('http://localhost:8080/service/users/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
                .then(response => response.json())
                .then(data => console.log("Data:" + JSON.stringify(data)));

            event.preventDefault();
        }

    };

    render() {
        const {
            firstName,
            lastName,
            email,
            password,
            secondPassword,
        } = this.state;


        const isInvalid =
            password === '' ||
            email === '' ||
            lastName === '' ||
            firstName === '' ||
            password === secondPassword;

        return (
            <form>
                <TextField
                    name="firstName"
                    hintText="First name"
                    floatingLabelText="First name"
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                    errorText={this.state.firstNameError}
                    floatingLabelFixed
                />
                <br/>
                <TextField
                    name="lastName"
                    hintText="Last Name"
                    floatingLabelText="Last Name"
                    value={this.state.lastName}
                    onChange={e => this.change(e)}
                    errorText={this.state.lastNameError}
                    floatingLabelFixed
                />
                <br/>
                <TextField
                    name="email"
                    hintText="Email"
                    floatingLabelText="Email"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                    errorText={this.state.emailError}
                    floatingLabelFixed
                />
                <br/>
                <TextField
                    name="password"
                    hintText="Password"
                    floatingLabelText="Password"
                    value={this.state.password}
                    onChange={e => this.change(e)}
                    errorText={this.state.passwordError}
                    type="password"
                    floatingLabelFixed
                />
                <br/>
                <RaisedButton disabled={isInvalid} label="Submit" onClick={e => this.onSubmit(e)} primary/>
            </form>
        );
    }
}

export default SignUpForm;

