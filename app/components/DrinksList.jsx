'use client';
import React, { useState } from 'react';
import SingleDrink from './SingleDrink';
import Link from 'next/link';

function DrinksList({ drinks }) {
  if (!drinks) return;
  return (
    <div className="w-full border rounded-lg grid sm:grid-cols-2 gap-8 p-4 text-center">
      {drinks.map((drink) => {
        return (
          <Link key={drink.idDrink} href={drink.idDrink}>
            <SingleDrink drink={drink} />
          </Link>
        );
      })}
    </div>
  );
}

export default DrinksList;
