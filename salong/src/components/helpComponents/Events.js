import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

class Events extends React.Component {
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
        return data.map((date) => {
          console.log(new Date(parseInt(date.year), parseInt(date.month), parseInt(date.day)))

        })
    };


    render() {
        let allViews = ['month', 'work_week', 'day'];
        const minTime = new Date();
        minTime.setHours(8, 0, 0);
        const maxTime = new Date();
        maxTime.setHours(18, 0, 0);

        const dateNow = new Date();

        const formats = {timeGutterFormat: 'HH:mm'};

        const {data} = this.state;

        const allEvents = data.map(date => {
           return (
               {
                   title: "Broneeritud",
                   start: new Date(parseInt(date.year), parseInt(date.month) - 1, parseInt(date.day), parseInt(date.startingTime)),
                   end: new Date(parseInt(date.year), parseInt(date.month) - 1, parseInt(date.day), parseInt(date.endTime))
               }
           )
        });

        return (

            <div>
                <div style={{height: 500, width: 700}}>
                    <BigCalendar
                        formats={formats}
                        events={allEvents}
                        step={30}
                        views={allViews}
                        min={minTime}
                        max={maxTime}
                        defaultDate={dateNow}
                    />
                </div>
            </div>
        );
    }
}

export default Events;