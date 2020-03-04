import React from 'react';

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
                <form>
                <br />
                    {this.renderErrors()}
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
                    <input className="session-submit" type="submit" value='Log in' />
                </form>
            </div>
        );
    }
}

export default LoginForm;
