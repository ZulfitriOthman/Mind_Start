import React from 'react';
import EventDate from './EventDate';
import Card from './Card';

function Event(props) {


    return (
        
        <div className="event-item">
            <EventDate date={props.date} />

            <div className="event-item__description">
                <h2>{props.title}</h2>
                <div className="event-item__price">{props.detail}</div>
            </div>
        </div>
    )
}

export default Event;