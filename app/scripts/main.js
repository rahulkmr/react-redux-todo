//@flow
import React from 'react';
import {render} from 'react-dom';
import {CommentList} from './components/Comment';

let comments = [
  {id: 1, author: 'Diana Prince', text: 'How is everyone today!'},
  {id: 2, author: 'Clark Kent', text: 'All good here.'},
  {id: 3, author: 'Bruce Wayne', text: 'Hey everyone.'}
];

render(
  <CommentList comments={comments} />,
    document.getElementById('root')
);

