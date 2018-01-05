import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchPosts } from '../actions'


class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return <li className="list-group-item" key={post.title}>
        {post.title}
      </li>
    })
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps, { fetchPosts })(PostIndex);
