import React, {Component} from 'react';
import Events from "../helpComponents/Events";
import './Body.css';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as Constants from "../../constants/Constants";

let times = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
let helpArray = [];

const mapStateToProps = state => {
    return {
        selectedCheckboxes: state.selectedCheckboxes,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Constants, dispatch),
    }
};

class AcceptBooking extends Component {
    constructor() {
        super();
        this.state = {
            isHidden: true,
            bookings: [],
            date: '',
            value: '',
            userID: '',
            endTime: '',
            startingTime: '',
            month: '',
            day: '',
            year: '',

        };
    }

    handleChange(event) {
        this.setState({date: event.target.value});
        times = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
        helpArray = [];
        console.log(this.state);
        this.iterateOverArray();
    }

    handleChangeForSelect(event) {
        this.setState({
            value: event.target.value,
            startingTime: event.target.value,
            isHidden: false
        });

        console.log(this.valid(event.target.value, [...this.props.selectedCheckboxes].length));
        this.setState({
            userID: this.props.userID,
            endTime: this.valid(event.target.value, [...this.props.selectedCheckboxes].length),
            month: new Date(this.state.date).getMonth() + 1,
            day: new Date(this.state.date).getDate(),
            year: new Date(this.state.date).getFullYear()
        });
    }

    iterateOverArray() {

        this.state.bookings.map((booking) => {

                let chosenDate = new Date(this.state.date.toString());
                let bookingDate = new Date(parseInt(booking.year, 10), parseInt(booking.month, 10) - 1
                    , parseInt(booking.day, 10), parseInt(booking.startingTime, 10));

                if (bookingDate.getDate() === chosenDate.getDate()
                    && bookingDate.getMonth() === chosenDate.getMonth()
                    && bookingDate.getFullYear() === chosenDate.getFullYear()) {
                    let help = [...times.slice(0, times.indexOf(booking.startingTime)),
                        ...times.slice(times.indexOf(booking.endTime))];

                    times.forEach((item) => {
                            if (help.indexOf(item) === -1) {
                                helpArray.push(item)
                            }
                        }
                    )

                }
            }
        );

        if (helpArray.length === 10) {
            times = times.filter(val => !helpArray.includes(val));
            times.pop()
        } else {
            times = times.filter(val => !helpArray.includes(val));
        }


    }


    valid(time, raiseNumber) {
        if (time !== undefined) {
            const parsedNumber = time.toString().split(":");
            const updatedNumber = parseInt(parsedNumber[0], 10) + raiseNumber;
            return updatedNumber.toString() + ":" + parsedNumber[1]
        }
    }

    timesFullCheck(time, raiseNumber) {
        let boolean = true;
        for (let int = 1; int <= raiseNumber; int++) {
            const AEG = this.valid(time, int);
            if (times.indexOf(AEG) === -1) {
                boolean = false;
            }
        }

        return boolean;
    }

    componentWillMount() {

        fetch('http://localhost:8080/service/booking/getbookings')
            .then(response => response.json())
            .then(data => this.setState({bookings: data}));
    }

    onSubmit = event => {

        event.preventDefault();
        fetch('http://localhost:8080/service/booking/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(data => console.log("Data:" + JSON.stringify(data)));

    };

    render() {
        let chosenDate = this.state.value;
        let inValid = this.state.isHidden || this.props.selectedCheckboxes.length === 0
            || !this.timesFullCheck(chosenDate, [...this.props.selectedCheckboxes].length);


        return (

            <div className="container">

                <h1>Accept Booking</h1>
                <table>
                    <thead>
                    <tr>
                        <th>
                            Is that right ?
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {[...this.props.selectedCheckboxes].map((checkbox, index) => {
                        return (
                            <tr key={index}>
                                <th>{checkbox.name}, kestvus {checkbox.length} min, hind {checkbox.price}</th>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                {this.iterateOverArray()}
                <div className="dateDiv">
                    <form>
                        Sisestage kuupäev, millal soovite tulla.
                        <br/>
                        <input onChange={this.handleChange.bind(this)} type="date" min="2018-05-15"
                               max="2018-06-31"/>
                        <br/><br/>
                        <div className="text">Valige algusaeg:</div>
                        <br/>
                        <select onChange={this.handleChangeForSelect.bind(this)}>
                            {times.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })}
                        </select>
                        <br/><br/>
                        <div>
                            {!this.state.isHidden && this.timesFullCheck(chosenDate, [...this.props.selectedCheckboxes].length) &&
                            <div>Lõppaeg:</div>}
                            {!this.state.isHidden && !this.timesFullCheck(chosenDate, [...this.props.selectedCheckboxes].length) &&
                            <div>Please choose another time</div>}
                            {!this.state.isHidden && this.timesFullCheck(chosenDate, [...this.props.selectedCheckboxes].length) &&
                            this.valid(chosenDate, [...this.props.selectedCheckboxes].length)}
                        </div>


                        <br/>
                        <br/>
                        <button className="btn-success" disabled={inValid} onClick={this.onSubmit}> Book</button>
                        <br/>
                    </form>
                </div>
                <br/>
                <div className="EventsCalendar">
                    <Events/>
                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AcceptBooking);
