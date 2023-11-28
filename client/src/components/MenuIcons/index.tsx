import Link from 'next/link';
import User from '../../icons/user';
import Wishlist from '../../icons/wishlist';
import Cart from '../Cart';
import MenuSearch from '../MenuSearch';

export default function MenuIcons() {
  return (
    <div className="flex items-center space-x-4">
      <MenuSearch />

      <span className="hidden cursor-pointer sm:block">
        <User />
      </span>

      <Link href={'/wishlist'} className="relative cursor-pointer">
        <Wishlist />
        <span className="absolute -left-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
          1
        </span>
      </Link>

      <Cart />
    </div>
  );
}
