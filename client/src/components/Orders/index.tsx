import { motion } from 'framer-motion';

export default function Orders() {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full space-y-8"
    >
      <h2 className="text-xl font-semibold">Histórico de pedidos</h2>

      <div className="hidden flex-col font-semibold text-neutral-400 md:flex md:flex-row md:items-center">
        <span className="w-1/4">Número</span>
        <span className="w-1/4">Data</span>
        <span className="w-1/4">Status</span>
        <span className="w-1/4">Valor</span>
      </div>

      <div className="flex flex-row gap-16 md:flex-col md:gap-0">
        <div className="flex flex-col font-semibold text-neutral-400 md:hidden md:flex-row md:items-center">
          <span className="w-1/4">Número</span>
          <span className="w-1/4">Data</span>
          <span className="w-1/4">Status</span>
          <span className="w-1/4">Valor</span>
        </div>

        <div className="flex flex-col items-center md:flex-row">
          <span className="w-1/4">123456</span>
          <span className="w-1/4">29/11/2023</span>
          <span className="w-1/4">Pendente</span>
          <span className="w-1/4">R$499.99</span>
        </div>
      </div>

      <div className="flex flex-row gap-16 md:flex-col md:gap-0">
        <div className="flex flex-col font-semibold text-neutral-400 md:hidden md:flex-row md:items-center">
          <span className="w-1/4">Número</span>
          <span className="w-1/4">Data</span>
          <span className="w-1/4">Status</span>
          <span className="w-1/4">Valor</span>
        </div>

        <div className="flex flex-col items-center md:flex-row">
          <span className="w-1/4">123456</span>
          <span className="w-1/4">29/11/2023</span>
          <span className="w-1/4">Pendente</span>
          <span className="w-1/4">R$499.99</span>
        </div>
      </div>
    </motion.div>
  );
}
