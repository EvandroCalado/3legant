import Image from 'next/image';

export default function MenuSearchMobile() {
  return (
    <div className="flex  items-center space-x-2 rounded-lg border border-neltral-04 p-2">
      <Image src={'/icons/search.svg'} alt="Search" width={24} height={24} />
      <input
        type="search"
        placeholder="Buscar..."
        className="w-full outline-none"
      />
    </div>
  );
}
