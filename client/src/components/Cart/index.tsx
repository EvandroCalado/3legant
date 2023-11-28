'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Close from '../../icons/close';
import CloseGray from '../../icons/close-gray';
import ShoppingBag from '../../icons/shopping-bag';

export default function Cart() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative cursor-pointer" onClick={() => setOpen(!open)}>
        <ShoppingBag />

        <span className="absolute -left-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
          1
        </span>
      </div>

      <div
        className={`${
          open ? 'block' : 'hidden'
        } fixed -left-4 bottom-0 right-0 top-0 z-30 bg-primary/50`}
        onClick={() => setOpen(!open)}
      ></div>

      <div
        className={`${
          open ? 'right-0' : '-right-72 sm:-right-[400px]'
        } fixed bottom-0 top-0 z-40 w-72 bg-white p-4 duration-300 sm:w-[400px]`}
      >
        <div className="flex items-center justify-between py-4">
          <h2 className="text-xl font-semibold">Carrinho</h2>

          <span className="cursor-pointer" onClick={() => setOpen(!open)}>
            <Close />
          </span>
        </div>

        <div className="flex h-full flex-col justify-between pb-20">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image src={'/cart01.png'} alt="Cart" width={70} height={70} />

              <div className="flex flex-1 items-center justify-between">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">Tray Table</h4>
                  <span className="text-[12px] text-neutral-400">
                    Color: Black
                  </span>

                  <div className="flex w-16 items-center justify-between rounded border border-neutral-400 px-2">
                    <button className="flex items-center justify-center text-neutral-400">
                      -
                    </button>
                    <span className="text-[12px]">1</span>
                    <button className="flex items-center justify-center text-neutral-400">
                      +
                    </button>
                  </div>
                </div>

                <div className=" flex h-full flex-col items-end justify-between gap-6">
                  <span className="cursor-pointer [&>svg]:w-4">
                    <CloseGray />
                  </span>
                  <span className="text-[12px] font-semibold">R$ 99.99</span>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <Image src={'/cart02.png'} alt="Cart" width={70} height={70} />

              <div className="flex flex-1 items-center justify-between">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">Tray Table</h4>
                  <span className="text-[12px] text-neutral-400">
                    Color: Black
                  </span>

                  <div className="flex w-16 items-center justify-between rounded border border-neutral-400 px-2">
                    <button className="flex items-center justify-center text-neutral-400">
                      -
                    </button>
                    <span className="text-[12px]">1</span>
                    <button className="flex items-center justify-center text-neutral-400">
                      +
                    </button>
                  </div>
                </div>

                <div className=" flex h-full flex-col items-end justify-between gap-6">
                  <span className="cursor-pointer [&>svg]:w-4">
                    <CloseGray />
                  </span>
                  <span className="text-[12px] font-semibold">R$ 99.99</span>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <Image src={'/cart03.png'} alt="Cart" width={70} height={70} />

              <div className="flex flex-1 items-center justify-between">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold">Tray Table</h4>
                  <span className="text-[12px] text-neutral-400">
                    Color: Black
                  </span>

                  <div className="flex w-16 items-center justify-between rounded border border-neutral-400 px-2">
                    <button className="flex items-center justify-center text-neutral-400">
                      -
                    </button>
                    <span className="text-[12px]">1</span>
                    <button className="flex items-center justify-center text-neutral-400">
                      +
                    </button>
                  </div>
                </div>

                <div className=" flex h-full flex-col items-end justify-between gap-6">
                  <span className="cursor-pointer [&>svg]:w-4">
                    <CloseGray />
                  </span>
                  <span className="text-[12px] font-semibold">R$ 99.99</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between text-[12px]">
              <span>Subtotal</span>
              <span className="font-semibold">R$ 99.99</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Total</span>
              <span>R$ 399.99</span>
            </div>

            <button className="button">Finalizar compra</button>

            <div className="flex items-center justify-center">
              <Link
                href={'/cart'}
                className="mx-auto mt-4 cursor-pointer border-b border-primary text-sm font-semibold"
              >
                Ver Carrinho
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
