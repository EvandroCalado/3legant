import Logo from '../Logo';
import MenuIcons from '../MenuIcons';
import MenuLinks from '../MenuLinks';
import MenuMobile from '../MenuMobile';

export default function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between px-4 py-4">
      <div className="flex items-center gap-4">
        <MenuMobile />
        <Logo />
      </div>

      <MenuLinks />
      <MenuIcons />
    </header>
  );
}
