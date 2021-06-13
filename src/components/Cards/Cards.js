// This component holds and renders all of the cards in results.cards.

import React, { Component } from 'react';
import Card from './Card/Card';

import './Cards.css';

export default class Cards extends Component {

  constructor(props) {

    super(props);

    this.state = {
      height: 0
    };

    this.calcHeight = this.calcHeight.bind(this);

  }

  componentDidMount() {

    this.calcHeight();
    window.addEventListener('resize', this.calcHeight);

  }

  // Calculates the height dimensions for each card. This way they have a consistent height before their meta data loads.
  calcHeight() {

    const card = document.querySelector('.card');
    const { width } = card.getBoundingClientRect();
    const aspectRatio = 409 / 663;
    const height = Math.min(width, 350) / aspectRatio;

    this.setState({ height });

  }

  render() {

    const { results } = this.props;

    return (
      <div id="cards">
        {results.cards.map(card => (
          <Card
            key={card.id}
            card={card}
            height={this.state.height}
          />
        ))}
      </div>
    );

  }

}
