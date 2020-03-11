import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mstp = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login',
        navLink: <Link to="/signup">sign up instead</Link>,
    };
};

const mdtp = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mstp, mdtp)(LoginForm);
