import React from 'react';
import { Link } from 'react-router-dom';
import { findEventByCode } from '../../util/event_api_util';
import moment from 'moment';

class EventIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    getPrettyDate(event){

        let start_date = moment(`${event.start_date}`).format('D') 
        let end_date = moment(`${event.end_date}`).format('D MMM YY')
    
        return `${start_date} - ${end_date}`
    }

    render() {
        let { event, deleteEvent } = this.props;
        return (
            <div className='each-event'  >
                <Link to={`/events/${event.id}`}  className='event-list' >
                    <ul className='info'>
                        <div className='info-fl'>
                            <li className='et'>{event.title}  </li>
                            <li className='ec'>{event.code}</li>
                        </div>
                        <div className='date'>
                            <li className='eed'>{this.getPrettyDate(event)}</li>
                        </div>
                    </ul>
                </Link>
                <i className="far fa-trash-alt" onClick={() => deleteEvent(event.id)}></i>
            </div>
        )
    }
}

class EventIndex extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.fetchUserEvents()
    };

    render() {
        let { events, deleteEvent, openModal } = this.props
        return (
            <div className='events'>
                <div className='events-title'>
                    <p>Events</p>
                </div>
                <div className='button-line'>
                    <button className='event-create-button' onClick={() => openModal('create')} >Create Event</button>
                </div>
                <div className='list-items'>
                    {
                        events.map(event => <EventIndexItem key={event.id} event={event} deleteEvent={deleteEvent}  created_at={event.created_at}/>)
                    }
                </div>
               
            </div>
        )
    }
}

export default EventIndex;
