import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className='cards-container'>
      {props.cards
        ? props.cards.map((e, i) => <Card key={i} card={e} />)
        : null}
    </div>
  );
};

// PROPTYPES

Cards.PropTypes = {
  cards: PropTypes.array.isRequired
};

export default Cards;
