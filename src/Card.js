import React from 'react';
import PropTypes from 'prop-types';

const Card = ({title, body, id, removeIdea, name}) => {
  return (
    <div>
      <h2>Good idea, { name }!</h2>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => removeIdea(id)} >X</button>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number,
  removeIdea: PropTypes.func
}

Card.defaultProps = {
  name: 'Christie'
}

export default Card;