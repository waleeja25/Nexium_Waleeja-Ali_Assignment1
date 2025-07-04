import QuoteForm from '../components/QuoteForm';
import { Label } from '@/components/ui/label';

export default function HomePage() {
  return (
    <div className="flex justify-center items-start pt-16 px-4">
      <div className="w-full max-w-lg bg-[#0a1d37] p-14 rounded-xl shadow-lg">
        <Label htmlFor='topic'  className="text-3xl font-bold mb-6 text-center text-white">Enter a topic to get inspired</Label>
        <QuoteForm />
      </div>

    </div>
  );
}
