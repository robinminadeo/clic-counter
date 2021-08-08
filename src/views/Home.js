import React from 'react';

function Home({
  onIncrement,
  onDecrement,
  counter,
}) {
  return (
    <div>
      <h1>Vous avez cliqué {counter} fois</h1>
      <button onClick={onIncrement}>
        Augmenter
      </button>
      <button onClick={onDecrement}>
        Diminuer
      </button>
    </div>
  );
};

export default Home;
