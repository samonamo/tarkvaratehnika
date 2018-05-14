import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


BigCalendar.momentLocalizer(moment);

let allViews = ['month', 'work_week', 'day'];
const minTime = new Date();
minTime.setHours(8, 0, 0);
const maxTime = new Date();
maxTime.setHours(18, 0, 0);

const dateNow = new Date();

const formats = {timeGutterFormat: 'HH:mm'};

const Basic = () => (
    <div style={{height: 500, width: 700}}>
        <BigCalendar
            formats={formats}
            step={30}
            views={allViews}
            min={minTime}
            max={maxTime}
            defaultDate={dateNow}
        />
    </div>
);

export default Basic;
