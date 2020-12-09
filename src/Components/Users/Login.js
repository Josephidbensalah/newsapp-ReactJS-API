import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { login } from '../../Services/UserService'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: ''
        };

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeUserName(event) {
        this.setState({ username: event.target.value });
    }
    onChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit = (event) => {
        var exist = false;
        exist = login(this.state.username, this.state.password);
        if (exist) {
            this.props.history.push('/'); // <--- The page you want to redirect your user to.
        } else {
            this.setState({ errors: 'User credentials are wrong !' })
            console.log("User credentials are wrong !")
        }
        event.preventDefault();

    }

    render() {
        const { errors } = this.state;
        return (

            <div className="container mt-5 col-md-6">
                {errors ?
                    <div className="alert alert-danger">
                        <h2 className="text-center">
                            {errors}
                        </h2>
                    </div>
                    : <></>}
                <form onSubmit={this.handleSubmit} className="mt-5">
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" id="username"
                            placeholder="enter username"
                            value={this.state.username}
                            onChange={this.onChangeUserName}
                            name="username" />
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" id="password"
                            placeholder="enter password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            name="password" />
                    </div>
                    <button onClick={this.handleSubmit} className="btn btn-success">
                        Log In
                    </button>
                </form>
            </div>
        )
    }
}
export default withRouter(Login);
