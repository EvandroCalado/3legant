import Image from 'next/image';
import Logo from '../Logo';
import MenuLinks from '../MenuLinks';

export default function Footer() {
  return (
    <div className="h-[570px] space-y-16 bg-neltral-07 px-4 pb-8 pt-20 sm:h-[250px]">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-0">
          <Logo className="pr-0 text-xl text-white sm:pr-6" />
          <span className="border-t border-white pl-0 text-white sm:border-l sm:border-t-0 sm:border-white sm:pl-6">
            Presentes e Decoração
          </span>
        </div>

        <MenuLinks className="flex flex-col items-center justify-center gap-6 space-x-0 text-white sm:flex-row hover:[&>a]:text-neltral-04" />
      </div>

      <div className="container mx-auto flex flex-col items-center justify-between border-t border-neltral-04 px-4 py-4 sm:flex-row">
        <div className="flex flex-col items-center gap-6 text-[12px] text-white sm:flex-row md:text-sm">
          <span>
            © {new Date().getFullYear()} 3legant. Todos os direitos reservados
          </span>
          <div className="space-x-2 font-semibold sm:space-x-6">
            <span>Politica de privacidade</span>
            <span>Termos de uso</span>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-6 sm:mt-0">
          <Image
            src={'/icons/instagram.svg'}
            alt="Instagram"
            width={24}
            height={24}
            className=""
          />
          <Image
            src={'/icons/facebook.svg'}
            alt="Facebook"
            width={24}
            height={24}
          />
          <Image
            src={'/icons/youtube.svg'}
            alt="Youtube"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}
