import React from 'react';
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom';

class EventForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            start_date: this.getToday(),
            end_date: this.getTomorrow(),
            code: this.getRandomCode(),
            is_ended: false,
            user_id: props.userId
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getRandomCode(){
        const alp = 'ABCDEFGHIJKLMNOPRSTUVYZXWQ0123456789'
        let code = ''
        for(let i = 1; i < 4; i++){
            let randIdx = Math.floor(Math.random() * alp.length);
            code += alp[randIdx];
        }      
        return code
    }

    getToday(){
        let today = new Date();
        return today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    }
    
    getTomorrow(){
        const today = new Date()
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        return tomorrow.getFullYear() + '-' + ('0' + (tomorrow.getMonth() + 1)).slice(-2) + '-' + ('0' + tomorrow.getDate()).slice(-2);
    }


    handleSubmit(e){
        e.preventDefault();
        const event = Object.assign({}, this.state);
        this.props.submitEvent(event);
        this.props.closeModal();
    }


    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render(){

        let { closeModal } = this.props;
        let handleSubmit = this.handleSubmit;

        return(
            <div className='modal-box-form'>
                <h1 id='white'>Create an event</h1>
                <form className='create-event-form'>
                    <input 
                        type="text" 
                        className='event-name' 
                        placeholder='Event name'
                        value={this.state.title}
                        onChange={this.update('title')}/>
                    <div id='form-date'>Date: 
                    <br/>
                            <input 
                                type="date" 
                                className='start-date' 
                                value={this.state.start_date} 
                                onChange={this.update('start_date')} />
                            <input 
                                type="date" 
                                className='end-date' 
                                value={this.state.end_date} 
                                onChange={this.update('end_date')} />
                    </div>
                    <div className='code' >Code: {this.state.code}
                    </div>
                </form>
                <div id='buttons' >
                    <button className='hoverable' onClick={() => closeModal()} >Cancel</button>
                    <button className='hoverable' onClick={handleSubmit} >Create Event</button>
                </div>
            </div>
        )

    }

}

export default EventForm;