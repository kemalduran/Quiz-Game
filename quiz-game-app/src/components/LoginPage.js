import React from 'react';
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";
import * as CONSTS from './../constants.js';

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleLogin = () => {

        let apiUrl = CONSTS.API_URL;


        if (this.state.email && this.state.password) {
            fetch(apiUrl + '/login?email=' + this.state.email + '&pass=' + this.state.password)
                .then(response => response.json())
                .then((data) => {
                    sessionStorage.setItem("quizuser", data);
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err);
                    this.setState({
                        loginFailed: true
                    });
                })
        }
    }

    onBlurEmail = (e) => {
        this.state.email = e.target.value;
    }
    onBlurPass = (e) => {
        this.state.password = e.target.value;
    }

    render() {

        var divStyle = {
            margin: '12px'
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <div style={{ marginTop: '200px' }}>
                            <form noValidate autoComplete="off">
                                {this.state.loginFailed &&
                                    <div> <span style={{ color: 'red' }}> E-mail or password is incorrect! </span> </div>
                                }
                                <div style={divStyle}><TextField required label="E Mail" variant="outlined" style={{width: 300}}
                                    onBlur={this.onBlurEmail.bind(this)} /> </div>
                                <div style={divStyle}><TextField required label="Password" type="password" autoComplete="current-password" variant="outlined"
                                    onBlur={this.onBlurPass.bind(this)} style={{width: 300}} /></div>
                                <div style={divStyle}><Button variant="contained" color="primary" style={{width: 300}}
                                    onClick={this.handleLogin.bind(this)}>Login</Button></div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        );


    }

}