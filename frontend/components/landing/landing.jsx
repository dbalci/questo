import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import { findEventByCode } from '../../actions/event_actions'

const mstp = ({ errors }) => {
    return {
        
    };
};

const mdtp = dispatch => {
    return {
        findEventByCode: (code) => dispatch(findEventByCode(code))
    };
};

class LandingPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            eventCode: ''
        }
        this.handleCode = this.handleCode.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    
    handleCode(e) {
        const code = this.state.eventCode;
        this.props.findEventByCode(code).then((response) => {
            event = response.event;
            this.props.history.push(`/events/${event.event.id}`);
        })
    }

    render(){
        return (
            <div>
                <div className='input-container'>
                    <div className='input-box'>
                        <input 
                            type="text" 
                            placeholder='Enter event code'
                            value={this.state.email}
                            onChange={this.update('eventCode')}
                        />
                    </div>
                    <button onClick={this.handleCode}>Join</button>
                </div>
            </div>
        )
    }
}

export default connect(mstp, mdtp)(LandingPage);
