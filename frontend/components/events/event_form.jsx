import React from 'react';
import { Link } from 'react-router-dom';

class EventForm extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                hello
                <div onClick={this.props.closeModal} className="close-x">X</div>
            </div>
        )

    }

}

export default EventForm;