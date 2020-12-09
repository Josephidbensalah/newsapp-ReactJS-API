import React, { Component } from 'react'
import Header from './Header'

export default class Layout extends Component {
    render() {

        return (
            <div className="container">
                <Header />
                <div className="pt-5">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
