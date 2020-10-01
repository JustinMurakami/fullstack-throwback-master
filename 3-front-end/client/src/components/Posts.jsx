import React from 'react';
import $ from 'jquery';
import PostSummary from './PostSummary.jsx';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.loadPosts = this.loadPosts.bind(this);
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    $.ajax({
      url: 'http://localhost:3000/api/posts',
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        this.setState({
          posts: data
        })
      }
    });
    window.alert('Loading...');
  }

  render() {
    const PostSummaries = this.state.posts.map((post) => {
      return(
        <PostSummary key={post._id} post={post} viewPost={this.props.viewPost}/>
      )
    })
    return (
      <div>
        <h2>All Llamantations</h2>
        <ul>
          {PostSummaries}
        </ul>
      </div>
    )
  }
}
