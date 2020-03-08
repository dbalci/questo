import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { event, deleteEvent } = this.props;
        return (
            <div className='each-event'>
                <Link to={`/events`}>{event.title}</Link>
                <button onClick={() => deleteEvent(event.id)}>Delete Event</button>
                <h1>{event.title}</h1>
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
                <nav className='events-nav-bar'>
                    <h2>Hello</h2>    
                    <Link to='/' className='logout'>Logout</Link>
                </nav>
                <span className='Events-title'>
                    Events
                </span>
                <div className='event-create-button'>
                    <Link to={'/events/new'}>Create Event</Link>
                </div>
                {/* modal eklenecek new event icin!! */}
                <div className='events-list'>
                    {
                        events.map(event => <EventIndexItem key={event.id} event={event} deleteEvent={deleteEvent} />)
                    }
                </div>
               
            </div>
        )
    };
};

export default EventIndex;