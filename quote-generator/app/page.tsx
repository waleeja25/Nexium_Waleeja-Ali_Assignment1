import QuoteForm from '../components/QuoteForm';
import { Label } from '@/components/ui/label';

export default function HomePage() {
  return (
<div className="flex justify-center items-start pt-16 px-4">
  <div className="w-full max-w-lg bg-[#0a1d37] p-14 rounded-2xl shadow-2xl ring-1 ring-cyan-600/40 ring-offset-2 ring-offset-[#0a1d37] transition duration-300">
    <Label
      htmlFor="topic"
      className="block text-3xl font-extrabold mb-8 text-center text-white/90 drop-shadow-md tracking-wide">
      Enter a topic to get inspired
    </Label>
        <QuoteForm />
    </div>
  </div>
  );
}
