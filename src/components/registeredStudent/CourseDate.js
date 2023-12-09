import React from 'react';
import './CourseDate.css';

function CourseDate (props) {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });

    return (
        <div className="registration-date">
            <div>{day} / {month} / {year}</div>
        </div>
    )
}

export default CourseDate;