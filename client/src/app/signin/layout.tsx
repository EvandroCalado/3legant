import Logo from '../../components/Logo';

export type SignInLayoutProps = {
  children?: React.ReactNode;
};

export default function SignInLayout({ children }: SignInLayoutProps) {
  return (
    <div className="w-full">
      <div className="mx-auto flex w-full items-center justify-center px-2 py-8 md:block md:px-[100px] lg:px-[300px]">
        <Logo />
      </div>
      {children}
    </div>
  );
}
