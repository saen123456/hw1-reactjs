import React, { Component } from 'react'
import Headeruser from './headeruser';
import { Redirect } from 'react-router-dom'
export default class getdatauser extends Component {

    state = {
        check: false,
    }
    componentDidMount() {
        const getdatauser = this.props.location.state
        localStorage.setItem('Mydata', JSON.stringify(getdatauser))
        this.setState({ check: true })
        console.log("getdatauser : ", getdatauser)
    }
    relink = () => {
        if (this.state.check) {
            return <Redirect to={{
                pathname: '/user',
            }} />
        }
    }
    render() {
        return (
            <div>
                <Headeruser />

                {this.relink()}
            </div>
        )
    }
}
