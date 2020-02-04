import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
export default class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datainfo: []
        };
    }
    componentDidMount() {
        const datainfo = JSON.parse(localStorage.getItem('Mydata'))
        this.setState({ datainfo });
        console.log('datainfo :', datainfo)
    }
    render() {

        return (

            <div>
                <Navbar bg="dark" variant="dark">

                    <Navbar.Brand href="/">BANK USER is {this.state.datainfo.midname}</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Logout</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
