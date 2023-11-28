import { motion } from 'framer-motion';
import Image from 'next/image';
import CloseGray from '../../icons/close-gray';
import TicketGray from '../../icons/ticket-gray';

export default function ShoppingCart() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex w-full flex-col items-center gap-16 py-8 md:flex-row"
    >
      <div className="w-full flex-[2]">
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center border-b border-b-primary pb-4">
            <span className="flex-[2]">Produtos</span>
            <span className="hidden flex-1 text-right md:block">
              Quantidade
            </span>
            <span className="hidden flex-1 text-right md:block">Preço</span>
            <span className="hidden flex-1 text-right md:block">Subtotal</span>
          </div>

          <div className="my-4 flex w-full items-center">
            <div className="flex flex-[2] items-center gap-4">
              <div>
                <Image src={'/cart01.png'} alt="Shop" width={80} height={80} />
              </div>

              <div className="flex flex-col space-y-2 py-2">
                <h4 className="font-semibold">Tray Table</h4>
                <span className="text-sm text-neutral-400">Cor: Preto</span>

                <div className="flex-1 text-right text-lg md:hidden">
                  <span className="space-x-2 rounded-md border border-primary px-1 py-0.5">
                    <span
                      className="cursor-pointer rounded-md
                p-0.5 px-2 duration-150 hover:bg-neutral-200"
                    >
                      -
                    </span>
                    <span className="font-semibold">1</span>
                    <span
                      className="cursor-pointer rounded-md
                p-0.5 px-2 duration-150 hover:bg-neutral-200"
                    >
                      +
                    </span>
                  </span>
                </div>

                <span className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-neutral-500 [&>svg]:w-4">
                  <CloseGray />
                  Remove
                </span>
              </div>
            </div>

            <div className="hidden flex-1 text-right text-lg md:block">
              <span className="space-x-4 rounded-md border border-primary p-1">
                <span
                  className="cursor-pointer rounded-md
                p-0.5 px-2 duration-150 hover:bg-neutral-200"
                >
                  -
                </span>
                <span className="font-semibold">1</span>
                <span
                  className="cursor-pointer rounded-md
                p-0.5 px-2 duration-150 hover:bg-neutral-200"
                >
                  +
                </span>
              </span>
            </div>

            <div className="hidden flex-1 text-right md:block">R$ 19.99</div>

            <div className="flex-1 text-right font-semibold">R$ 19.99</div>
          </div>

          <div className="my-4 flex w-full items-center">
            <div className="flex flex-[2] items-center gap-4">
              <div>
                <Image src={'/cart01.png'} alt="Shop" width={80} height={80} />
              </div>

              <div className="flex flex-col space-y-2 py-2">
                <h4 className="font-semibold">Tray Table</h4>
                <span className="text-sm text-neutral-400">Cor: Preto</span>

                <div className="flex-1 text-right text-lg md:hidden">
                  <span className="space-x-2 rounded-md border border-primary px-1 py-0.5">
                    <span
                      className="cursor-pointer rounded-md
                p-0.5 px-2 duration-150 hover:bg-neutral-200"
                    >
                      -
                    </span>
                    <span className="font-semibold">1</span>
                    <span
                      className="cursor-pointer rounded-md
                p-0.5 px-2 duration-150 hover:bg-neutral-200"
                    >
                      +
                    </span>
                  </span>
                </div>

                <span className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-neutral-500 [&>svg]:w-4">
                  <CloseGray />
                  Remove
                </span>
              </div>
            </div>

            <div className="hidden flex-1 text-right text-lg md:block">
              <span className="space-x-4 rounded-md border border-primary px-2 py-1">
                <span
                  className="cursor-pointer rounded-md
                p-0.5 px-2 duration-150 hover:bg-neutral-200"
                >
                  -
                </span>
                <span className="font-semibold">1</span>
                <span
                  className="cursor-pointer rounded-md
                p-0.5 px-2 duration-150 hover:bg-neutral-200"
                >
                  +
                </span>
              </span>
            </div>

            <div className="hidden flex-1 text-right md:block">R$ 19.99</div>

            <div className="flex-1 text-right font-semibold">R$ 19.99</div>
          </div>
        </div>

        <div className="flex w-full flex-col space-y-2">
          <h4 className="font-semibold">Tem um cupom?</h4>
          <p className="text-sm text-neutral-400">Adicione o código do cupom</p>

          <div className="flex w-full items-center border border-neutral-400 px-3 py-2 lg:w-1/2">
            <span className="[&>svg]:text-neutral-400">
              <TicketGray />
            </span>
            <input
              type="text"
              placeholder="Cupom"
              className="ml-2 w-full outline-none"
            />
            <button className="rounded-lg px-2 py-1 duration-150 hover:bg-neutral-200">
              Aplicar
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex-1 space-y-8 rounded-lg border border-primary p-4">
        <h4 className="text-xl font-semibold">Resumo</h4>

        <div>
          <div className="mb-4 flex items-center justify-between rounded-md border border-neutral-400 px-4 py-3">
            <div>
              <input
                id="free"
                type="radio"
                name="default-radio"
                className="h-4 w-4 border-gray-300 bg-gray-100 accent-primary"
              />
              <label htmlFor="free" className="ms-2">
                Frete grátis
              </label>
            </div>

            <span>R$0.00</span>
          </div>

          <div className="mb-4 flex items-center justify-between rounded-md border border-neutral-400 px-4 py-3">
            <div>
              <input
                id="express"
                type="radio"
                name="default-radio"
                className="h-4 w-4 border-gray-300 bg-gray-100 accent-primary"
              />
              <label htmlFor="express" className="ms-2">
                Entrega expressa
              </label>
            </div>

            <span>R$20.00</span>
          </div>

          <div className="mb-4 flex items-center justify-between rounded-md border border-neutral-400 px-4 py-3">
            <div>
              <input
                id="pick"
                type="radio"
                name="default-radio"
                className="h-4 w-4 border-gray-300 bg-gray-100 accent-primary"
              />
              <label htmlFor="pick" className="ms-2">
                Retirar
              </label>
            </div>

            <span>R$0.00</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span className="font-semibold">R$1234.00</span>
        </div>

        <div className="flex items-center justify-between text-lg font-semibold">
          <span>Total</span>
          <span>R$1234.00</span>
        </div>

        <button className="button">Checkout</button>
      </div>
    </motion.div>
  );
}
