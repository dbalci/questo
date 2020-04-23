import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    renderErrors() {
        return (
            <ul className='errors' >
                {this.props.errors.map((error, i) => (
                    <p key={`error-${i}`}>
                        {error}
                    </p>
                ))}
            </ul>
        );
    }

    handleDemo(e) {
        e.preventDefault();

        const demo = {
            email: 'Demo@email',
            password: 'passwordmuacaba?'
        }
        this.props.login(demo).then(this.props.history.push('/events'));
    }

    render() {
        return (
            <div className='login-signup'>
                <div className="form-box">
                    <form onSubmit={this.handleSubmit} >
                        <div className='form-title' id='login'> Log in to your account </div>
                        <span className='second-line'>
                            or <Link to={"/signup"} className='link-to'>create account</Link>
                        </span>   
                        <br/>
                                     
                        {this.renderErrors()}
                        <div className='login-input'>
                            <input
                                className='your_email'
                                placeholder='Your email'
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')} />
                            <input
                                className='password'
                                placeholder='Password'
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')} /> 
                        </div>
                        <br/>
                        <input className="session-submit" type="submit" value='Log in' />
                        <button className='session-submit' onClick={this.handleDemo} >Demo Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;
