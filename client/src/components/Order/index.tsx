import { motion } from 'framer-motion';
import Image from 'next/image';

export type OrderProps = {
  title?: string;
};

export default function Order({ title = 'Order' }: OrderProps) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center space-y-8"
    >
      <h4 className="text-lg text-neutral-400 md:text-xl">Obrigado 🎉</h4>

      <h1 className="text-2xl md:text-4xl">Seu pedido foi recebido</h1>

      <div className="flex flex-wrap items-center gap-4">
        <div className="relative w-max">
          <Image src={'/cart01.png'} alt="Cart" width={80} height={80} />
          <div className="absolute -right-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
            1
          </div>
        </div>

        <div className="relative w-max">
          <Image src={'/cart01.png'} alt="Cart" width={80} height={80} />
          <div className="absolute -right-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
            1
          </div>
        </div>

        <div className="relative w-max">
          <Image src={'/cart01.png'} alt="Cart" width={80} height={80} />
          <div className="absolute -right-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
            1
          </div>
        </div>
      </div>

      <div className="flex w-72 flex-col gap-2 md:w-96">
        <div className="flex items-center justify-between">
          <span className="text-neutral-400">Número do pedido:</span>{' '}
          <span>123456</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-neutral-400">Data:</span>{' '}
          <span>28, Novembro de 2023</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-neutral-400">Total:</span>{' '}
          <span>R$1.200.99</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-neutral-400">Forma de pagamento:</span>{' '}
          <span>Cartão</span>
        </div>
      </div>

      <button className="button w-max rounded-full px-4">
        Histórico de pedidos
      </button>
    </motion.div>
  );
}
