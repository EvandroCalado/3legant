import Logo from '../../components/Logo';

export type SignUpLayoutProps = {
  children?: React.ReactNode;
};

export default function SignUpLayout({ children }: SignUpLayoutProps) {
  return (
    <div className="w-full">
      <div className="mx-auto flex w-full items-center justify-center px-2 py-8 md:block md:px-[100px] lg:px-[300px]">
        <Logo />
      </div>
      {children}
    </div>
  );
}
