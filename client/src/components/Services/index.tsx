import Image from 'next/image';

export default function Services() {
  return (
    <section className="container mx-auto flex w-full flex-col items-center px-4 pb-16 md:flex-row">
      <div className="grid w-full grid-cols-2 gap-8 p-4">
        <div className="space-y-2">
          <Image
            src={'/icons/fast-delivery.svg'}
            alt="Delivery"
            width={48}
            height={48}
          />
          <h4 className="font-semibold">Entrega Grátis</h4>
          <p className="text-sm text-neutral-400">
            Para compras acima de R$100
          </p>
        </div>

        <div className="space-y-2">
          <Image
            src={'/icons/money.svg'}
            alt="Delivery"
            width={48}
            height={48}
          />
          <h4 className="font-semibold">Cash back</h4>
          <p className="text-sm text-neutral-400">30 dias de garantia</p>
        </div>
      </div>

      <div className="grid w-full grid-cols-2 gap-8 p-4">
        <div className="space-y-2">
          <Image
            src={'/icons/lock.svg'}
            alt="Delivery"
            width={48}
            height={48}
          />
          <h4 className="font-semibold">Pagamento Seguro</h4>
          <p className="text-sm text-neutral-400">Segurança por Stripe</p>
        </div>

        <div className="space-y-2">
          <Image
            src={'/icons/call.svg'}
            alt="Delivery"
            width={48}
            height={48}
          />
          <h4 className="font-semibold">24/7 Suporte</h4>
          <p className="text-sm text-neutral-400">Via Email e Telefone</p>
        </div>
      </div>
    </section>
  );
}
