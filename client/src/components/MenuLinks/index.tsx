import Link from 'next/link';

const MenuItems = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'Loja',
    path: '/shop',
  },
  {
    id: 3,
    title: 'Contato',
    path: '/contact',
  },
];

export default function MenuLinks() {
  return (
    <div className="hidden items-center space-x-4 font-semibold text-neltral-04 sm:flex">
      {MenuItems.map((item) => (
        <Link
          key={item.id}
          href={item.path}
          className="duration-150 hover:text-primary"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}
