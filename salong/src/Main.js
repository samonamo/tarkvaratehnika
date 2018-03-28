import React, {Component} from 'react';
import SignIn from "./components/bodyComponents/SignIn";
import SignUp from "./components/bodyComponents/SignUp";
import {Link, Route, BrowserRouter as Router} from "react-router-dom";

import './Css.css';


const Home = () => (
    <div className="Homepage">
        <h2>Juuksurisalong</h2>
    </div>
);

class Main extends Component {

    render() {
        return (

            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/SignIn">Sign in</Link></li>
                        <li><Link to="/SignUp">Sign up</Link></li>
                    </ul>

                    <Route exact path="/" component={Home}/>
                    <Route path="/SignIn" component={SignIn}/>
                    <Route path="/SignUp" component={SignUp}/>
                </div>
            </Router>

        );
    }
}

export default Main;