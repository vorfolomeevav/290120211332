import React from 'react';
import PropTypes from 'prop-types';
import './PersonInfo.scss';

const PersonInfo = ({ user }) => (
  <section
    className="user-card__person-info person-info"
  >
    <p
      className="person-info__name"
    >
      {`${user.firstName} ${user.lastName}`}
    </p>
    <p
      className="person-info__profession"
    >
      {user.profession}
    </p>
    <div className="person-info__tagline-wrapper">
      <p
        className="person-info__tagline"
      >
        {user.tagline}
      </p>
    </div>
    <img
      className="person-info__photo"
      src={user.photo}
      alt={`${user.firstName} ${user.lastName}`}
    />
  </section>
);

PersonInfo.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

export default PersonInfo;
