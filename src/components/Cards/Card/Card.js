// This component displays the information for a single card. It is rendered by the Cards component.

import { useState } from 'react';
import './Card.css'

export default function Card(props) {

  const { card, height } = props;

  const [ isLoaded, setIsLoaded ] = useState(false);

  return (
    <div id={card.id} className="card" style={{
      height: `${height}px`
    }}>
      <img
        className="card-img"
        alt="Image of the given playing card."
        src={card.imageUrl}
        onLoad={e => setIsLoaded(true)}
      />
      {!isLoaded &&
        <div className="loading-animation-container">
          {Array.of(0, 1, 2, 3, 4).map(num => (
            <div className="loading-block" style={{
              animation: `grow 1s linear ${num * 0.1}s infinite`,
              backgroundColor: `rgb(${150 / 5 * (num + 1)}, ${150 / 5 * (num + 1)}, ${150 / 5 * (num + 1)})`
            }}></div>
          ))}
        </div>
      }
      <div className="card-back" style={{
        opacity: !isLoaded ? 0 : ''
      }}>
        <h3 className="card-name">{card.name}</h3>
        <div className="card-description">
          <h3>Description</h3>
          <p>{card.text || "No Description"}</p>
        </div>
        <div className="card-field">
          <h3 className="card-field-name">Set Name:</h3>
          <h4 className="card-field-value">{card.set.name}</h4>
        </div>
        <div className="card-field">
          <h3 className="card-field-name">Type:</h3>
          <h4 className="card-field-value">{card.type}</h4>
        </div>
      </div>
    </div>
  );

}
