import Footer from '../components/Footer';
import Header from '../components/Header';
import Info from '../components/Info';

export type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Info />
      <Header />
      {children}
      <Footer />
    </>
  );
}
