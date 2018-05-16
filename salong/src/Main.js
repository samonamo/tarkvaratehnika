import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import './Main.css';
import AcceptBooking from "./components/bodyComponents/AcceptBooking";
import SignUpLayout from "./components/helpComponents/SignUpLayout";
import SignInLayout from "./components/helpComponents/SignInLayout";
import ListOfWorks from "./components/bodyComponents/ListOfWorks";
import * as Constants from "./constants/Constants";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

const Home = () => (
    <div className="Homepage">
        <h2>Juuksurisalong</h2>
    </div>
);

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Constants, dispatch),
    }
};

class Main extends Component {

    render() {

        const userLinks = <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Booking">Booking</Link></li>
            <li><Link to="/" onClick={this.props.actions.logout}>Log out</Link></li>
        </ul>;

        const visitorLinks = <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Booking">Booking</Link></li>
            <li><Link to="/SignIn">Sign in</Link></li>
            <li><Link to="/SignUp">Sign up</Link></li>
        </ul>;

        return (
            <div>
                <Router>
                    <div>
                        {this.props.loggedIn? userLinks : visitorLinks}

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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
