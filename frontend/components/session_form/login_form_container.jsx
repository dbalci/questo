import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mstp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
    };
};

const mdtp = dispatch => {
    return {
        login: (user) => dispatch(login(user)),
    };
};

export default connect(mstp, mdtp)(LoginForm);
