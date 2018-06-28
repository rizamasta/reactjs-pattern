import React, { Component } from 'react';
import { __get, __delete } from '../../../config/httpProvider';
import Postform from '../forms/Postsform';
import Truncate from 'react-truncate';
import { Link } from "react-router-dom";
import { withAlert } from 'react-alert'
class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        this.deletePost = this.deletePost.bind(this);
    }
    deletePost(id) {
        __delete('posts/' + id).then(data => console.log(data));
        this.props.alert.success(<div>Delete post success</div>);
        this.loadData()
    }
    componentWillMount() {
        this.loadData()
    }
    loadData() {
        __get('posts').then(data => this.setState({ 'posts': data }));
    }

    render() {
        return (
            <div className='main'>
                <Postform />
                <hr />
                {this.state.posts.map(
                    post => (
                        <div key={post.id} className='homeContent'>
                            <h2 className='maxContent800'>{post.title}</h2>
                            <Truncate lines={3} ellipsis={<span>... <Link to={'article-detail/' + post.id}>read more</Link></span>}>
                                <div className='maxContent800' dangerouslySetInnerHTML={{ __html: post.body }}></div>
                            </Truncate>
                            <Link to={'edit-article/' + post.id}> Edit</Link>
                            <Link to='#' onClick={() => this.deletePost(post.id)} className='delete'> Delete</Link>
                        </div>
                    ))}
            </div>
        );
    }
}

export default withAlert(Posts);