import React from 'react';
import { Link } from 'react-router-dom';

class Question extends React.Component{
    constructor(props){
        super(props) 
    }

    render() {
        let { question, deleteQuestion } = this.props;

        return (
            <div className='each-question'>
                <div className='qu-info'>
                    <div className='qu-username'>
                        {question.user.name}
                    </div>
                    <div className='qu-created-at'>
                        {question.created_at}
                    </div>
                </div>
                <div>
                    <div className='qu-body'>
                    {question.body}
                    </div>
                    <i className="far fa-trash-alt" onClick={() => deleteQuestion(question.id)}></i>
                </div>
            </div>
        )
    }
}


class EventShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleCreateQuestion= this.handleCreateQuestion.bind(this);
        this.state={
            body: '',
            answered: false,
            event_id: props.event_id
        }

        if (props.user){
            this.state.user_id = props.user.id;
        }
    }

    componentDidMount(){
        this.props.fetchUserEvents();
        this.props.fetchQuestionsForEvent(this.props.event_id);
    }

    handleCreateQuestion(e){
        e.preventDefault();
        let question = Object.assign({}, this.state);
        this.props.createQuestion(question).then(() => {
            this.setState({'body' :''});
        })
    }
    
    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render(){
        let { user, createQuestion, deleteQuestion, event } = this.props
        if (!event) {
            return ""
        }

        let questions = [];
        if (this.props.questions !== undefined && this.props.questions.questions) {
            questions = Object.values(this.props.questions.questions);
        }
        let handleCreateQuestion = this.handleCreateQuestion;
        return (
            <div className='event-show-container'> 
                <p id='event-title'>Event: {event.code} {event.title}</p>
                <p id='ask-question-title'>Ask the speaker</p>
                <div id='create-question'>
                    <textarea 
                        type='text'
                        rows='4'
                        cols='50'
                        maxLength='200'
                        value={this.state.body}
                        onChange={this.update('body')}
                        className='question-body'>
                    </textarea>
                    <div id='name-submit' >
                        <p id='askind-as'>Asking as {user.name}</p>
                        <button id='ask' onClick={handleCreateQuestion}>Ask</button>
                    </div>
                </div>
                <span id='space'></span>
                <div className='questions-list'>
                    {
                        questions.map(question => <Question 
                                                        key={question.id} 
                                                        question={question} 
                                                        user={user} 
                                                        deleteQuestion={deleteQuestion}
                                        />)
                    }
                </div>

            </div>
        )
    }
}

export default EventShow