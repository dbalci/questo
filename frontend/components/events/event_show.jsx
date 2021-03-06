import React from 'react';
import { Link } from 'react-router-dom';

class Question extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            answered: false,
        }
        this.answerQuestion = this.answerQuestion.bind(this);
    }

    answerQuestion(){
        this.props.question.answered = true
        this.props.updateQuestion(this.props.question)
    }

    render() {
        let { question, deleteQuestion, event } = this.props;

        let showDelete = (this.props.user.id === this.props.event.user_id) || (this.props.user.id === this.props.question.user_id)

        return (
            <div className='each-question'>
                <div className='qu-info'>
                    <div className='qu-username'>
                        {question.user.name}
                    </div>
                    <div className='qu-created-at'>
                        {moment(`${question.created_at}`).format('MMM D, h:mm a')}

                    </div>
                </div>
                <div className='body-and-ikons'>
                    <div className='qu-body'>
                        {question.body}
                    </div>
                    <div className='ikons'>
                        <div className='delete-ikon'>
                            {
                                (showDelete)
                                    ? <i className="far fa-trash-alt" onClick={() => deleteQuestion(question.id)}></i>
                                    : <span></span>
                            }
                        </div>
                        <div className='circle-ikon'>
                            {
                                (this.props.user.id === this.props.event.user_id)
                                    ? (question.answered)
                                        ? <i className="far fa-check-circle"> Answered</i>
                                        : <i className="far fa-circle" onClick={this.answerQuestion} > Mark answered</i>
                                    : (question.answered)
                                        ? <i className="far fa-check-circle"> Answered</i>
                                        : <i className="far fa-circle" onClick={this.answerQuestion} > Waiting for event owner to answer</i> 
                            }                    
                        </div>
                    </div>
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
        this.props.fetchEvent(this.props.event_id);
    }

    handleCreateQuestion(e){
        e.preventDefault();
        let question = Object.assign({}, this.state);
        this.props.createQuestion(question).then(() => {
            this.setState({'body' :''});
        }).then(window.location.reload())
    }
    
    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render(){
        let { user, deleteQuestion, event, updateQuestion, event_id } = this.props
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
                <p id='event-title'> #{event.code} :  {event.title}</p>
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
                                                        event={event}
                                                        question={question} 
                                                        user={user} 
                                                        event_id={event_id}
                                                        deleteQuestion={deleteQuestion}
                                                        updateQuestion={updateQuestion}
                                                    />)
                    }
                </div>

            </div>
        )
    }
}

export default EventShow