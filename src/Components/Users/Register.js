import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { saveUserToStorage } from '../../Services/UserService';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            connected: false,
            keyword: 'bitcoin',
            errors: '',
            usernameError: '',
            passwordError: ''
        };

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeKeyword = this.onChangeKeyword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeUserName = (event) => {

        this.setState({ username: event.target.value });

    }
    onChangePassword = (event) => {

        this.setState({ password: event.target.value });

    }
    onChangeKeyword(event) {
        this.setState({ keyword: event.target.value });
    }

    handleSubmit = (event) => {
        alert('Votre username : ' + this.state.username);
        var user = {
            username: this.state.username,
            password: this.state.password,
            connected: this.state.connected,
            keyword: this.state.keyword
        };
        const created = saveUserToStorage(user);
        if (created) {
            console.log("user Created Successfully!")
            event.preventDefault();
            this.props.history.push('/login');
        } else {
            console.log("user creating  Failed !")
            this.setState({ errors: 'Couldnot Create the User ' })
        }

    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container mt-5 col-md-6">
                { errors ?
                    <div className="alert alert-danger">
                        <h2 className="text-center"></h2>{errors}
                    </div>
                    :
                    <div className="alert alert-primary">
                        <h2 className="text-center">Create New User </h2>
                    </div>
                }
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label >Username</label>
                        <input type="text" className="form-control" id="username"
                            placeholder="enter username"
                            value={this.state.username}
                            onChange={this.onChangeUserName}
                            name="username"
                            required />
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" id="password"
                            placeholder="enter password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            name="password"
                            required />
                    </div>
                    <div className="form-group">
                        <label >Select a keyword</label>
                        <select className="form-control" value={this.state.keyword}
                            onChange={this.onChangeKeyword}>
                            <option value="bitcoin">Bitcoin</option>
                            <option value="ai">Ai</option>
                            <option value="apple">Apple</option>
                            <option value="earthquake">Earthquake</option>
                            <option value="animal">Animal</option>
                        </select>
                    </div>
                    <button onClick={this.handleSubmit} className="btn btn-success">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
export default withRouter(Register);