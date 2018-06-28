import React, { Component } from 'react';
import { __get } from '../../../config/httpProvider';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: []
        }
        this.idArticle = props.idArticle;
    }
    componentWillMount() {
        __get('posts/' + this.idArticle).then(data => this.setState({ 'post': data }));
    }
    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={{ __html: this.state.post.body }}>
                </div>
            </div>
        );
    }
}

export default Detail;