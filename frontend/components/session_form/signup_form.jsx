import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastname: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-form-container">
                <form>
                    Create your account
                <br/>
                    {this.renderErrors()}
                <label>First name
                    <input 
                        type="text"
                        value={this.state.name}
                        onChange={this.update('name')}
                        className='signup-input' />
                </label>
                <label>Last name
                    <input 
                        type="text"
                        value={this.state.lastname}
                        onChange={this.update('lastname')}
                        className='signup-input' />
                </label>
                <label>Your email
                    <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className='signup-input' />
                </label>
                <label>Password
                    <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className='signup-input' />
                </label>
                    <input className="session-submit" type="submit" value='Create account' />  
                </form>
            </div>
        );
    }
}

export default SignupForm;
