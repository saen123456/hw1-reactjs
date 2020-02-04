import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Header from './header';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
export default class login extends Component {
  state = {
    otp: "",
    email: "",
    check: false,
    data: "",
  }
  componentDidMount() {
    const emailreq = this.props.location.state
    this.setState({ email: emailreq })
  }

  sendData = async () => {
    const http = await axios.post('http://localhost:5000/login/checkotp', {
      otp: this.state.otp,
      email: this.state.email,
      //check : this.state.check,

    })
    console.log("showdata : ", http.data)
    if (http.data !== "error") {
      this.setState({ data: http.data })
      this.setState({ check: true })
    }
    else {
      this.setState({ otp: "" })
      return (alert("Wrong!! OTP"))
    }

  }

  relink = () => {
    if (this.state.check) {
      return <Redirect to={{
        pathname: '/getdatauser',
        state: this.state.data
      }} />
    }
    //console.log("datatest : ", this.state.data)
  }

  render() {
    //console.log(sendData.http.test)
    //console.log("check = " + this.state.check)
    return (
      <div>
        <Header />
        <br />
        <Container>
          <Row>
            <Col xs="3"></Col>
            <Col xs="6">
              <Form action="#">
                <FormGroup>
                  <Label for="login" style={{ fontSize: '25px' }} className="float-right">LOGIN</Label>
                  <Input required type="text" name="email" value={this.state.email} readOnly /><br />
                  <Input required type="text" name="otp" placeholder="Enter OTP" onChange={(e) => this.setState({ otp: e.target.value })} /><br />
                </FormGroup>
                <Button variant="primary" size="lg" block onClick={(e) => this.sendData()}>Check OTP</Button>

              </Form>
            </Col>
          </Row>
        </Container>
        {this.relink()}
      </div>
    )
  }
}
