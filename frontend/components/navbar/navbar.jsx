import React from 'react';
import { Link } from 'react-router-dom';

function LoggedInControls(props){
    return (
        <div id='greeting-and-logout'>
            <div id='greeting'>Hello {props.user.name}</div>
            <Link to={'/events'} className='hoverable'>My Events</Link>
            <Link to={'/'} className='hoverable' onClick={props.logout}>Log out</Link>
        </div>
    )
}

function LoggedOutControls(props){
    return (
        <div className="login-signup-navbar">
            <Link to="/login" className='hoverable' >Log In</Link>
            <Link to="/signup" className='hoverable' >Sign Up</Link>
        </div>
    )
}

class Navbar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let { user, logout } = this.props

        return (
            <nav className="navbar">
                <Link to="/" id="home-link">Questo</Link>
                 {(user && user.id)
                    ? <LoggedInControls user={user} logout={logout} />
                    : <LoggedOutControls handleDemo={this.handleDemo} />
                 }
            </nav>
        )
    }
}

export default Navbar;

