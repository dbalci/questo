import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { createHashHistory } from 'history' 

import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import LandingPageContainer from './landing/landing'
import EventsIndexContainer from './events/event_index_container';
import EventShowContainer from './events/event_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ModalContainer from './modal/modal';
import Navbar from './navbar/navbar';
import NavbarContainer from './navbar/navbar_container';


let history = createHashHistory();

const App = () => (
    <div>
        <header>
       
        </header>
        <ModalContainer />
        <NavbarContainer history={history} />
        <Switch history={history}>
            <Route exact path='/' component={LandingPageContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute exact path='/events' component={EventsIndexContainer} />
            <ProtectedRoute exact path='/events/:eventId' component={EventShowContainer} />
        </Switch>
    </div>
);

export default App;
