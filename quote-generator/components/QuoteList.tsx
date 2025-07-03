// components/QuoteList.tsx
import React from 'react';

type QuoteListProps = {
  quotes: string[];
};

const QuoteList = ({ quotes }: QuoteListProps) => {
  if (quotes.length === 0) {
    return <p className="text-gray-500">No quotes found.</p>;
  }

  return (
    <ul className="space-y-2">
      {quotes.map((quote, index) => (
        <li key={index} className="bg-black p-3 shadow rounded">
          {quote}
        </li>
      ))}
    </ul>
  );
};

export default QuoteList;
