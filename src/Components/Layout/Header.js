import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { getUserFromStorage, logout } from '../../Services/UserService'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserConnected: false,
            username: '',
        }
    }
    logout = () => {
        const loggedOut = logout();
        if (loggedOut) {
            console.log("inside logout condition ")
            this.setState({
                UserConnected: false,
            })
            this.props.history.push('/');
        }
    }
    componentDidMount() {
        const user = getUserFromStorage();
        if (user) {
            console.log("inside condition ", user.username)
            this.setState({
                username: user.username,
                UserConnected: user.connected
            })
        } else {
            console.log("can't access to user ");
        }

    }

    render() {
        const { UserConnected, username } = this.state;
        return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-absolute fixed-top ">
                <div className="container-fluid">
                    <div className="navbar-wrapper">
                        {/* // navbar brand  */}
                        <Link className="navbar-brand text-white" to="/">
                            Home
            </Link>
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        aria-controls="navigation-index"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon icon-bar"></span>
                        <span className="navbar-toggler-icon icon-bar"></span>
                        <span className="navbar-toggler-icon icon-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center">
                        <ul className="navbar-nav">
                            {UserConnected ?
                                <li className="nav-item">
                                    <Link className=" nav-link text-white" to={'/customsArticles'}>
                                        Customs Articles
                                 </Link>
                                </li>
                                : <></>}
                            <li className="nav-item">
                                <Link className=" nav-link text-white" to={'/topHeadlines'}>
                                    Top Headlines
                                 </Link>
                            </li>

                            {UserConnected ?
                                <li className="nav-item">
                                    <Link className=" nav-link text-white" to="/Profile">
                                        Welcome , {username}
                                    </Link>
                                </li>
                                :
                                <li>
                                    <Link className=" nav-link text-white" to="/register">
                                        Register
                                </Link>
                                </li>
                            }
                            <li className="nav-item">
                                {UserConnected ?
                                    <a className=" nav-link text-white" onClick={this.logout.bind(this)} href="#">
                                        Log out
                                    </a>
                                    :
                                    <Link className=" nav-link text-white" to="/login">
                                        Log In
                                    </Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default withRouter(Header);