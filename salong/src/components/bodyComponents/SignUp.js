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
    passwordTwo: '',
};

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = () => {
        fetch('https://localhost:8080/service/users/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: this.state
        }).then(response => console.log(JSON.stringify(response)))
    };

    render() {
        const {
            firstname,
            lastname,
            email,
            password,
            passwordTwo,
        } = this.state;

        const isInvalid =
            
          
            passwordTwo === '' ||
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
                <input
                    value={passwordTwo}
                    onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Repeat password"
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