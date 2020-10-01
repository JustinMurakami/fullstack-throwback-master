import React from 'react';

export default class PostSummary extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <li>
        <h3>{this.props.post.title}</h3>
        <p>Upvotes: {this.props.post.votes}</p>
        <p>Comments: {this.props.post.comments.length}</p>
      </li>
    )
  }
}