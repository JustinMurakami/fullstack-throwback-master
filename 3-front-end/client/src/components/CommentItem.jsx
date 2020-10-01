import React from 'react';

export default class CommentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <li className="comment-entry">{this.props.comment}</li>
  }
}