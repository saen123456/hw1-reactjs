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
export default class user extends Component {

    constructor(props) {
        super(props);
        this.state = {
            datainfo2: []
        };
    }
    state = {
        check: true,

    }
    componentDidMount() {
        const datainfo2 = JSON.parse(localStorage.getItem('Mydata2'))
        this.setState({ datainfo2 });
        this.setState({ check: true });
    }
    show = () => {
        if (this.state.check) {
            return (
                < Container >
                    <Row>
                        <Col xs="3"></Col>
                        <Col xs="6">
                            <Form action="#">
                                <br /><br />
                                <h1>ข้อมูลบัญชี</h1><br /><br />
                                Email : {this.state.datainfo2.email}<br /><br />
                                ชื่อจริง : {this.state.datainfo2.firstname}<br /><br />
                                นามสกุล : {this.state.datainfo2.lastname} <br /><br />
                                เลขบัญชี : {this.state.datainfo2.account_number} <br /><br />
                                เงินคงเหลือในบัญชี : {this.state.datainfo2.balance}<br /><br />
                                <Button variant="primary" size="lg" block href="/tranfer">Tranfer Money</Button><br /><br />

                            </Form>
                        </Col>
                    </Row>
                </Container >

            )
        }

    }

    render() {

        return (

            <div >
                <Headeruser />
                {this.show()}
            </div>



        )
    }
}
