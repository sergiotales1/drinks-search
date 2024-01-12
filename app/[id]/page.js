import React from 'react';
import { viewDataCleaner, getData } from '../js/functions';

async function page({ params }) {
  const data = await getData(params);

  const { title, image, category, instructions, ingredients } =
    viewDataCleaner(data);

  return (
    <div className="flex justify-center flex-col sm:w-3/12 mb-16 gap-y-4">
      <h1 className="text-center text-4xl font-bold mb-4">{title}</h1>
      <img className="shadow-lg rounded-lg" src={image} alt="" />
      <h2 className="font-bold">
        Category: <span className="font-normal">{category}</span>
      </h2>
      <p className="font-bold">
        Instructions: <span className="font-normal">{instructions}</span>
      </p>
      <h1 className="font-bold">
        Ingredients:
        <p>
          {ingredients.map((ing, i) => {
            return (
              <p className="font-normal" key={i}>
                {ing}
              </p>
            );
          })}
        </p>
      </h1>
    </div>
  );
}

export default page;
