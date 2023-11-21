import ProductDestak from '../ProductDestak';

export default function ShowRoom() {
  return (
    <div className="container mx-auto flex w-full flex-col items-center justify-center gap-8 px-4 md:flex-row">
      <div className="flex-[2]">
        <ProductDestak title="Sala de Estar" image="/paste-image03.png" />
      </div>

      <div className="flex-1">
        <ProductDestak title="Quarto" image="/paste-image01.png" isLandscape />
        <ProductDestak title="Cozinha" image="/paste-image02.png" isLandscape />
      </div>
    </div>
  );
}
