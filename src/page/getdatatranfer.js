import React, { Component } from 'react'
import Headeruser from './headeruser';
import { Redirect } from 'react-router-dom'
export default class getdatauser extends Component {

    state = {
        check: false,
    }
    componentDidMount() {
        const getdatatranfer = this.props.location.state
        localStorage.setItem('Mydata2', JSON.stringify(getdatatranfer))
        this.setState({ check: true })
        console.log("getdatatranfer : ", getdatatranfer)
    }
    relink = () => {
        if (this.state.check) {
            return <Redirect to={{
                pathname: '/usertranfer',
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
