import Image from 'next/image';

const ratingStars = [1, 2, 3, 4, 5];

export default function ProductDetails() {
  return (
    <div className="space-y-4 sm:space-y-8 lg:space-y-12">
      <div className="flex items-center gap-2">
        <span className="flex items-center">
          {ratingStars.map((star) => (
            <Image
              key={star}
              src={'/icons/star-fill.svg'}
              alt="Star"
              width={16}
              height={16}
            />
          ))}
        </span>
        <span className="text-sm lg:text-lg">11 Avaliações</span>
      </div>

      <h2 className="text-3xl font-semibold lg:text-5xl">Mesa Bandeja</h2>

      <p className="text-neutral-400">
        Compre um ou alguns e torne cada espaço onde você se senta mais
        conveniente. Leve e fácil de movimentar com bandeja removível, prática
        para servir lanches.
      </p>

      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold">R$ 199,90</span>
        <span className="text-sm font-semibold text-neutral-400 line-through">
          R$ 400,00
        </span>
      </div>

      <div>
        <h4 className="font-semibold text-neutral-400">Medidas</h4>
        <span>40cm x 60cm x 60cm</span>
      </div>

      <div className="space-y-2">
        <h4 className="font-semibold text-neutral-400">Escolha a Cor</h4>

        <span>Preto</span>

        <div className="flex items-center gap-2">
          <span className="h-6 w-6 cursor-pointer rounded-full bg-primary"></span>
          <span className="h-6 w-6 cursor-pointer rounded-full bg-red"></span>
          <span className="h-6 w-6 cursor-pointer rounded-full bg-blue"></span>
          <span className="h-6 w-6 cursor-pointer rounded-full bg-green"></span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="w-6 rounded duration-150 hover:bg-neutral-400/50">
            -
          </button>
          <span>1</span>
          <button className="w-6 rounded duration-150 hover:bg-neutral-400/50">
            +
          </button>
        </div>

        <button className="flex items-center gap-2 rounded-lg border border-neltral-07 px-10 py-[10px] duration-150 hover:bg-neutral-200/60 lg:px-20">
          <Image
            src={'/icons/Line.svg'}
            alt="Whishlist"
            width={24}
            height={24}
          />
          <span>Lista de Desejos</span>
        </button>
      </div>

      <button className="button">Adicionar ao Carrinho</button>

      <div className="flex items-center gap-8 text-[12px] text-neutral-400">
        <h4 className="uppercase">Categoria</h4>

        <div className="flex items-center gap-2 text-[12px] text-primary [&>:not(:last-child)]:after:content-[',']">
          <span>Sala de Estar</span>
          <span>Quarto</span>
        </div>
      </div>
    </div>
  );
}
