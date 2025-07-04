import React from 'react';

type QuoteListProps = {
  quotes: string[];
};

const QuoteList = ({ quotes }: QuoteListProps) => {
  if (quotes.length === 0) {
    return <p className="text-gray-500 text-center mt-6 italic">No quotes found.</p>;
  }

  return (
    <ul className="mt-6 space-y-4 max-w-xl mx-auto">
      {quotes.map((quote, index) => (
        <li key={index} 
         className="bg-white p-5 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
          <p className="text-gray-800 leading-relaxed text-lg italic">“{quote}”</p>
        </li>
      ))}
    </ul>
  );
};

export default QuoteList;
