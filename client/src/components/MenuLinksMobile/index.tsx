import Link from 'next/link';

const menuLinks = [
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
    title: 'Blog',
    path: '/blog',
  },
  {
    id: 4,
    title: 'Contato',
    path: '/contato',
  },
];

export default function MenuLinksMobile() {
  return (
    <div className="flex flex-col space-y-4">
      {menuLinks.map((link) => (
        <Link
          key={link.id}
          href={link.path}
          className="text-neltral-04 hover:text-primary"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
