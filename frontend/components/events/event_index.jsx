import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';

class EventIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    getPrettyDate(event){
    
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let ms_start = Date.parse(event.start_date);
        let date_start = new Date(ms_start);
        let start_pretty = date_start.toLocaleDateString();
       
        let ms_end = Date.parse(event.end_date);
        let date_end = new Date(ms_end);
        let end_pretty = date_end.toLocaleDateString();

        let pretty_date = ''
    
        let day = start_pretty.split('/')[1];
        if (day > 10) {
            pretty_date = start_pretty.slice(2,4) + ' - ' + end_pretty.slice(2,4) + ' ' + monthNames[date_end.getMonth()] + ' ' + date_end.getFullYear();
        }else{
            pretty_date = start_pretty.slice(2,3) + ' - ' + end_pretty.slice(2,3) + ' ' + monthNames[date_end.getMonth()] + ' ' + date_end.getFullYear();
        }    
        return pretty_date
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
        let { events, deleteEvent, createEvent, openModal, user, logout } = this.props
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
                        events.map(event => <EventIndexItem key={event.id} event={event} deleteEvent={deleteEvent} />)
                    }
                </div>
               
            </div>
        )
    }
}

export default EventIndex;
