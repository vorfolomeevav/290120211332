import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

const Comment = ({ comment }) => (
  <div className="comments__comment comment">
    <div className="comment__header">
      <span className="comment__name">{comment.name}</span>
      <span className="comment__date">{comment.date}</span>
    </div>

    <div className="comment__cloud"><p>{comment.message}</p></div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.resetWarningCache.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,

};

export default Comment;
