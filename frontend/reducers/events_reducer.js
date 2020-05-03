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
            Object.values(action.events.events).forEach((e)=>{
                newState[e.id] = e
            })
            return newState;

        case RECEIVE_EVENT:
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