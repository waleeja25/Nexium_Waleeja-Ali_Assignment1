import QuoteForm from '../components/QuoteForm';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-start justify-center pt-16 bg-gray-50 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">
        <h2  className="text-3xl font-bold mb-6 text-center text-gray-800">Enter a topic to get inspired</h2>
        <QuoteForm />
      </div>

    </div>
  );
}
