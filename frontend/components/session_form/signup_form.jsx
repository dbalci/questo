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
            <div className='login-signup'>
                <Link to={"/"} className="header-home-link">Questo</Link>
                <div className="form-box">
                    <form onSubmit={this.handleSubmit} >
                        <div className='form-title'> Create your account </div>
                        <span className='second-line'>
                        or   <Link to={'/login'} className='link-to'>log in to your account</Link>
                        </span>
                        <br/>
                        {this.renderErrors()}
                    <div className='form-input'>
                        <div className='firt-last-name'>
                            <input 
                                className='first-name'
                                placeholder='First name'
                                type="text"
                                value={this.state.name}
                                onChange={this.update('name')} />
                            <input 
                                placeholder='Last name'
                                type="text"
                                value={this.state.lastname}
                                onChange={this.update('lastname')}
                                className='last-name' />
                        </div>
                        <input 
                            placeholder='Your email'
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className='email' />
                        <input 
                            placeholder='Password'
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className='password' />
                    </div>
                    <br/>
                    <input className="session-submit" type="submit" value='Create account' />  
                    </form>
                </div>
            </div>
        );
    }
}

export default SignupForm;
