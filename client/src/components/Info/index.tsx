import Image from 'next/image';
import Link from 'next/link';

export default function Info() {
  return (
    <header className="flex items-center justify-center space-x-4 p-2">
      <Image
        src={'/icons/ticket-percent.svg'}
        alt="Ticket icon"
        width={24}
        height={24}
      />

      <span>30% off por tempo limitado</span>

      <Link
        href={'/'}
        className="flex items-center border-b border-blue text-blue [&>img]:hover:ml-1"
      >
        Loja{' '}
        <Image
          src={'/icons/arrow-right.svg'}
          alt="Arrow"
          width={24}
          height={24}
          className="text-blue duration-150"
        />
      </Link>
    </header>
  );
}
