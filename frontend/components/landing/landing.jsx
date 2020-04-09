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
        processForm: (user) => dispatch(login(user)),
    };
};

class LandingPage extends React.Component {
    constructor(props){
        super(props)
        this.handleDemo = this.handleDemo.bind(this);
    }
    
    handleDemo(e) {
        e.preventDefault();

        const demo = {
            email: 'Demo@email',
            password: 'passwordmuacaba?'
        }

        this.props.processForm(demo).then(this.props.history.push('/events'));
    }

    render(){
        return (
            <div>
                <nav className="landing-nav">
                    <Link to="/" className="header-home-link">Questo</Link>
                    <div className="header-account">
                        <Link to='/events' className='demo' onClick={this.handleDemo}>Demo Login</Link>
                        <Link to="/login" className="header-login">Log In</Link>
                        <Link to="/signup" className="header-signup">Sign Up</Link>
                    </div>
                </nav>
                <div className='input-container'>
                    <div className='input-box'>
                        <input type="text" placeholder='Enter event code' />
                    </div>
                    <button>Join</button>
                </div>
            </div>
        )
    }
}

export default connect(mstp, mdtp)(LandingPage);
