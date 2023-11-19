'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function SignUpForm() {
  const router = useRouter();

  const signUpFormSchema = z.object({
    username: z
      .string()
      .min(3, 'O nome deve ter pelo menos 3 caracteres')
      .max(20, 'O nome deve ter no máximo 20 caracteres'),
    email: z.string().email('Por favor, insira um email válido'),
    password: z
      .string()
      .min(3, 'A seha deve ter pelo menos 3 caracteres')
      .max(20, 'A senha deve ter no máximo 20 caracteres'),
  });

  type SignUpFormData = z.infer<typeof signUpFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({ resolver: zodResolver(signUpFormSchema) });

  const onSubmit = async (data: SignUpFormData) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local/register
    `,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );

    const result = await res.json();

    if (res.status === 400) {
      console.log(result);
    }

    if (res.status === 200) {
      router.push('/signin');
    }
  };

  return (
    <div className="flex flex-col space-y-6 md:p-[160px]">
      <h2 className="text-[40px]">Increver-se</h2>
      <span className="text-neltral-04">
        Já tem uma conta?{' '}
        <Link
          href={'/signin'}
          className="text-green duration-150 hover:brightness-75"
        >
          Entrar
        </Link>
      </span>

      <form className="w-96 space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          type="text"
          placeholder="Nome de usuário"
          {...register('username')}
        />

        <input
          className="input"
          type="email"
          placeholder="Email"
          {...register('email')}
        />

        <input
          className="input"
          type="password"
          placeholder="Senha"
          {...register('password')}
        />

        <div className="mb-4 flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            className="text-blue-600 dark:focus:ring-blue-600 h-4 w-4 rounded border-gray-300 bg-gray-100 dark:border-primary dark:bg-primary"
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-medium text-neltral-04 dark:text-gray-300"
          >
            Aceito <span className="text-primary">Política de privacidade</span>{' '}
            e os
            <span className="ml-1 text-primary">Termos de uso</span>
          </label>
        </div>
        <button className="button" type="submit">
          Increver-se
        </button>
      </form>
    </div>
  );
}
