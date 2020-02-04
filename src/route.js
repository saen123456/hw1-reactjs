import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './page/home'
import Register from './page/register'
import Login from './page/login';
import Otp from './page/checkotp';
import User from './page/user';
import Getdatauser from './page/getdatauser';
import Tranfer from './page/tranfer';
import GetTranfer from './page/getdatatranfer';
import userTranfer from './page/usertranfer';
const Routes = () => {
    return (
        <div>
            <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/login/checkotp" component={Otp} />
                <Route exact path="/getdatauser" component={Getdatauser} />
                <Route exact path="/user" component={User} />
                <Route exact path="/tranfer" component={Tranfer} />
                <Route exact path="/getdatatranfer" component={GetTranfer} />
                <Route exact path="/usertranfer" component={userTranfer} />
            </Router>
        </div>
    )
}

export default Routes