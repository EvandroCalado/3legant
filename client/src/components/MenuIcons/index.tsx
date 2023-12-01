'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import User from '../../icons/user';
import Cart from '../Cart';
import MenuSearch from '../MenuSearch';

export default function MenuIcons() {
  const [open, setOpen] = useState(false);
  const session = useSession();

  return (
    <div className="flex items-center space-x-4">
      <MenuSearch />

      <span
        className="relative hidden cursor-pointer sm:block"
        onClick={() => setOpen(!open)}
      >
        <User />
        <div
          className={`${
            open ? 'visible top-8' : 'invisible top-4'
          } absolute right-0 z-30 flex flex-col gap-4 rounded-md border bg-white p-4 text-neutral-400 shadow-xl duration-300`}
        >
          {session.status === 'unauthenticated' ? (
            <Link href={'/signin'} className="duration-150 hover:text-primary">
              Entrar
            </Link>
          ) : (
            <>
              <button
                className="duration-150 hover:text-primary"
                onClick={() => signOut()}
              >
                Sair
              </button>
              <Link
                href={'/account'}
                className="duration-150 hover:text-primary"
              >
                Conta
              </Link>
            </>
          )}
        </div>
      </span>

      <Cart />
    </div>
  );
}
