import {
    RECEIVE_EVENTS,
    RECEIVE_EVENT,
    REMOVE_EVENT,
} from '../actions/event_actions';

const EventReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_EVENTS:
            return action.events.events;
        case RECEIVE_EVENT:
            console.log("bizim action budur", action)
            newState[action.event.event.id] = action.event.event
            return newState

        case REMOVE_EVENT:
            delete newState[action.eventId]
            return newState;

        default:
            return oldState;
    }
}

export default EventReducer;