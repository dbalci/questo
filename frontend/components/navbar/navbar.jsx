import React from 'react';
import { Link } from 'react-router-dom';

function LoggedInControls(props){
    return (
        <div id='greeting-and-logout'>
            <div id='greeting'>Hello {props.user.name}</div>
            <Link to={'/events'}>Events</Link>
            <Link to={'/'} className='hoverable' onClick={props.logout}>Log out</Link>
        </div>
    )
}

function LoggedOutControls(props){
    return (
        <div className="login-signup-navbar">
            {/* <Link to='/events' className='hoverable' onClick={props.handleDemo}>Demo Login</Link> */}
            <Link to="/login" className='hoverable' >Log In</Link>
            <Link to="/signup" className='hoverable' >Sign Up</Link>
        </div>
    )
}

class Navbar extends React.Component {
    constructor(props){
        super(props);
        // this.handleDemo = this.handleDemo.bind(this);
    }
    
    // handleDemo(e) {
    //     e.preventDefault();

    //     const demo = {
    //         email: 'Demo@email',
    //         password: 'passwordmuacaba?'
    //     }
    //     this.props.login(demo).then(this.props.history.push('/events'));
    // }

    render(){
        let { user, logout, login } = this.props

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

