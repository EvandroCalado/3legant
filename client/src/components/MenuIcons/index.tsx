import Image from 'next/image';
import Link from 'next/link';
import MenuSearch from '../MenuSearch';

export default function MenuIcons() {
  return (
    <div className="flex items-center space-x-4">
      <MenuSearch />

      <Image
        src={'/icons/user-circle.svg'}
        alt="User"
        width={24}
        height={24}
        className={'hidden cursor-pointer sm:block'}
      />

      <Link href={'/wishlist'} className="relative cursor-pointer">
        <Image src={'icons/Line.svg'} alt="Wishlist" width={24} height={24} />
        <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
          1
        </span>
      </Link>

      <Link href={'/cart'} className="relative cursor-pointer">
        <Image
          src={'icons/shopping-bag.svg'}
          alt="Shopping bag"
          width={24}
          height={24}
        />
        <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
          1
        </span>
      </Link>
    </div>
  );
}
