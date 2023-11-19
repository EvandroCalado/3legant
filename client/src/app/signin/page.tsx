import Image from 'next/image';
import SignInForm from '../../components/SignInForm';

export default function SignIn() {
  return (
    <div className="flex w-full flex-col items-center justify-center px-8 md:h-[89vh] md:flex-row">
      <div className="relative h-96 w-full p-8 md:h-full md:flex-1">
        <Image
          src={'/login/paste-image.png'}
          alt="Login"
          fill
          className="object-contain"
        />
      </div>

      <div className="flex-1">
        <SignInForm />
      </div>
    </div>
  );
}
