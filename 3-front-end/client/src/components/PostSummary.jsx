import React from 'react';

export default class PostSummary extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <li className="post-list-entry" onClick={() => {this.props.viewPost(this.props.post._id)}} >
        <div className="post-list-entry-title">{this.props.post.title}</div>
        <span className="post-list-entry-stats">{this.props.post.votes} upvotes</span> <span className="post-list-entry-stats">{this.props.post.comments.length} comment</span>
      </li>
    )
  }
}

//Complete module 3, step 2