import Image from 'next/image';
import Link from 'next/link';
import Ticket from '../../icons/ticket';

export default function Info() {
  return (
    <header className="flex items-center justify-center space-x-4 p-2">
      <Ticket />

      <span>30% off por tempo limitado</span>

      <Link
        href={'/shop'}
        className="hidden w-12 items-center border-b border-blue text-blue sm:flex [&>img]:ml-1 [&>img]:hover:ml-2"
      >
        Loja{' '}
        <Image
          src={'/icons/arrow-right.svg'}
          alt="Arrow"
          width={14}
          height={14}
          className="text-blue duration-150"
        />
      </Link>
    </header>
  );
}
