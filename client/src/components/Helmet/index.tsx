import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Helmet() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative h-[392px] w-full">
        <Image src={'/shop.png'} alt="Shop" fill />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8">
          <div className="flex items-center gap-2">
            <span className="flex items-center text-neutral-400">
              Home <ChevronRight size={18} />
            </span>
            <span className="font-semibold">Loja</span>
          </div>

          <h1 className="text-6xl font-medium">Loja</h1>

          <p className="text-center text-xl">
            Vamos projetar o lugar que você sempre imaginou.
          </p>
        </div>
      </div>
    </div>
  );
}
