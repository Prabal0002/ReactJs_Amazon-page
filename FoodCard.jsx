
import React, { useState } from 'react';

function FoodCard() {
  const [showCard, setShowCard] = useState(0);
  const burger= "https://www.vecteezy.com/photo/23558535-close-up-of-a-juicy-burger-with-fries-it-look-very-delicious-big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-and-red-onion"
  const pizza = "https://www.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_7572612.htm#query=pizza&position=3&from_view=keyword&track=ais_hybrid&uuid=b89762d2-e636-4d12-8d5d-17e5cd86bfe3";
  const foodCards = [
    {
      image:burger,
      name: 'Burger',
      description: 'this is testy burger',
      price: 10.99$,
    },
    {
      image:pizza,
      name: 'Pizza ',
      description: 'this is testy pizza',
      price: 9.99$,
    },
  ];

  return (
    <div>
      {foodCards.map((food, index) => (
        <div key={index}>
          {showCard === index && (
            <div>
              <image>{food.image}</image>
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
