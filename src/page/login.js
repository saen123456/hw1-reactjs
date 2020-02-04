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
import { Redirect } from 'react-router-dom';
export default class login extends Component {
  state = {
    email: "",
    check: false,
  }

  sendData = async () => {
    const http = await axios.post('http://localhost:5000/login', {
      email: this.state.email,
    })
    if (http.data === 'success') {
      this.setState({ check: true })
    }
    else return (alert("Don't have this email"))
  }

  links = () => {
    if (this.state.check) {
      return <Redirect to={{
        pathname: '/login/checkotp',
        state: this.state.email
      }} />
    }
  }

  //console.log(http.data)
  render() {
    console.log(this.state.check)
    console.log(this.state)
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
                  <Input required type="text" name="email" placeholder="Enter Email" onChange={(e) => this.setState({ email: e.target.value })} /><br />
                </FormGroup>
                <Button variant="primary" size="lg" block onClick={(e) => this.sendData()}>Request OTP</Button>
              </Form>
            </Col>
          </Row>
        </Container>
        {this.links()}
      </div>
    )
  }
}
