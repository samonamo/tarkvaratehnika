import React, {Component} from 'react';

const SignUpPage = () =>
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>;

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
};

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = (event) => {

        fetch('http://localhost:8080/service/users/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)})
            .then(response => response.json())
            .then(data => console.log("Data:" + JSON.stringify(data)));

        event.preventDefault();
    };

    render() {
        const {
            firstName,
            lastName,
            email,
            password,
        } = this.state;



        const isInvalid =
            password === '' ||
            email === '' ||
            lastName === '' ||
            firstName === '';

        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input
                    value={firstName}
                    onChange={event => this.setState(updateByPropertyName('firstName', event.target.value))}
                    type="text"
                    placeholder="Enter your firstname"
                />
                <input
                    value={lastName}
                    onChange={event => this.setState(updateByPropertyName('lastName', event.target.value))}
                    type="text"
                    placeholder="Enter your lastname"
                />
                <input
                    value={email}
                    onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    value={password}
                    onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
                    type="password"
                    placeholder="Password"
                />

                <button disabled={isInvalid} type="submit">
                    Sign Up
                </button>
            </form>
        );
    }
}

export default SignUpPage;

export {
    SignUpForm,
};