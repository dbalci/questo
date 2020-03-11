import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
} from 'react-router-dom';

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
        this.props.processForm(user);

    }

    handleDemo(e) {
        e.preventDefault();

        const demo = {
            email: 'email',
            password: 'password'
        }

        this.props.processForm(demo);
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

    render() {
        return (
            <div className='login-signup'>
                <Link to={"/"} className="header-home-link">Questo</Link>
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
                        <br/>
                    <input className="session-submit" type="submit" value='Log in' />
                    <button onClick={this.handleDemo}>Demo</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;
