import Image from 'next/image';
import Link from 'next/link';

export default function FlashSale() {
  return (
    <section className="flex h-screen flex-col items-center gap-20 md:h-max md:flex-row">
      <div className="relative h-[532px] w-full flex-1">
        <Image
          src={'/flash-sale.png'}
          alt="Flash Sale"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 space-y-4 px-4">
        <h4 className="font-semibold uppercase text-blue">
          Com até 35% de desconto
        </h4>

        <h2 className="text-2xl font-semibold">
          <span className="uppercase">Centenas</span> de <br />
          Ofertas com preços baixo!
        </h2>

        <p>
          Está mais acessível do que nunca dar uma reforma
          <br /> elegante em todos os cômodos da sua casa
        </p>

        <Link
          href={'/shop'}
          className="flex w-12 items-center border-b border-primary text-sm font-semibold text-primary [&>img]:ml-1 [&>img]:hover:ml-2"
        >
          Loja{' '}
          <Image
            src={'/icons/arrow-black.svg'}
            alt="Arrow"
            width={24}
            height={24}
            className="h-4 w-4 text-primary duration-150"
          />
        </Link>
      </div>
    </section>
  );
}
