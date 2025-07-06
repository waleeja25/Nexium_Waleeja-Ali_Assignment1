'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { quotes } from '@/data/quote';
import QuoteList from './QuoteList';
import { Sparkles } from 'lucide-react'; 

export default function QuoteForm() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const filtered = quotes
      .filter(q => q.topic.toLowerCase().includes(topic.toLowerCase()))
      .slice(0, 3)
      .map((q) => q.text);
    setResults(filtered);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="border p-2 rounded w-full text-white bg-[#0a1d37] placeholder-gray-400"
          placeholder="Enter a topic e.g success, motivation"
        />
        <Button
          variant="default"
          className="w-full bg-cyan-800 hover:bg-cyan-600 transition-all text-white text-base font-semibold px-6 py-3 rounded-lg shadow-md"
        >
          Get Quotes
        </Button>
      </form>

      {results.length > 0 && (
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-2 text-xl font-semibold text-amber-500">
            <Sparkles className="w-6 h-6" />
            Top Quotes
          </div>
          <hr className="border-amber-500" />
          <QuoteList quotes={results} />
        </div>
      )}
 {hasSearched && results.length === 0 && (
        <p className="mt-6 text-white italic">No quotes found for this topic.</p>
      )}
    </div>
  );
}
