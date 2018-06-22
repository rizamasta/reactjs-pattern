import React, { Component } from 'react';
import { getData } from '../../../config/httpProvider';
import Postform from '../forms/Postsform';
import ReadMoreReact from 'read-more-react';
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentWillMount() {
        getData('posts').then(data => this.setState({ 'posts': data }));
    }

    render() {
        const postItems = this.state.posts.map(
            post => (
                <div key={post.id} className='homeContent'>
                    <h2 className='maxContent800'>{post.title}</h2>
                    <div className='maxContent800' dangerouslySetInnerHTML={{ __html: post.body }}></div>
                </div>
            ));
        return (
            <div className='main'>
                <Postform />
                <hr />
                {postItems}
            </div>
        );
    }
}

export default Posts;