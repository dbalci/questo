import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import LandingPageContainer from './landing/landing'
import EventsIndexContainer from './events/event_index_container';
import EventShowContainer from './events/event_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ModalContainer from './modal/modal';

const App = () => (
    <div>
        <header>
       
        </header>
        <ModalContainer />
        <Switch>
            <Route exact path='/' component={LandingPageContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path='/events' component={EventsIndexContainer} />
            <Route exact path='/events/:eventId' component={EventShowContainer} />
        </Switch>
    </div>
);

export default App;
