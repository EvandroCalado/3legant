'use client';

import { useState } from 'react';
import Addresses from '../../components/Addresses';
import MyAccount from '../../components/MyAccount';
import Orders from '../../components/Orders';
import Whishlist from '../../components/Whishlist';
import Camera from '../../icons/camera';
import Layout from '../../layout';

export default function Account() {
  const [showTab, setShowTab] = useState('account');

  return (
    <Layout>
      <section className="container mx-auto my-16 space-y-16 px-4">
        <h1 className="text-center text-5xl font-semibold">Minha Conta</h1>

        <div className="flex flex-col gap-16 md:flex-row">
          <div className="space-y-16 md:w-1/5">
            <div className="flex flex-col items-center gap-2">
              <div className="relative h-24 w-24 rounded-full bg-primary">
                <span className="absolute bottom-0 right-0 rounded-full border-[2px] border-white bg-primary p-1 [&>svg]:h-5 [&>svg]:w-5">
                  <Camera />
                </span>
              </div>
              <span className="font-semibold">Evandro Calado</span>
            </div>

            <div className="flex flex-col gap-4">
              <span
                className={`${
                  showTab === 'account'
                    ? 'border-b-primary text-primary'
                    : 'hover:border-b-primary hover:text-primary'
                } cursor-pointer border-b border-transparent text-neutral-400 duration-150`}
                onClick={() => setShowTab('account')}
              >
                Conta
              </span>
              <span
                className={`${
                  showTab === 'addresses'
                    ? 'border-b-primary text-primary'
                    : 'hover:border-b-primary hover:text-primary'
                } cursor-pointer border-b border-transparent text-neutral-400 duration-150 hover:border-b-primary hover:text-primary`}
                onClick={() => setShowTab('addresses')}
              >
                Endereço
              </span>
              <span
                className={`${
                  showTab === 'orders'
                    ? 'border-b-primary text-primary'
                    : 'hover:border-b-primary hover:text-primary'
                } cursor-pointer border-b border-transparent text-neutral-400 duration-150 hover:border-b-primary hover:text-primary`}
                onClick={() => setShowTab('orders')}
              >
                Pedidos
              </span>
              <span
                className={`${
                  showTab === 'wishlist'
                    ? 'border-b-primary text-primary'
                    : 'hover:border-b-primary hover:text-primary'
                } cursor-pointer border-b border-transparent text-neutral-400 duration-150 hover:border-b-primary hover:text-primary`}
                onClick={() => setShowTab('wishlist')}
              >
                Lista de desejos
              </span>
              <span className="cursor-pointer border-b border-transparent text-neutral-400 duration-150 hover:border-b-primary hover:text-primary">
                Sair
              </span>
            </div>
          </div>

          <div className="w-full md:w-4/5">
            {showTab === 'account' && <MyAccount />}
            {showTab === 'addresses' && <Addresses />}
            {showTab === 'orders' && <Orders />}
            {showTab === 'wishlist' && <Whishlist />}
          </div>
        </div>
      </section>
    </Layout>
  );
}
