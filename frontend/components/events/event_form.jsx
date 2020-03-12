import React from 'react';
import { Link } from 'react-router-dom';

class EventForm extends React.Component {
    constructor(props){
        super(props);
    }


    render(){

        let { event } = this.props
        let date = Date.now
        return(
            <div className='create-event-box'>
                <h1>Create an event</h1>
                <form>
                    <input type="text" className='event-name' placeholder='Event name'/>
                    <div>
                        <input type="text" className='start-date' value='bugun'/>
                        <input type="text" className='end-date' value='bugun+3' />
                    </div>
                    <input type="text" className="code" value='#code' />
                </form>
                <div onClick={this.props.closeModal} className="close-x"></div>
                <div className='buttons' >
                    <button>CANCEL</button>
                    <button>CREATE EVENT</button>
                </div>
            </div>
        )

    }

}

export default EventForm;