import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

type QuoteListProps = {
  quotes: string[];
};

const QuoteList = ({ quotes }: QuoteListProps) => {
  return (
    <ul className="mt-6 space-y-4 max-w-xl mx-auto">
      {quotes.map((quote, index) => (
        <Card key={index} 
         className="bg-white p-5 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
          <CardContent className="text-gray-800 leading-relaxed text-lg italic">“{quote}”</CardContent>
        </Card>
      ))}
    </ul>
  );
};

export default QuoteList;
