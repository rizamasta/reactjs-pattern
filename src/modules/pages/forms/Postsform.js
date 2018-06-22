import React, { Component } from 'react';
import { FormGroup, Button, Form } from 'react-bootstrap';
import { postData } from '../../../config/httpProvider';

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    submitForm(e) {
        e.preventDefault();
        const data = {
            title: this.state.title,
            body: this.state.body
        }
        postData('posts', data).then(
            function (res) {
                res.json().then(function (data) {
                    console.log(data);
                });
            }
        )
    }

    render() {
        return (
            <div className='maxContent600'>
                <h3>Write your post here</h3>
                <Form onSubmit={this.submitForm} method='post'>
                    <FormGroup>
                        <label>Title</label>
                        <input type='text' name='title' value={this.state.title} onChange={this.onChange} placeholder='Title of your Post' className='form-control bordered-bottom' />
                    </FormGroup>
                    <FormGroup>
                        <label>Body / Content</label>
                        <textarea type='text' name='body' value={this.state.body} onChange={this.onChange} placeholder='Write your post' className='form-control bordered-bottom' />
                    </FormGroup>
                    <FormGroup className='text-right'>
                        <Button className='btn btn-sm btn-primary' onChange={this.onChange} type='submit'>SUBMIT</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Postform;