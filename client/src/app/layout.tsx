import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/globals.css';
import Providers from '../utils/providers';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: '3legant',
  description: 'Loja de móveis com design único.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <Providers>
        <body className={poppins.className}>
          <main>{children}</main>
        </body>
      </Providers>
    </html>
  );
}
