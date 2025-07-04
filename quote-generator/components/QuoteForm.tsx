'use client';

import { useState } from 'react';
import { quotes } from '@/data/quote';
import QuoteList from './QuoteList';

export default function QuoteForm() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = quotes
      .filter(q => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map(q => q.text);
    setResults(filtered);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Enter a topic"
        />
        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded">
          Generate Quotes
        </button>
      </form>

      <QuoteList quotes={results} />
    </div>
  );
}
