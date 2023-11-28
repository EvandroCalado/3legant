'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function SignUpForm() {
  const [error, setError] = useState('');
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
    accept: z.literal(true, {
      errorMap: () => ({ message: 'Por favor, aceite os termos de uso' }),
    }),
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

    if (res.status === 401) {
      setError('Email ou senha inválidas');
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

      <form className="w-80 space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <input
            className="input"
            type="text"
            placeholder="Nome de usuário"
            {...register('username')}
          />
          {errors.username && (
            <span className="text-red">{errors.username.message}</span>
          )}
        </div>

        <div className="flex flex-col">
          <input
            className="input"
            type="email"
            placeholder="Email"
            {...register('email')}
          />
          {errors.email && (
            <span className="text-red">{errors.email.message}</span>
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
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 accent-primary"
            {...register('accept')}
          />

          <label
            htmlFor="default-checkbox"
            className="ms-2 text-[10px] font-medium text-neltral-04 dark:text-gray-300"
          >
            Aceito <span className="text-primary">Política de privacidade</span>{' '}
            e os
            <span className="ml-1 text-primary">Termos de uso</span>
          </label>
        </div>
        {errors.accept && (
          <span className="text-red">{errors.accept.message}</span>
        )}

        <button className="button" type="submit">
          Increver-se
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
