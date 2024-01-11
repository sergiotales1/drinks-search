'use client';
import React, { useState } from 'react';
import DrinksList from '../components/DrinksList';
import { fetchData } from '../js/functions';

function DrinksPage() {
  const [drinks, setDrinks] = useState(null);

  async function handlerInputChange(e) {
    const drinks = await fetchData(e.target.value);
    if (!drinks) {
      setDrinks(null);
      return;
    }
    setDrinks(drinks);
  }

  return (
    <article className="w-2/4 text-center">
      <h1 className="text-4xl">Search for one drink!</h1>
      <form className="block" action="">
        <input
          className="border-4 outline-none mt-4 rounded-lg block w-full"
          type="text"
          onChange={handlerInputChange}
        />
      </form>
      {drinks ? (
        <DrinksList {...drinks} />
      ) : (
        <div>
          <h1>No drinks available</h1>
        </div>
      )}
    </article>
  );
}

export default DrinksPage;
