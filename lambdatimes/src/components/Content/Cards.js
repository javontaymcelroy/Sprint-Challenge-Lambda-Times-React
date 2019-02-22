import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className='cards-container'>
      {props.cards
        ? props.cards.map((e, i) => <Card key={i} card={e} />)
        : null}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

export default Cards;
