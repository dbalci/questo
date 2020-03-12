import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { event, deleteEvent } = this.props;
        return (
            <div className='each-event'  >
                <Link to={`/events/${event.id}`}  className='event-list' >
                    {/* <Link to={`/events`}></Link> */}
                    <ul className='info'>
                        <div className='info-fl'>
                            <li className='et'>{event.title}  </li>
                            <li className='ec'>{event.code}</li>
                        </div>
                        <div className='date'>
                            <li className='esd'>{event.start_date[0]+event.start_date[1]} -</li>
                            <li className='eed'>{event.end_date}</li>
                        </div>
                    </ul>
                </Link>
                <i class="far fa-trash-alt"></i>


                    {/* <button className='delete-button' onClick={() => deleteEvent(event.id)}>Delete Event</button> */}
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
    
    // componentDidUpdate(){
        
    // }

    render() {
        let { events, deleteEvent, createEvent, openModal } = this.props
        return (
            <div className='events'>
                <nav className='events-nav'>
                    <h2>Hello</h2>    
                    <Link to={'/'} className='logout' onClick={this.props.logout}>Log out</Link>
                </nav>
                <span className='events-title'>
                    <p>Events</p>
                </span>
                <div className='button-line'>
                    <button className='event-create-button' onClick={() => openModal('create')} >Create Event</button>
                </div>
                <div className='list-items'>
                    {
                        events.map(event => <EventIndexItem key={event.id} event={event} deleteEvent={deleteEvent} />)
                    }
                </div>
               
            </div>
        )
    };
};

export default EventIndex;
