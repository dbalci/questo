import { connect } from 'react-redux';
import { fetchUserEvents, deleteEvent, createEvent } from '../../actions/event_actions';
import { logout } from '../../actions/session_actions';
import EventIndex from './event_index';
import { openModal } from '../../actions/modal_actions';

const mstp = (state) => {
    let myEvents = [];
    let notMyEvents = [];
    Object.values(state.events).forEach((e) => {
        if(e.user_id === state.session.id){
            myEvents.push(e)
        }
    })

    return {
        events: myEvents,
        user: state.session
    }
};

const mdtp = (dispatch) => ({
    fetchUserEvents: (userId) => dispatch(fetchUserEvents(userId)),
    deleteEvent: (eventId) => dispatch(deleteEvent(eventId)),
    createEvent: (event) => dispatch(createEvent(event)),
    logout: (user) => dispatch(logout(user)),
    openModal: modal => dispatch(openModal(modal)),
    findEventByCode: (code) => dispatch(findEventByCode(code)),
});

export default connect(mstp, mdtp)(EventIndex);