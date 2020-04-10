import React from 'react';

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
        let questions = [];
        if (this.props.questions !== undefined && this.props.questions.questions) {
            questions = Object.values(this.props.questions.questions);
        }
     
        return (
            <div className='event-questions'>
                {
                   questions.map(question => <Question key={question.id} question={question}  />)
                }
            </div>
        )
    }
}

export default EventShow