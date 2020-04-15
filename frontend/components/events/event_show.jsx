import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import { openModal } from '../../actions/modal_actions';

class Question extends React.Component{
    constructor(props){
        super(props) 
    }

    render() {
        let { question } = this.props;
        return (
            <div className='each-question'>
                {question.body}
                {question.vote}
            </div>
        )
    }
}


class EventShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchQuestionsForEvent(this.props.event.id);
    }

    render(){
        let { user, createQuestion, deleteQuestion, logout } = this.props
        let questions = [];
        if (this.props.questions !== undefined && this.props.questions.questions) {
            questions = Object.values(this.props.questions.questions);
        }
     
        return (

            <div className='event-show-container'> 

                <div id='create-question'>
                    <input type="text" maxLength='200' />
                </div>
                <div className='event-questions'>
                    {
                        questions.map(question => <Question key={question.id} question={question}  />)
                    }
                </div>
                <div>
                    <button id='ask' onClick={()=> openModal('ask')}>Ask</button>
                </div>
            </div>
        )
    }
}

export default EventShow