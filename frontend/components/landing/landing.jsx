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
