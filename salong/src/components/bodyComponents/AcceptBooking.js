import React, {Component} from 'react';
import Events from "../helpComponents/Events";


// let times = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
// let helpArray = [];

class AcceptBooking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookings: [],
        };
    }

    // iterateOverArray() {
    //     this.state.bookings.map((booking) => {
    //             let help = [...times.slice(0, times.indexOf(booking.startingTime)),
    //                 ...times.slice(times.indexOf(booking.endTime) + 1)
    //             ];
    //             console.log(help);
    //             times.forEach((item) => {
    //                     if (help.indexOf(item) === -1) {
    //                         helpArray.push(item)
    //                     }
    //                 }
    //             )
    //         }
    //     );
    //
    //     times = times.filter(val => !helpArray.includes(val))
    //
    //
    // }
    //
    // static onPress() {
    //
    //     ReactDOM.render(times.map((item, index) => {
    //         return <div key={index}>{item}</div>
    //     }), document.getElementById("free"))
    // }


    componentWillMount() {

        fetch('http://localhost:8080/service/booking/getbookings')
            .then(response => response.json())
            .then(data => this.setState({bookings: data}));
    }

    render() {
        const {selected} = this.props.location.state;

        return (
            <div>
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
                    {[...selected].map((checkbox, index) => {
                        return (
                            <tr key={index}>
                                <th>{checkbox.name}, kestvus {checkbox.length}, hind {checkbox.price}</th>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>

                <div className="EventsCalendar">
                    <Events/>
                </div>

                <div id="free">
                </div>

            </div>
        );
    }
}

export default AcceptBooking;
