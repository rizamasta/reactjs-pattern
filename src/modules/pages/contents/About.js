import React, { Component } from 'react';
import { __get } from '../../../config/httpProvider';
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: []
        }
    }
    componentWillMount() {
        __get('profile').then(data => this.setState({ 'profile': data }));
    }
    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.state.profile.body }}>
            </div>
        );
    }
}

export default About;