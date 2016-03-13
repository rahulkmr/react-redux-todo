//@flow
import React from 'react';

export const Comment = (props) =>
<div>
  <h2>{props.author}</h2>
  <p>{props.children.toString()}</p>
</div>;

export const CommentList = (props) =>
<div>
  {props.comments.map(comment =>
  <Comment author={comment.author} key={comment.id}>
    {comment.text}
  </Comment>
  )}
</div>;
