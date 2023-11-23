'use client';

import Image from 'next/image';
import { useState } from 'react';
import Logo from '../Logo';
import MenuLinksMobile from '../MenuLinksMobile';
import MenuSearchMobile from '../MenuSearchMobile';

export default function MenuMobile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`${
          open ? 'block' : 'hidden'
        } fixed inset-0 z-10 bg-primary/50 sm:hidden`}
        onClick={() => setOpen(!open)}
      ></div>
      <div
        className={`${
          open ? 'w-full bg-primary' : ''
        } relative z-20 m-0 sm:hidden`}
      >
        <Image
          src={'/icons/menu.svg'}
          alt="Menu"
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />

        <div
          className={`${
            open ? 'left-0' : '-left-72'
          } fixed top-0 z-30 flex h-screen w-72 flex-col justify-between space-y-4 bg-white p-4 duration-300`}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Logo />
              <Image
                src={'/icons/x.svg'}
                alt="Close"
                width={24}
                height={24}
                className="cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
            <MenuSearchMobile />
            <MenuLinksMobile />
          </div>

          <button className="button">Entrar</button>
        </div>
      </div>
    </>
  );
}
