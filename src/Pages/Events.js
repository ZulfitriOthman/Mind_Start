import React, {useState} from 'react';
import EventDate from './EventDate';
import Card from './Card';
import './Events.css';
import Eventitem from './Eventitem';

const Events = (props) => {

    return (

                <Card className="events">
                <Eventitem title={props[0].title} detail="More info" date={props[0].date} />
                <Eventitem title={props[1].title} detail="More info" date={props[1].date} />
                <Eventitem title={props[2].title} detail="More info" date={props[2].date} />
                <Eventitem title={props[3].title} detail="More info" date={props[3].date} />
             
            </Card>
   
    )
}

export default Events;