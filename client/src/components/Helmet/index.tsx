import Image from 'next/image';

export type HelmetProps = {
  path: string;
  image: string;
  title: string;
  description: string;
};

export default function Helmet({
  path,
  image,
  title,
  description,
}: HelmetProps) {
  return (
    <div className="container mx-auto">
      <div className="relative h-[392px] w-full">
        <Image src={image} alt={title} fill />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8">
          <div className="flex items-center text-sm text-neutral-500">
            {path.replace(' ', ' › ')}
          </div>

          <h1 className="text-6xl font-medium">{title}</h1>

          <p className="text-center text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
}
