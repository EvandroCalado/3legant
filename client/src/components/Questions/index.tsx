import { motion } from 'framer-motion';

export default function Questions() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h2 className="text-2xl font-semibold">Perguntas</h2>

      <div className="space-y-4 rounded-xl border border-neutral-300 p-4">
        <div>
          <h4 className="font-semibold">Pergunta</h4>
          <p>Para que serve esse produto?</p>
        </div>

        <div>
          <h4 className="font-semibold">Resposta</h4>
          <p>Serve para se sentar ou para usar como apoio.</p>
        </div>
      </div>
    </motion.div>
  );
}
