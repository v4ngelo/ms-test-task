import React from 'react';
import { Link } from 'react-router-dom';

export default ({cardName, cardImage, imageExpl, cardDescription, onAction}) => {
    return (
        <div className="carousel-card">
            <p>{cardName}</p>
            <img src={cardImage} alt="Makespace 2x5 Plan" className="responsive"/>
            <p>{imageExpl}</p>
            <p>{cardDescription}</p>

            <Link to={onAction}>Select</Link>
        </div>
    );
  };