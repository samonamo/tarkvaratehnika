import React, {Component} from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import * as Constants from "../../constants/Constants";
import {Redirect} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import './Body.css';

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Constants, dispatch),
    }
};

class SignInForm extends Component {
    constructor() {
        super();
        this.loginHandler = this.loginHandler.bind(this);
    }

    state = {
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
        validError: '',
        loggedIn: false
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

    loginHandler(event) {
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
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    if (data.email !== null) {
                        this.props.actions.login({userID: data.userId});
                    } else {
                        alert(data.errorMsg);
                    }
                })
                .catch((error) => console.error(error))
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

        if (this.props.loggedIn)
            return <Redirect to="/"/>

        return (
            <div className="container2">
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
                    <RaisedButton disabled={isInvalid} label="Submit" onClick={this.loginHandler} primary/>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
