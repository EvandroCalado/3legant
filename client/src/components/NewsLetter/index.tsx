import Image from 'next/image';

export default function NewsLetter() {
  return (
    <div className="relative flex h-[360px] items-center justify-center overflow-hidden bg-zinc-100 px-4">
      <Image
        src={'/news02.png'}
        alt="Footer 01"
        width={500}
        height={500}
        className="absolute -left-48 hidden lg:block"
      />

      <div className="flex flex-col items-center px-4">
        <h2 className="text-4xl font-semibold">Receba Nossas Novidades</h2>

        <p className="mb-12 mt-4">
          Cadastre-se para novidades, produtos e promoções
        </p>

        <form className="relative flex w-80 items-center border-b border-neutral-300 sm:w-96">
          <Image
            src={'/icons/mail.svg'}
            alt="Email"
            width={18}
            height={18}
            className="absolute left-0"
          />

          <input
            type="email"
            placeholder="Email"
            className="bg-transparent px-8 py-2 outline-none"
          />

          <button className="absolute right-0 rounded-md p-1 text-[12px] text-neutral-400 duration-150 hover:bg-neutral-200">
            Cadastrar
          </button>
        </form>
      </div>

      <Image
        src={'/news01.png'}
        alt="Footer 01"
        width={500}
        height={500}
        className="absolute -right-48 hidden lg:block"
      />
    </div>
  );
}
