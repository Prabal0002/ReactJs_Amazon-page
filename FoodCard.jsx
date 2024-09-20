
import React, { useState } from 'react';

function FoodCard() {
  const [showCard, setShowCard] = useState(0);

  const foodCards = [
    {
      name: 'Food 1',
      description: 'Description 1',
      price: 10.99,
    },
    {
      name: 'Food 2',
      description: 'Description 2',
      price: 9.99,
    },
  ];

  return (
    <div>
      {foodCards.map((food, index) => (
        <div key={index}>
          {showCard === index && (
            <div>
              
              <h2>{food.name}</h2>
              <p>{food.description}</p>
              <p>Price: ${food.price}</p>
              <button onClick={() => setShowCard(index + 1)}>
                Next Food Card
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
          }
