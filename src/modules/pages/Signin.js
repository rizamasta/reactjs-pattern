import React from 'react';
import { Grid, Row, Col, FormGroup, Glyphicon, Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../../assets/css/pages/Login.css';

const LoginPage = () => (
    <div className='has-background text-center'>
        <Grid className='grid-login'>
            <Row className="show-grid">
                <Col sm={6} md={4}></Col>
                <Col sm={6} md={4} className='box blurred-bg text-left'>
                    <Form name='loginForm' method='get' action='/home'>
                        <FormGroup>
                            <label>Username</label>
                            <input type='text' name='username' placeholder='Your user name' className='form-control bordered-bottom' />
                        </FormGroup>
                        <FormGroup>
                            <label>Password</label>
                            <input type='password' name='password' placeholder='Your password' className='form-control bordered-bottom' />
                        </FormGroup>
                        <br />
                        <FormGroup>
                            <Button bsSize="sm" className='btn btn-block btn-primary' type='submit'>
                                <Glyphicon glyph="align-justify" />
                                Login
                            </Button>
                            <Link to='/signup' className='btn btn-sm btn-block btn-clear'>
                                Sign-Up
                            </Link>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default LoginPage;