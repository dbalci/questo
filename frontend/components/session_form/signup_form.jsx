import React from 'react';
import { Link } from 'react-router-dom';

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
            <div className='signup-form-container'>
                <Link to="/" className="header-home-link">Questo</Link>
                <div className="signup-form-box">
                    <form onSubmit={this.handleSubmit} >
                        <h3 className='sign-up-title'> Create your account </h3>
                        <span>
                        or <Link to={'/login'} className='login-in-signup'>log in to your account</Link>
                        </span>
                        {this.renderErrors()}
                    <label className='first-name'>
                        <input 
                            placeholder='First name'
                            type="text"
                            value={this.state.name}
                            onChange={this.update('name')}
                            className='signup-input' />
                    </label>
                    <label className='last-name'>
                        <input 
                            placeholder='Last name'
                            type="text"
                            value={this.state.lastname}
                            onChange={this.update('lastname')}
                            className='signup-input' />
                    </label>
                    <label className='email'>
                        <input 
                            placeholder='Your email'
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className='signup-input' />
                    </label>
                    <label className='password'>
                        <input 
                            placeholder='Password'
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className='signup-input' />
                    </label>
                    <input className="signup-submit" type="submit" value='Create account' />  
                    </form>
                </div>
            </div>
        );
    }
}

export default SignupForm;
