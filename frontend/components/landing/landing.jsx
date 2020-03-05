import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';

const mstp = ({ errors }) => {
    return {
        
    };
};

const mdtp = dispatch => {
    return {
    };
};

class LandingPage extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <div>
                <nav className="landing-nav">
                    <Link to="/" className="header-home-link">Questo</Link>
                    <div className="header-account">
                        <Link to="/login" className="header-login">Log In</Link>
                        <Link to="/signup" className="header-signup">Sign Up</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default connect(mstp, mdtp)(LandingPage);
