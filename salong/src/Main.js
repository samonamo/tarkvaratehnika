import React, {Component} from 'react';
import SignIn from "./components/bodyComponents/SignIn";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './Css.css';
import AcceptBooking from "./components/bodyComponents/AcceptBooking";
import SignUpLayout from "./components/helpClasses/SignUpLayout";


const Home = () => (
    <div className="Homepage">
        <h2>Juuksurisalong</h2>
    </div>
);

class Main extends Component {


    render() {
        return (

            <div>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/SignIn">Sign in</Link></li>
                            <li><Link to="/SignUp">Sign up</Link></li>
                        </ul>

                        <Route exact path="/" component={Home}/>
                        <Route path="/SignIn" component={SignIn}/>
                        <Route path="/SignUp" component={SignUpLayout}/>
                        <Route path="/AcceptBooking" component={AcceptBooking}/>
                    </div>
                </Router>
            </div>

        );
    }
}

export default Main;
