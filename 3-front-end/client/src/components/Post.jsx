import React from 'react';
import $ from 'jquery';
import CommentItem from './CommentItem.jsx';

export default class Post extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      postInfo: {},
      input: ''
    };
    this.loadPost = this.loadPost.bind(this);
    this.postUpvote = this.postUpvote.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.postComment = this.postComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.loadPost(this.props.postId)
  }

  loadPost(id) {
    $.ajax({
      url: `http://localhost:3000/api/posts/${id}`,
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        console.log(data);
        this.setState({
          postInfo: data
        })
      }
    })
    window.alert('Loading...');
  }

  postUpvote() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `http://localhost:3000/api/posts/${this.props.postId}/votes`,
        type: 'POST',
        success: function(data) {
          resolve(data)
        },
        error: function(error) {
          reject(error)
        }
      })
    })
  }

  handleClick(){
    this.postUpvote()
      .then(() => {
        this.loadPost(this.props.postId);
      })
  }

  handleChange(e){
    this.setState({
      input: e.target.value
    })
  }

  postComment() {
    return new Promise ((resolve, reject) => {
      $.ajax({
        url: `http://localhost:3000/api/posts/${this.props.postId}/comments`,
        type: 'POST',
        data: {comment: this.state.input},
        success: function(data) {
          resolve(data)
        },
        error: function(error) {
          reject(error)
        }
      })
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.postComment()
      .then(() => {
        this.loadPost(this.props.postId);
      })
  }

  render() {
    const commentItems = this.state.postInfo.comments.map((comment) => {
      return(
        <CommentItem comment={comment} />
      )
    })
    return (
      <div>
        <h3>{this.state.postInfo.title}</h3>
        <p>{this.state.postInfo.body}</p>
        <hr />
        <span className="post-stats" onClick={() => {this.handleClick()}}>{this.state.postInfo.votes} upvotes</span>
        <span className="post-stats post-stats-comments">{this.state.postInfo.comments.length} comments</span>
        <form>
          <textarea className="comment-input" placeholder="Add your comment here!" onChange={(e) => this.handleChange(e)} ></textarea>
          <button className="comment-submit" type="submit" onClick={(e) => {this.handleSubmit(e)}}>Save comment</button>
        </form>
        <ul>
          {commentItems}
        </ul>
      </div>
    )
  }
}

//there is a bug I was not able to resolve.  i can console.log this.state.postInfo.comments AND view state in react dev tools for components, and see an array with a length property.  however, when i try to reference this.state.postInfo.comments.length, debugger pauses on an error (Cannot read property 'length' of undefined). in an attempt to debug, i also tried to call slice on the array to make a shallow copy, but it said that we cannot slice undefined.