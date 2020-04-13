import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import Navbar from './navbar'

const mstp = (state) => {
    return {
        user: state.session,
        type: 'login'
    }
};

const mdtp = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    logout: (user) => dispatch(logout(user)),

});

export default connect(mstp, mdtp)(Navbar);