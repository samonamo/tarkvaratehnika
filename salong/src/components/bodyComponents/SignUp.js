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
    firstname: '',
    lastname: '',
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
            firstname,
            lastname,
            email,
            password,
        } = this.state;



        const isInvalid =
            password === '' ||
            email === '' ||
            lastname === '' ||
            firstname === '';

        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input
                    value={firstname}
                    onChange={event => this.setState(updateByPropertyName('firstname', event.target.value))}
                    type="text"
                    placeholder="Enter your firstname"
                />
                <input
                    value={lastname}
                    onChange={event => this.setState(updateByPropertyName('lastname', event.target.value))}
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