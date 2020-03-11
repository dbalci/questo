import { connect } from 'react-redux';
import { fetchEvents, deleteEvent, createEvent } from '../../actions/event_actions';
import { logout } from '../../actions/session_actions'
import EventIndex from './event_index';

const mstp = (state) => ({ 
    events: Object.values(state.events) 
});

const mdtp = (dispatch) => ({
    fetchEvents: () => dispatch(fetchEvents()),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
    createEvent: (event) => dispatch(createEvent(event)),
    logout: (user) => dispatch(logout(user))
});

export default connect(mstp, mdtp)(EventIndex);