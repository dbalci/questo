import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { event, deleteEvent } = this.props;
        return (
            <Link to={`/events/${event.id}`}  className='event-list' >
                <div className='each-event'  >
                    {/* <Link to={`/events`}></Link> */}
                    <p>{event.title}</p>
                    <button className='delete-button' onClick={() => deleteEvent(event.id)}>Delete Event</button>
                </div>
            </Link>
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
    
    // componentDidUpdate(){
        
    // }

    render() {
        let { events, deleteEvent, createEvent, openModal } = this.props
        return (
            <div className='events'>
                <nav className='events-nav'>
                    <h2>Hello</h2>    
                    <Link to={'/'}> <button className='logout' onClick={this.props.logout}>Log out</button> </Link>
                </nav>
                <span className='events-title'>
                    <p>Events</p>
                </span>
                <div className='button-line'>
                    <button className='event-create-button' onClick={() => openModal('create')} >Create Event</button>
                </div>
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
