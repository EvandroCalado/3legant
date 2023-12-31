'use client';

import { useState } from 'react';
import Search from '../../icons/search';

export default function MenuSearch() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative hidden sm:block">
      <span className="cursor-pointer" onClick={() => setOpen(!open)}>
        <Search />
      </span>

      <div
        className={`${
          open ? 'visible ' : 'invisible -top-2'
        } absolute right-0 top-8 z-10 flex h-8 w-80 items-center rounded-lg border bg-white p-6 transition-all duration-300`}
      >
        <input
          type="search"
          name="search"
          placeholder="Buscar..."
          className={`${
            open ? 'w-full' : 'w-0'
          } border-b border-neltral-04 bg-transparent outline-none duration-300`}
        />
      </div>
    </div>
  );
}
