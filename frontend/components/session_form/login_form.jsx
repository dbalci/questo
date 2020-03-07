import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props;
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
                <Link to={"/"} className="header-home-link">Questo</Link>
                <div className="signup-form-box">
                <form onSubmit={this.handleSubmit} >
                    <h3 className='sign-up-title'> Log in to your account </h3>
                    <span className='second-line'>
                        or <Link to={"/signup"} className='signup-in-login'>create account</Link>
                    </span>                        
                    {this.renderErrors()}
                        <label className='your_email'>
                        <input
                            placeholder='Your email'
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')} />
                        </label>
                        <label className='password'>
                        <input
                            placeholder='Password'
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />                        
                        </label>
                        <input className="session-submit" type="submit" value='Log in' />
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;
