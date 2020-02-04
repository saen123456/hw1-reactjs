import React, { Component } from 'react'
import Headeruser from './headeruser';
import { Redirect } from 'react-router-dom'
import {
    Button,
    FormGroup,
    Form,
    Label,
    Input,
    Container,
    Row,
    Col,
}
    from 'reactstrap';
import axios from 'axios';
export default class user extends Component {
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
    state = {
        email: "",
        money_tranfer: false,
        email_before: "",
        data: "",
    }
    sendData = async () => {
        const http = await axios.post('http://localhost:5000/tranfer', {
            email: this.state.email,
            money_tranfer: this.state.money_tranfer,
            email_before: this.state.datainfo.email
        })
        console.log("datatranfer : ", http.data)
        if (http.data !== "error") {
            this.setState({ data: http.data })
            this.setState({ check: true })

            return (alert("You tranfer money to " + this.state.email + " " + this.state.money_tranfer + " bath"))
        }
        else return (alert("Don't have money"))
    }


    relinks = () => {
        if (this.state.check) {
            return <Redirect to={{
                pathname: '/getdatauser',
                state: this.state.data
            }} />
        }
    }
    render() {
        console.log("check : ", this.state.check)
        return (
            < div >
                <Headeruser />
                <Container>
                    <Row>
                        <Col xs="3"></Col>
                        <Col xs="6">
                            <Form action="#">
                                <FormGroup><br /><br />
                                    <Label for="login" style={{ fontSize: '25px' }} className="float-left">หมายเลขบัญชีที่ต้องการจะส่ง</Label><br /><br />
                                    <Input required type="text" name="email" placeholder="Enter Account email" onChange={(e) => this.setState({ email: e.target.value })} /><br />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="login" style={{ fontSize: '25px' }} className="float-left">จำนวนเงินที่ต้องการโอน</Label><br /><br />
                                    <Input required type="text" name="email" placeholder="Enter Money" onChange={(e) => this.setState({ money_tranfer: e.target.value })} /><br />
                                </FormGroup>
                                <Button variant="primary" size="lg" block onClick={(e) => this.sendData()}>Tranfer Money</Button><br /><br />
                                <Button variant="primary" size="lg" block href="/user"> Back </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                {this.relinks()}
            </div >



        )
    }
}
