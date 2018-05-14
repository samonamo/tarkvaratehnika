import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './Css.css';
import AcceptBooking from "./components/bodyComponents/AcceptBooking";
import SignUpLayout from "./components/helpComponents/SignUpLayout";
import SignInLayout from "./components/helpComponents/SignInLayout";
import {ListOfWorks} from "./components/bodyComponents/ListOfWorks";


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
                            <li><Link to="/Booking">Booking</Link></li>
                            <li><Link to="/SignIn">Sign in</Link></li>
                            <li><Link to="/SignUp">Sign up</Link></li>
                        </ul>

                        <Route exact path="/" component={Home}/>
                        <Route path="/Booking" component={ListOfWorks}/>
                        <Route path="/SignIn" component={SignInLayout}/>
                        <Route path="/SignUp" component={SignUpLayout}/>
                        <Route path="/AcceptBooking" component={AcceptBooking}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Main;
