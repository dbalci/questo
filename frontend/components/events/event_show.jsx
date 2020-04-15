import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class Question extends React.Component{
    constructor(props){
        super(props) 
    }

    render() {
        let { question, user } = this.props;

        return (
            <div className='each-question'>
                <div className='qu-info'>
                    <div className='qu-username'>
                        {user.name}
                    </div>
                    <div className='qu-created-at'>
                        {question.created_at}
                    </div>
                </div>
                <div className='qu-body'>
                    {question.body}
                </div>
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

    handleCreateQuestion(){

    }
    
    render(){
        let { user, createQuestion, deleteQuestion, logout } = this.props
        let questions = [];
        if (this.props.questions !== undefined && this.props.questions.questions) {
            questions = Object.values(this.props.questions.questions);
        }
     
        return (
            <div className='event-show-container'> 

                <p>Ask the speaker</p>
                <div id='create-question'>
                    <textarea 
                        type='text'
                        rows='4'
                        cols='50'
                        maxLength='200'
                        className='question-body'

                    ></textarea>
                    <div id='name-submit' >
                        <input type="text" placeholder='Your name(optional)'/>
                        <button id='ask' >Ask</button>
                    </div>
                </div>
                <span id='space'></span>
                <div className='questions-list'>
                    {
                        questions.map(question => <Question key={question.id} question={question}  user={user} />)
                    }
                </div>

            </div>
        )
    }
}

export default EventShow