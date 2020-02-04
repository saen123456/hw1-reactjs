import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {
  Button,
  FormGroup,
  Form,
  Label,
  Input,
  Container,
  Row,
  Col,
  FormText
}
  from 'reactstrap';
import Header from './header';
import { Redirect } from 'react-router-dom'
export default class Formpersonal extends Component {
  state = {
    firstname: "",
    midname: "",
    lastname: "",
    homephone: "",
    mobilephone: "",
    email: "",
    mailing: "",
    socialsecuritynumber: "",
    employersname: "",
    employersaddress: "",
    workphone: "",
    job: "",
    purpose: "save",
    money_form: "",
    about: "",
    money: "0",
    check: false,
  }

  sendData = async () => {
    const http = await axios.post('http://localhost:5000/register', {
      firstname: this.state.firstname,
      midname: this.state.midname,
      lastname: this.state.lastname,
      homephone: this.state.homephone,
      mobilephone: this.state.mobilephone,
      email: this.state.email,
      mailing: this.state.mailing,
      socialsecuritynumber: this.state.socialsecuritynumber,
      employersname: this.state.employersname,
      employersaddress: this.state.employersaddress,
      workphone: this.state.workphone,
      job: this.state.job,
      purpose: this.state.purpose,
      money_form: this.state.money_form,
      about: this.state.about,
      money: this.state.money,
    })
    if (http.data.account_number) {
      this.setState({ check: true })
      return (alert("Register Success!!\n You account number is " + http.data.account_number))
    }
    else {
      return (alert("Please try again"))
    }
  }
  relink = () => {

    if (this.state.check) {
      return <Redirect to={{
        pathname: '/',
      }} />
    }
    else {
      return <Redirect to={{
        pathname: '/register',
      }} />

    }
  }

  render() {
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
                  <Label for="person" style={{ fontSize: '25px' }}>PERSONAL INFORMATION</Label>
                  <Input required type="text" name="firstname" placeholder="Enter FirstName" onChange={(e) => this.setState({ firstname: e.target.value })} /><br />
                  {console.log(this.state.firstname)}
                  <Input required type="text" name="midname" placeholder="Enter MiddleName" onChange={(e) => this.setState({ midname: e.target.value })} /><br />
                  <Input required type="text" name="lastname" placeholder="Enter LastName" onChange={(e) => this.setState({ lastname: e.target.value })} /><br />
                  <Input required type="text" name="homephone" placeholder="Enter Home Phone" onChange={(e) => this.setState({ homephone: e.target.value })} /><br />
                  <Input required type="text" name="mobilephone" placeholder="Enter Mobile Phone" onChange={(e) => this.setState({ mobilephone: e.target.value })} /><br />
                  <Input required type="text" name="email" placeholder="Enter Email Address" onChange={(e) => this.setState({ email: e.target.value })} /><br />
                  <Input required type="text" name="mailing" placeholder="Enter Mailing Address" onChange={(e) => this.setState({ mailing: e.target.value })} /><br />

                </FormGroup>

                <FormGroup>
                  <Label for="employment" style={{ fontSize: '25px' }}>EMPLOYMENT INFORMATION</Label>
                  <Input required type="text" name="employersname" placeholder="Enter Employers Name" onChange={(e) => this.setState({ employersname: e.target.value })} /><br />
                  <Input required type="text" name="employersaddress" placeholder="Enter Employers Address" onChange={(e) => this.setState({ employersaddress: e.target.value })} /><br />
                  <Input required type="text" name="workphone" placeholder="Work Phone" onChange={(e) => this.setState({ workphone: e.target.value })} /><br />
                  <Input required type="text" name="job" placeholder="Job Position" onChange={(e) => this.setState({ job: e.target.value })} /><br />
                </FormGroup>

                <FormGroup>
                  <Label for="account" style={{ fontSize: '25px' }}>ACCOUNT INFORMATION</Label><br />
                  <Label for="account" style={{ fontSize: '17px' }}>Enter Account Type</Label>
                  <Input type="select" name="purpose" id="accounttype" placeholder="Enter Account Type" onChange={(e) => this.setState({ purpose: e.target.value })}>
                    <option value="save">Savings</option>
                    <option value="deposit">Deposit</option>
                  </Input>
                  <br />
                  <Input required type="text" name="money_form" placeholder="Where will the money come from?" onChange={(e) => this.setState({ money_form: e.target.value })} /><br />
                  <Input required type="text" name="about" placeholder="How did you hear about us?" onChange={(e) => this.setState({ about: e.target.value })} /><br />
                  <Input required type="text" name="money" placeholder="First Money" onChange={(e) => this.setState({ money: e.target.value })} /><br />
                  {console.log(this.state.money)}
                </FormGroup>

                <FormGroup>
                  <Label for="exampleFile">Uploads utility bill</Label>
                  <Input type="file" name="utility" id="utility" />
                  <FormText color="muted">
                    User uploads copy of utility bill
                        </FormText>
                </FormGroup>
                <br />

                <FormGroup>
                  <Label for="exampleFile">Uploads social security number</Label>
                  <Input type="file" name="social" id="social" />
                  <FormText color="muted">
                    User upload copy of social security number
                        </FormText>
                </FormGroup>
                <Button onClick={(e) => this.sendData()}>Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
        {this.relink()}
      </div>

    )
  }
}
