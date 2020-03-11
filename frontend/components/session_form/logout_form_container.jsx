import { connect } from 'react-redux';
import React from 'react';
import { logout } from '../../actions/session_actions';
import EventIndexForm from '../events/event_index_container';

const mdtp = dispatch => {
    return {
        logout: (user) => dispatch(logout(user)),
        formType: 'logout',
    };
};
export default connect(null, mdtp)(EventIndexForm);
