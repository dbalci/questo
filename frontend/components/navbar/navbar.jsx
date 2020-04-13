import React from 'react';
import { Link } from 'react-router-dom';

function LoggedInControls(props){
    return (
        <div className='greading-and-logout'>
            <div className='greading'>Hello {props.user.name}</div>
            <Link to={'/'} className='logout' onClick={props.logout}>Log out</Link>
        </div>
    )
}

function LoggedOutControls(props){
    return (
        <div className="header-account">
            <Link to='/events' className='demo' onClick={props.handleDemo}>Demo Login</Link>
            <Link to="/login" className="header-login">Log In</Link>
            <Link to="/signup" className="header-signup">Sign Up</Link>
        </div>
    )
}

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.handleDemo = this.handleDemo.bind(this);
    }
    
    handleDemo(e) {
        e.preventDefault();

        const demo = {
            email: 'Demo@email',
            password: 'passwordmuacaba?'
        }
        this.props.login(demo).then(this.props.history.push('/events'));
    }
    
    render(){
        let { user, logout, login } = this.props

        return (
            <nav className="events-nav">
                <Link to="/" className="header-home-link">Questo</Link>
                 {(user && user.id)
                    ? <LoggedInControls user={user} logout={logout} />
                    : <LoggedOutControls handleDemo={this.handleDemo} />
                 }
            </nav>
        )
    }
}

export default Navbar;

