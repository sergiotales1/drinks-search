import React from 'react';
import Link from 'next/link';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl">Welcome to our Drinks Search app!</h1>
      <Link
        href={'/drinks'}
        className="btn w-40 mt-8 inline-block bg-gray-400 rounded-lg p-2 "
      >
        Start Search
      </Link>
    </div>
  );
}

export default Home;
