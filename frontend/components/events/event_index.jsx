import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { event, deleteEvent } = this.props;

        return (
            <div>
                <Link to={`/events/${event.id}`}>{event.description}</Link>
                <button onClick={() => deleteEvent(event.id)}>Delete Event</button>
            </div>
        )
    }
}

class EventIndex extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchEvents()
    };


    render() {

        let { events, deleteEvent, createEvent } = this.props
        return (
            <div>
                <div>
                    {
                        events.map(event => <EventIndexItem event={event} deleteEvent={deleteEvent} />)
                    }
                </div>
                <Link to={'/events/new'}>New Event</Link> 
                {/* modal eklenecek new event icin!! */}
            </div>
        )
    };
};

export default EventIndex;