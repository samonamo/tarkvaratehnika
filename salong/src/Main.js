import React, {Component} from 'react';
import SignIn from "./components/bodyComponents/SignIn";
import SignUp from "./components/bodyComponents/SignUp";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './Css.css';
import {ListOfWorks} from "./components/bodyComponents/ListOfWorks";
import AcceptBooking from "./components/bodyComponents/AcceptBooking";
import Basic from "./components/helpClasses/Calendar";


const Home = () => (
    <div className="Homepage">
        <h2>Juuksurisalong</h2>
        <ListOfWorks/>
        <Basic />
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
                    <Route path="/AcceptBooking" component={AcceptBooking}/>
                </div>
            </Router>

        );
    }
}

export default Main;
