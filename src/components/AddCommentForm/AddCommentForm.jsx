import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddCommentForm.scss';

const AddCommentForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [formError, setFormError] = useState('');

  const validateForm = (text) => {
    if (text.length === 0) {
      setFormError('Message should not be empty');
      return false;
    }
    if (text.length > 300) {
      setFormError('Message should be up to 300 characters long');
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimedInputValue = inputValue.trim();
    const isValid = validateForm(trimedInputValue);

    if (!isValid) {
      return;
    }
    onSubmit(inputValue);
    setInputValue('');
  };

  const keydownHandler = (event) => {
    if (event.code === 'Enter' && event.ctrlKey) {
      handleSubmit(event);
    }
  };

  const handleInput = (event) => {
    setFormError('');
    setInputValue(event.target.value);
  };

  return (
    <section className="user-card__form form-section">
      <form
        className="form-section__form"
        onSubmit={handleSubmit}
      >
        <textarea
          className="form-section__comment-input"
          rows="5"
          cols="30"
          wrap="hard"
          style={{ border: formError ? '1px solid red' : undefined }}
          value={inputValue}
          onKeyPress={keydownHandler}
          onChange={handleInput}
        />
        {formError
          && <span className="form-section__error-message">{formError}</span>}

        <button
          className="form-section__submit-button"
          type="submit"
        >
          <p className="form-section__button-text">Написать консультанту</p>
        </button>
      </form>
    </section>
  );
};

AddCommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddCommentForm;
