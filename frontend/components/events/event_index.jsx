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
                {/* <Link to={`/events`}></Link> */}
                <p>{event.title}</p>
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
        console.log('events are ',events)
        return (
            <div className='events'>
                <nav className='events-nav'>
                    <h2>Hello</h2>    
                    <Link to={'/'} className='logout' >Log out</Link>
                </nav>
                <span className='events-title'>
                    <p>Events</p>
                </span>
                <div className='button'>
                    <div className='event-create-button'>
                        <Link to={'/events/new'}>Create Event</Link>
                    </div>
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
