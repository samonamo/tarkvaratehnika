import React, {Component} from 'react';
import SignIn from "./components/bodyComponents/SignIn";
import SignUp from "./components/bodyComponents/SignUp";
import {Link, Route, BrowserRouter} from "react-router-dom";

class Main extends Component {

    render() {
        return (

            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/SignIn">Sign in</Link></li>
                        <li><Link to="/SignUp">Sign up</Link></li>
                    </ul>

                    <Route exact path="/" component={Main}/>
                    <Route path="/SignIn" component={SignIn}/>
                    <Route path="/SignUp" component={SignUp}/>
                </div>
            </BrowserRouter>

        );
    }
}

export default Main;