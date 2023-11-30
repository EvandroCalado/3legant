'use client';

import { useState } from 'react';
import Checkout from '../../components/Checkout';
import Order from '../../components/Order';
import ShoppingCart from '../../components/ShoppingCart';
import Checked from '../../icons/checked';
import Layout from '../../layout';

export default function Cart() {
  const [showTab, setShowTab] = useState('shoppingCart');

  return (
    <Layout>
      <section className="container mx-auto space-y-8 px-4 py-8">
        <h1 className="text-center text-5xl">
          {showTab === 'shoppingCart' && 'Carrinho'}
          {showTab === 'checkout' && 'Ckeckout'}
          {showTab === 'order' && 'Finalizar!'}
        </h1>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <span
            className={`${
              showTab !== 'shoppingCart'
                ? 'hidden border-b-green sm:flex'
                : 'border-transparent hover:border-b-primary'
            } flex cursor-pointer items-center gap-4 border-b pb-4 duration-150`}
            onClick={() => setShowTab('shoppingCart')}
          >
            <span
              className={`${
                showTab !== 'shoppingCart' ? 'bg-green' : 'bg-primary'
              } flex h-10 w-10 items-center justify-center rounded-full  text-lg text-white`}
            >
              {showTab !== 'shoppingCart' ? <Checked /> : 1}
            </span>
            <span
              className={`${
                showTab !== 'shoppingCart' ? 'text-green' : 'text-primary'
              } mr-32 font-semibold`}
            >
              Carrinho
            </span>
          </span>

          <span
            className={` ${
              showTab === 'shoppingCart' ? 'hidden opacity-20 sm:flex' : ''
            } ${
              showTab === 'order'
                ? 'hidden border-green sm:flex'
                : 'border-transparent hover:border-b-primary'
            } flex cursor-pointer items-center gap-4 border-b pb-4 duration-150`}
            onClick={() => setShowTab('checkout')}
          >
            <span
              className={`${
                showTab === 'order' ? 'bg-green' : 'bg-primary'
              } flex h-10 w-10 items-center justify-center rounded-full text-lg text-white`}
            >
              {showTab === 'order' ? <Checked /> : 2}
            </span>
            <span
              className={`${
                showTab === 'order' ? 'text-green' : 'text-primary'
              } mr-32 font-semibold`}
            >
              Checkout
            </span>
          </span>

          <span
            className={`${
              showTab !== 'order' ? 'hidden opacity-20 sm:flex' : ''
            } flex cursor-pointer items-center gap-4 border-b border-transparent pb-4 duration-150 hover:border-b-primary`}
            onClick={() => setShowTab('order')}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg text-white">
              3
            </span>
            <span className="mr-32 font-semibold text-primary">Finalizar</span>
          </span>
        </div>

        {showTab === 'shoppingCart' && <ShoppingCart />}
        {showTab === 'checkout' && <Checkout />}
        {showTab === 'order' && <Order />}
      </section>
    </Layout>
  );
}
