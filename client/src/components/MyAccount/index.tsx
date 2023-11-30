import { motion } from 'framer-motion';

export default function MyAccount() {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h2 className="text-xl font-semibold">Detalhes da Conta</h2>

      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="font-semibold uppercase text-neutral-500"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            className="rounded-lg border border-neutral-300 px-4 py-2 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-semibold uppercase text-neutral-500"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="rounded-lg border border-neutral-300 px-4 py-2 outline-none"
          />
        </div>
      </div>

      <h2 className="text-xl font-semibold">Senha</h2>

      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="old-password"
            className="font-semibold uppercase text-neutral-500"
          >
            Senha atual
          </label>
          <input
            type="password"
            id="old-password"
            className="rounded-lg border border-neutral-300 px-4 py-2 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="new-password"
            className="font-semibold uppercase text-neutral-500"
          >
            Nova senha
          </label>
          <input
            type="password"
            id="new-password"
            className="rounded-lg border border-neutral-300 px-4 py-2 outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="repeat-new-password"
            className="font-semibold uppercase text-neutral-500"
          >
            Repita nova senha
          </label>
          <input
            type="password"
            id="repeat-new-password"
            className="rounded-lg border border-neutral-300 px-4 py-2 outline-none"
          />
        </div>
      </div>

      <button className="button w-max px-8">Atualizar</button>
    </motion.div>
  );
}
