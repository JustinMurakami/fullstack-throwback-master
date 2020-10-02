import React from 'react';
import $ from 'jquery';

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.postNewPost = this.postNewPost.bind(this);
    this.handleNewPostSubmit = this.handleNewPostSubmit.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleBodyChange(e) {
    this.setState({
      body: e.target.value
    })
  }

  postNewPost() {
    return new Promise ((resolve, reject) => {
      $.ajax({
        url: 'http://localhost:3000/api/posts',
        type: 'POST',
        dataType: 'json',
        data: {
          title: this.state.title,
          body: this.state.body
        },
        success: function(data) {
          resolve(data)
        },
        error: function(error) {
          reject(error)
        }
      })
    })
  }

  handleNewPostSubmit(e) {
    e.preventDefault();
    this.postNewPost()
      .then((data) => {
        console.log('from in data');
        console.log(data);
        this.props.viewPost(data._id);
      })
  }

  render(){
    return (
      <div>
        <h2>New Post</h2>
        <form>
          <input className="create-title-input" type="text"  placeholder="Post Title" onChange={(e) => {this.handleTitleChange(e)}}></input>
          <textarea className="create-body-textarea"  placeholder="Post Body" onChange={(e) => {this.handleBodyChange(e)}}></textarea>
          <button className="create-submit-button" type="submit" onClick={(e) => {this.handleNewPostSubmit(e)}} >Save post</button>
        </form>
      </div>
    )
  }
}