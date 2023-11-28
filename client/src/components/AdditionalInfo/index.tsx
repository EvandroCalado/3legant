import { motion } from 'framer-motion';

export default function AdditionalInfo() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h2 className="text-2xl font-semibold">Informações Adicionais</h2>

      <div className="space-y-2">
        <h4 className="font-semibold text-neutral-400">Detalhes</h4>
        <p>
          Você pode usar a bandeja removível para servir. O design facilita a
          recolocação da bandeja após o uso, já que você a coloca diretamente na
          moldura da mesa sem precisar encaixá-la em nenhum furo.
        </p>
      </div>

      <div className="space-y-2">
        <h4 className="font-semibold text-neutral-400">Embalagem</h4>
        <ul>
          <li>Lagura: 20cm, Altura: 60cm, Profundidade: 21cm </li>
          <li>Peso: 1.5kg</li>
          <li>Embalagens: 1 unidade</li>
        </ul>
      </div>
    </motion.div>
  );
}
