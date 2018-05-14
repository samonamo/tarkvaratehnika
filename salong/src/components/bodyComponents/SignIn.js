import React, {Component} from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class SignInForm extends Component {

    state = {
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
        validError : ''
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
            emailError: "",
            passwordError: ""
        };

        if (this.state.email.indexOf("@") === -1) {
            isError = true;
            errors.emailError = "Requires valid email.";
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
            fetch('http://localhost:8080/service/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
                .then(response => response.json())
                .then(data => console.log("Data:" + JSON.stringify(data))
                );
            event.preventDefault();
        }

    };

    render() {
        const {
            email,
            password
        } = this.state;


        const isInvalid =
            email === '' ||
            password === '';

        return (
            <form>
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

export default SignInForm;
