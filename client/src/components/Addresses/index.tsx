import { motion } from 'framer-motion';
import Edit from '../../icons/edit';

export default function Addresses() {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h2 className="text-xl font-semibold">Endereços</h2>

      <div className="flex w-full flex-col items-center gap-4 md:flex-row">
        <div className="flex w-full flex-col rounded-lg border border-primary p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-semibold">Minha Casa</span>
            <span className="cursor-pointer">
              <Edit />
            </span>
          </div>
          <span className="mb-2 text-sm">Nome</span>
          <span className="mb-2 text-sm">Telefone</span>
          <span className="mb-2 text-sm">Endereço</span>
        </div>

        <div className="flex w-full flex-col rounded-lg border border-primary p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-semibold">Trabalho</span>
            <span className="cursor-pointer">
              <Edit />
            </span>
          </div>
          <span className="mb-2 text-sm">Nome</span>
          <span className="mb-2 text-sm">Telefone</span>
          <span className="mb-2 text-sm">Endereço</span>
        </div>
      </div>
    </motion.div>
  );
}
