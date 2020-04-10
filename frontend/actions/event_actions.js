import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';

const receiveEvents = (events) => {
    return {
        type: RECEIVE_EVENTS,
        events
    }
}
const receiveEvent = (event) => {
    return {
        type: RECEIVE_EVENT,
        event
    }
}
const removeEvent = (eventId) => {
    return {
        type: REMOVE_EVENT,
        eventId
    }
}

export const fetchUserEvents = (userId) => dispatch => {
    return EventAPIUtil.fetchUserEvents(userId)
        .then(events => dispatch(receiveEvents(events)))
}

export const fetchEvent = (eventId) => dispatch => {
    return EventAPIUtil.fetchEvent(eventId)
        .then(event => dispatch(receiveEvent(event)))
}
export const createEvent = (event) => dispatch => {
    return EventAPIUtil.createEvent(event)
        .then(event => dispatch(receiveEvent(event)))
}
export const updateEvent = (event) => dispatch => {
    return EventAPIUtil.updateEvent(event)
        .then(event => dispatch(receiveEvent(event)))
}

export const deleteEvent = (eventId) => dispatch => {
    return EventAPIUtil.deleteEvent(eventId)
        .then(() => dispatch(removeEvent(eventId)))
}

