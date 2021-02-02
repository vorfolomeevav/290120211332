import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment';
import likeIcon from '../../images/like.png';
import commentIcon from '../../images/comment.png';
import './Comments.scss';

const Comments = ({ comments }) => (
  <section className="user-card__comments comments">
    <div className="comments__controls">
      <span className="comments__title">
        <span>Последние отзывы</span>
        {/* eslint-disable-next-line */}
        <a
          href="#"
          className="comments__all-link"
        >
          Все отзывы
        </a>
      </span>

      <span className="comments__reactions">
        <span className="comments__likes">
          <img
            className="comments__like-icon"
            src={likeIcon}
            alt="Like"
          />
          131
        </span>

        <span className="comments__messages">
          <img
            className="comments__comment-icon"
            src={commentIcon}
            alt="Comment Cloud"
          />
          14
        </span>
      </span>
    </div>

    <div className="comments__latest-comments">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  </section>
);

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.resetWarningCache.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default Comments;
