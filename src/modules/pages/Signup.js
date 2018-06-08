import React from 'react';
import { Grid, Row, Col, FormGroup, Glyphicon, Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../../assets/css/pages/Login.css';
const SignIn = () => (
    <div className='signup text-center has-background'>
        <div className='grid-signup'>
            <Row className="show-grid">
                <Col sm={6} md={8}></Col>
                <Col sm={6} md={3} className='box blurred-bg text-left'>
                    <Form name='loginForm' method='get' action='/home'>
                        <FormGroup>
                            <label>Full Name</label>
                            <input type='text' name='fullname' placeholder='Full Name' className='form-control bordered-bottom' />
                        </FormGroup>
                        <FormGroup>
                            <label>Username</label>
                            <input type='text' name='username' placeholder='Your user name' className='form-control bordered-bottom' />
                        </FormGroup>
                        <FormGroup>
                            <label>Email</label>
                            <input type='email' name='email' placeholder='Full Name' className='form-control bordered-bottom' />
                        </FormGroup>
                        <FormGroup>
                            <label>Password</label>
                            <input type='password' name='password' placeholder='Your password' className='form-control bordered-bottom' />
                        </FormGroup>
                        <br />
                        <FormGroup>
                            <Button bsSize="sm" className='btn btn-block btn-primary' type='submit'>
                                <Glyphicon glyph="align-justify" />
                                Register
                            </Button>
                            <p className='text-sm text-center p-2'>Have an account?</p>
                            <Link to='/signin' className='btn btn-sm btn-block btn-clear'>
                                Login
                            </Link>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </div>
    </div>
);

export default SignIn;