import React, {Component} from 'react';
import {MuiThemeProvider} from "material-ui";
import SignUpForm from "../bodyComponents/SignUp";


class SignUpLayout extends Component {
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
                        <SignUpForm onChange={fields => this.onChange(fields)} />
                        <p>
                            {JSON.stringify(this.state.fields, null, 2)}
                        </p>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default SignUpLayout;
