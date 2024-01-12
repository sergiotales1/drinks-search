'use client';
import React from 'react';
import Image from 'next/image';

function SingleDrink({ drink }) {
  const title = drink.strDrink;
  const imgSrc = drink.strDrinkThumb;

  return (
    <div className="w-full flex flex-col place-items-center">
      <h1 className={`my-4 font-bold text-2xl`}>{title}</h1>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg object-cover"
        priority
        alt={title}
      />
      {/* <img className="w-44" src={imgSrc} alt="" /> */}
    </div>
  );
}

export default SingleDrink;
