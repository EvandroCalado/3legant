import { motion } from 'framer-motion';
import Image from 'next/image';
import CloseGray from '../../icons/close-gray';

export default function Whishlist() {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full space-y-8"
    >
      <h2 className="text-xl font-semibold">Lista de Desejos</h2>

      <div className="flex flex-col  gap-0 md:gap-8">
        <div className="flex flex-col font-semibold text-neutral-400 md:flex-row md:items-center">
          <span className="w-1/4">Produto</span>
          <span className="hidden w-1/4 md:block">Valor</span>
          <span className="hidden w-1/4 md:block">Ação</span>
        </div>

        <div className="flex flex-col items-center space-y-4 md:flex-row">
          <span className="flex w-full items-center gap-2 md:w-1/4">
            <span className="cursor-pointer">
              <CloseGray />
            </span>
            <Image src={'/cart01.png'} alt="Cart" width={80} height={80} />
            <div className="flex flex-col gap-4">
              <span>Tray Table</span>
              <span className="text-sm text-neutral-400">Cor: Preto</span>
            </div>
          </span>

          <span className="w-full md:w-1/4">R$ 19.99</span>

          <span className="w-full md:w-1/4">
            <button className="button">Adicionar ao Carrinho</button>
          </span>
        </div>
      </div>

      <div className="flex flex-col  gap-0 md:gap-8">
        <div className="flex flex-col font-semibold text-neutral-400 md:flex-row md:items-center">
          <span className="w-1/4">Produto</span>
          <span className="hidden w-1/4 md:block">Valor</span>
          <span className="hidden w-1/4 md:block">Ação</span>
        </div>

        <div className="flex flex-col items-center space-y-4 md:flex-row">
          <span className="flex w-full items-center gap-2 md:w-1/4">
            <span className="cursor-pointer">
              <CloseGray />
            </span>
            <Image src={'/cart01.png'} alt="Cart" width={80} height={80} />
            <div className="flex flex-col gap-4">
              <span>Tray Table</span>
              <span className="text-sm text-neutral-400">Cor: Preto</span>
            </div>
          </span>

          <span className="w-full md:w-1/4">R$ 19.99</span>

          <span className="w-full md:w-1/4">
            <button className="button">Adicionar ao Carrinho</button>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
