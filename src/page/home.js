import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../page/header';
import { Form } from "react-bootstrap";
import axios from 'axios';
export default class home extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            Name: ((localStorage.getItem('Students')) ? JSON.parse(localStorage.getItem('Students'))[0].Name : ""),
        }
        //console.log(this.state.id) 
        //console.log( JSON.parse(localStorage.getItem('tranfer')).id ) 
        this.getdata()

    }
    getdata = async () => {

        const http = await axios.post('http://localhost:5000/student', {
            id: this.state.id

        })
        this.setState({ test: http.data })

    }*/
    render() {
        return (
            <div>
                <Header />
                <br />
                <Form.Label className="text-center" style={{ width: "100%" }}>Welcome To Bank Online</Form.Label>
            </div>

        )
    }

}
