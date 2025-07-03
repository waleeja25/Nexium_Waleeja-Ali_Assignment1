import QuoteForm from '../components/QuoteForm';

export default function HomePage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Enter a topic to get inspired:</h2>
      <QuoteForm />
    </div>
  );
}
