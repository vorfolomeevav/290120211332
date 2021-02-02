import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Services.scss';

const Services = ({ services }) => {
  const [totalQuantity] = useState(services
    .reduce((acc, value) => acc + value.quantity, 0));

  const [maxQuantity] = useState(services.reduce((acc, value) => {
    if (value.quantity > acc) {
      return value.quantity;
    }
    return acc;
  }, 0));

  return (
    <section className="user-card__services services">
      <p className="services__title">
        Услуг
      </p>

      <div className="services__block">
        {services.map((service) => (
          <div key={service.id} className="services__progress-bar-line">
            <span
              className="services__progress-bar-progress"
              style={{ width: `${Math.round((service.quantity / maxQuantity) * 100)}%`, background: service.quantity === maxQuantity ? '#B1E19B' : '#ACE2F8' }}
            />

            <span
              className="services__progress-bar-title"
            >
              {service.name}
            </span>

            <span className="services__progress-bar-value">
              {service.quantity}
            </span>
          </div>
        ))}
      </div>

      <div className="services__total">
        <span>Всего</span>
        <span className="services__amount">
          {totalQuantity}
        </span>
      </div>
    </section>
  );
};

Services.propTypes = {
  services: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequred,
  }).isRequired).isRequired,
};

export default Services;
