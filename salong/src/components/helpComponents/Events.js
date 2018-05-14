import React, {Component} from 'react';
import BigCalendar from "react-big-calendar";
import moment from "moment/moment";


BigCalendar.momentLocalizer(moment);

let allViews = ['month', 'work_week', 'day'];
const minTime = new Date();
minTime.setHours(8, 0, 0);
const maxTime = new Date();
maxTime.setHours(18, 0, 0);

const dateNow = new Date();

const formats = {timeGutterFormat: 'HH:mm'};

class Events extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }

    componentWillMount() {
        fetch('http://localhost:8080/service/booking/getbookings')
            .then(response => response.json())
            .then(data => this.setState({data: data}));
    }

    createEvents() {
        const {data} = this.state;
        return data.map((date) =>
            (console.log(date.year))
        );
};


    render() {
        return (

            <div>
                {console.log(this.createEvents())}
            </div>
        );
    }
}

export default Events;