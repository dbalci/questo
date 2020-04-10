import { combineReducers } from 'redux';
// import entities from './entities_reducer';
import ui from './ui_reducers';
import session from './session_reducer';
import errors from './errors_reducer';
import EventsReducer from './events_reducer';
import QuestionReducer from './question_reducer';


const RootReducer = combineReducers({
    // entities,
    session,
    events: EventsReducer,
    questions: QuestionReducer,
    ui,
    errors,
});

export default RootReducer;