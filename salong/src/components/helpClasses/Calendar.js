import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from './events';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
let allViews = ['month', 'work_week', 'day'];

const Basic = () => (
    <div style={{ height: 500, width:700 }}>
        <BigCalendar
            events={events}
            step={60}
            views={allViews}
            showMultiDayTimes
            min={new Date(2008, 0, 1, 8, 0)} // 8.00 AM
            max={new Date(2020, 0, 1, 17, 0)} // Max will be 6.00 PM!
            defaultDate={new Date()}
        />
    </div>
);

export default Basic;
