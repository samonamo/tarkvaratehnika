import React, {Component} from 'react';
import SignIn from "./components/bodyComponents/SignIn";
import SignUp from "./components/bodyComponents/SignUp";

class Main extends Component {

    render() {
        return (
            <div>
                <SignIn />
                <SignUp />
            </div>
        );
    }
}

export default Main;