import React from 'react';
import { Link } from 'react-router-dom';

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
        pretty_date = start_pretty[2] + ' - ' + end_pretty[2] + ' ' + monthNames[date_end.getMonth()] + ' ' + date_end.getFullYear();
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
                <i class="far fa-trash-alt" onClick={() => deleteEvent(event.id)}></i>
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
        let { events, deleteEvent, createEvent, openModal } = this.props
        return (
            <div className='events'>
                <nav className='events-nav'>
                    <Link to={"/"} className="home-link" id='white'>Questo</Link>                    
                    <Link to={'/'} className='logout' onClick={this.props.logout}>Log out</Link>
                </nav>
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
    };
};

export default EventIndex;
