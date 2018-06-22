import React, { Component } from 'react';
import { getData } from '../../../config/httpProvider';
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: []
        }
    }
    componentWillMount() {
        getData('profile').then(data => this.setState({ 'profile': data }));
    }
    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.state.profile.body }}>
            </div>
        );
    }
}

export default About;