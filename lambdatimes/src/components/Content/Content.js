import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({ tabs: tabData, cards: cardData, selected: 'all' });
  }

  changeSelected = tab => {
    this.setState({ selected: tab });
  };

  filterCards = () => {
    if (this.state.selected !== 'all' && this.state.selected !== '') {
      let filteredCards = this.state.cards.slice();
      const filterCheck = this.state.selected;
      filteredCards = filteredCards.filter(e => e.tab === filterCheck);
      return filteredCards;
    }
    return this.state.cards;
  };

  render() {
    return (
      <div className='content-container'>
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
        />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
