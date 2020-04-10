import React from 'react';
import { Link } from 'react-router-dom';

class Question extends React.Component{
    constructor(props){
        super(props) 
    }

    render() {
        let { question } = this.props;
        return (
            <div className='each-question'>
                {question.body}
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


                <nav className='events-nav'>
                    <Link to={"/"} className="home-link-events" id='white'>Questo</Link>
                    <div className='greading-and-logout'>
                        <div className='greading'>Hello {user.name} </div>
                        <Link to={'/'} className='logout' onClick={logout}>Log out</Link>
                    </div>
                </nav>

                <div className='event-questions'>
                    {
                        questions.map(question => <Question key={question.id} question={question}  />)
                    }
                </div>
            </div>
        )
    }
}

export default EventShow