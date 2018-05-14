import React, {Component} from 'react';
import {MuiThemeProvider} from "material-ui";
import SignInForm from "../bodyComponents/SignIn";


class SignInLayout extends Component {
    state = {
        fields: {}
    };

    onChange = updatedValue => {
        this.setState({
            fields: {
                ...this.state.fields,
                ...updatedValue
            }
        });
    };

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div className="App">
                        <SignInForm onChange={fields => this.onChange(fields)} />
                        <p>
                            {JSON.stringify(this.state.fields, null, 2)}
                        </p>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default SignInLayout;
