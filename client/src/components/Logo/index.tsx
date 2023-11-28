import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href={'/'}>
      <h3
        className={twMerge('text-base font-medium sm:text-[24px]', className)}
      >
        3legant.
      </h3>
    </Link>
  );
}
