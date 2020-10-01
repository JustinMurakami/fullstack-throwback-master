import React from 'react';
import $ from 'jquery';

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
    return (
      <div>
        <h2>All Llamantations</h2>
        <ul>
          <li className="post-list-entry">
            <div className="post-list-entry-title">This is an example post title.</div>
            <span className="post-list-entry-stats">3 upvotes</span> <span className="post-list-entry-stats"> 1 comment</span>
          </li>
          <li className="post-list-entry">
            <div className="post-list-entry-title">Here's another example post.</div>
            <span className="post-list-entry-stats">0 upvotes</span> <span className="post-list-entry-stats"> 0 comments</span>
          </li>
          <li className="post-list-entry">
            <div className="post-list-entry-title">A third example post!</div>
            <span className="post-list-entry-stats">9 upvotes</span> <span className="post-list-entry-stats"> 3 comments</span>
          </li>
        </ul>
      </div>
    )
  }
}
