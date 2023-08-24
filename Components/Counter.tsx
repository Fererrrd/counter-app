'use client';

import React, { useState } from 'react';

const Counter = () => {
  const [add, setadd] = useState(0);

  const addNum = () => {
    setadd(add + 1);
  };
  const addSub = () => {
    setadd(add - 1);
    if (add <= 0) {
      setadd(0);
    }
  };

  return (
    <div>
      <h1 className="flex justify-center font-bold text-9xl mb-40 select-none">
        {add}
      </h1>
      <div className="flex  justify-center mt-20  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-24 h-24 bg-blue-400 rounded-s-full p-2 hover:bg-blue-200"
          onClick={addNum}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-24 h-24 bg-blue-400 rounded-e-full p-2 hover:bg-blue-200"
          onClick={addSub}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Counter;
