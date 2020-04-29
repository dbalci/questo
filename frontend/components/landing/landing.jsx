import React from 'react';
import { connect } from 'react-redux';
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
            [field]: e.currentTarget.value.toUpperCase()
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
            <div className='landing-container'>
                <div id='left-container'>
                    <h3>
                        Joining as a participant?
                    </h3>
                    <div id='left-container-input'>
                        <input 
                            type="text" 
                            placeholder='Enter event code'
                            id='landing-input'
                            value={this.state.email}
                            onChange={this.update('eventCode')}
                        />
                        <button id='landing-left-bottom' onClick={this.handleCode}>Join an existing event</button>
                    </div>
                </div>
                <div id='right-container'>
        
                </div>
            </div>
        )
    }
}

export default connect(mstp, mdtp)(LandingPage);
