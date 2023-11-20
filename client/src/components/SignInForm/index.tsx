'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function SignInForm() {
  const [error, setError] = useState('');
  const router = useRouter();

  const signInFormSchema = z.object({
    identifier: z.string().email('Por favor, insira um email válido'),
    password: z
      .string()
      .min(3, 'A seha deve ter pelo menos 3 caracteres')
      .max(20, 'A senha deve ter no máximo 20 caracteres'),
  });

  type SignInFormData = z.infer<typeof signInFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({ resolver: zodResolver(signInFormSchema) });

  const onSubmit = async (data: SignInFormData) => {
    const res = await signIn('credentials', {
      ...data,
      redirect: false,
      callbackUrl: '/',
    });

    if (res?.status === 401) {
      setError('Email ou senha inválidas');
      return;
    }

    router.push(res?.url || '/');
  };

  return (
    <div className="flex flex-col space-y-6 px-4 md:p-[160px]">
      <h2 className="text-[40px]">Entrar</h2>
      <span className="text-neltral-04">
        Ainda não tem conta?{' '}
        <Link
          href={'/signup'}
          className="text-green duration-150 hover:brightness-75"
        >
          Cadastrar
        </Link>
      </span>

      <form className="w-80 space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <input
            className="input"
            type="email"
            placeholder="Email"
            {...register('identifier')}
          />
          {errors.identifier && (
            <span className="text-red">{errors.identifier.message}</span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            className="input"
            type="password"
            placeholder="Senha"
            {...register('password')}
          />
          {errors.password && (
            <span className="text-red">{errors.password.message}</span>
          )}
        </div>

        <div className="mb-4 flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            className="text-blue-600 dark:focus:ring-blue-600 h-4 w-4 rounded border-gray-300 bg-gray-100 dark:border-primary dark:bg-primary"
          />
          <div className="flex w-full items-center justify-between">
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-neltral-04 dark:text-gray-300"
            >
              Lembrar
            </label>
            <Link href={'#'} className="ml-1 text-primary">
              Esqueceu a senha?
            </Link>
          </div>
        </div>

        <button className="button" type="submit">
          Entrar
        </button>
      </form>

      {error && (
        <div className="bg-red p-2 text-center">
          <span>
            <span className="font-semibold text-white">{error}</span>
          </span>
        </div>
      )}
    </div>
  );
}
