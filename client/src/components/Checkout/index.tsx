import { motion } from 'framer-motion';
import Image from 'next/image';
import Money from '../../icons/money';
import Ticket from '../../icons/ticket';

export default function Checkout() {
  return (
    <motion.section
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8 md:flex-row"
    >
      <div className="flex-[2] space-y-8">
        <form className="w-full space-y-4 rounded-xl border border-neutral-300 px-4 py-8">
          <h4>Informações</h4>

          <div className="flex items-center gap-4">
            <div className="w-full space-y-2">
              <label
                htmlFor="first-name"
                className="text-[12px] font-semibold uppercase"
              >
                Nome
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Nome"
                className="w-full rounded-md border border-neutral-300 px-4 py-2 outline-none focus:border-blue"
              />
            </div>

            <div className="w-full space-y-2">
              <label
                htmlFor="last-name"
                className="text-[12px] font-semibold uppercase"
              >
                Sobrenome
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Sobrenome"
                className="w-full rounded-md border border-neutral-300 px-4 py-2 outline-none focus:border-blue"
              />
            </div>
          </div>

          <div className="w-full space-y-2">
            <label
              htmlFor="phone"
              className="text-[12px] font-semibold uppercase"
            >
              Telefone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Telefone"
              className="w-full rounded-md border border-neutral-300 px-4 py-2 outline-none focus:border-blue"
            />
          </div>

          <div className="w-full space-y-2">
            <label
              htmlFor="email"
              className="text-[12px] font-semibold uppercase"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full rounded-md border border-neutral-300 px-4 py-2 outline-none focus:border-blue"
            />
          </div>
        </form>

        <form className="w-full space-y-4 rounded-xl border border-neutral-300 px-4 py-8">
          <h4>Envio</h4>

          <div className="w-full space-y-2">
            <label
              htmlFor="address"
              className="text-[12px] font-semibold uppercase"
            >
              Endereço
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Endereço"
              className="w-full rounded-md border border-neutral-300 px-4 py-2 outline-none focus:border-blue"
            />
          </div>

          <div className="w-full space-y-2">
            <label
              htmlFor="country"
              className="text-[12px] font-semibold uppercase"
            >
              País
            </label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="País"
              className="w-full rounded-md border border-neutral-300 px-4 py-2 outline-none focus:border-blue"
            />
          </div>

          <div className="w-full space-y-2">
            <label
              htmlFor="city"
              className="text-[12px] font-semibold uppercase"
            >
              Cidade
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Cidade"
              className="w-full rounded-md border border-neutral-300 px-4 py-2 outline-none focus:border-blue"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="w-full space-y-2">
              <label
                htmlFor="state"
                className="text-[12px] font-semibold uppercase"
              >
                Estado
              </label>
              <input
                type="text"
                name="state"
                id="state"
                placeholder="Estado"
                className="w-full rounded-md border border-neutral-300 px-4 py-2 outline-none focus:border-blue"
              />
            </div>

            <div className="w-full space-y-2">
              <label
                htmlFor="zip-code"
                className="text-[12px] font-semibold uppercase"
              >
                CEP
              </label>
              <input
                type="text"
                name="zip-code"
                id="zip-code"
                placeholder="Cep"
                className="w-full rounded-md border border-neutral-300 px-4 py-2 outline-none focus:border-blue"
              />
            </div>
          </div>
        </form>

        <form className="w-full space-y-4 rounded-xl border border-neutral-300 px-4 py-8">
          <h4>Forma de pagamento</h4>

          <div className="mb-4 flex items-center justify-between rounded-md border border-neutral-400 px-4 py-3">
            <div>
              <input
                id="card"
                type="radio"
                name="default-radio"
                className="h-4 w-4 border-gray-300 bg-gray-100 accent-primary"
              />
              <label htmlFor="card" className="ms-2">
                Cartão de crédito
              </label>
            </div>

            <span>
              <Money />
            </span>
          </div>

          <div className="mb-4 flex items-center justify-between rounded-md border border-neutral-400 px-4 py-3">
            <div>
              <input
                id="paypal"
                type="radio"
                name="default-radio"
                className="h-4 w-4 border-gray-300 bg-gray-100 accent-primary"
              />
              <label htmlFor="paypal" className="ms-2">
                Paypal
              </label>
            </div>
          </div>

          <div className="border-b-[2px] border-neutral-300 pt-4" />

          <div className="w-full space-y-2">
            <label
              htmlFor="city"
              className="text-[12px] font-semibold uppercase"
            >
              Número do cartão
            </label>
            <input
              type="text"
              name="number"
              id="number"
              placeholder="1234 1234 1234"
              className="w-full rounded-md border border-neutral-300 px-4 py-2 outline-none focus:border-blue"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="w-full space-y-2">
              <label
                htmlFor="expiration"
                className="text-[12px] font-semibold uppercase"
              >
                Validade
              </label>
              <input
                type="text"
                name="expiration"
                id="expiration"
                placeholder="mm/aaaa"
                className="w-full rounded-md border border-neutral-300 px-4 py-2 outline-none focus:border-blue"
              />
            </div>

            <div className="w-full space-y-2">
              <label
                htmlFor="cvc"
                className="text-[12px] font-semibold uppercase"
              >
                cvc
              </label>
              <input
                type="text"
                name="cvc"
                id="cvc"
                placeholder="cvc"
                className="w-full rounded-md border border-neutral-300 px-4 py-2 outline-none focus:border-blue"
              />
            </div>
          </div>
        </form>

        <button className="button">Finalizar compra</button>
      </div>

      <div className="h-max flex-1 space-y-8 rounded-lg border border-neutral-300 px-4 py-8">
        <h4 className="text-2xl font-semibold">Resumo do pedido</h4>

        <div className="flex justify-between">
          <div className="flex items-center">
            <Image src={'/cart01.png'} alt="Product" width={80} height={80} />

            <div>
              <h5 className="font-semibold">Tray Table</h5>
              <span className="text-sm text-neutral-300">Cor: Preto</span>

              <div className="flex w-max items-center gap-2 rounded-md border border-neutral-300 p-0.5 px-2">
                <span className="cursor-pointer rounded-md px-2 py-0.5 duration-150 hover:bg-neutral-200">
                  -
                </span>
                <span>1</span>
                <span className="cursor-pointer rounded-md px-2 py-0.5 duration-150 hover:bg-neutral-200">
                  +
                </span>
              </div>
            </div>
          </div>

          <span className="font-semibold">R$19.99</span>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center">
            <Image src={'/cart01.png'} alt="Product" width={80} height={80} />

            <div>
              <h5 className="font-semibold">Tray Table</h5>
              <span className="text-sm text-neutral-300">Cor: Preto</span>

              <div className="flex w-max items-center gap-2 rounded-md border border-neutral-300 p-0.5 px-2">
                <span className="cursor-pointer rounded-md px-2 py-0.5 duration-150 hover:bg-neutral-200">
                  -
                </span>
                <span>1</span>
                <span className="cursor-pointer rounded-md px-2 py-0.5 duration-150 hover:bg-neutral-200">
                  +
                </span>
              </div>
            </div>
          </div>

          <span className="font-semibold">R$19.99</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Ticket />
            JenkateMW
          </span>
          <span className="text-green">-R$25.00</span>
        </div>

        <div className="flex items-center justify-between">
          <span>Envio</span>
          <span className="font-semibold">Grátis</span>
        </div>

        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span className="font-semibold">R$39.98</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-lg font-semibold">R$39.98</span>
        </div>
      </div>
    </motion.section>
  );
}
