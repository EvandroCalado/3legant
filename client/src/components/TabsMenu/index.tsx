'use client';

import { useState } from 'react';
import AdditionalInfo from '../AdditionalInfo';
import Questions from '../Questions';
import Reviews from '../Reviews';

export default function TabsMenu() {
  const [activeTab, setActiveTab] = useState('infos');

  return (
    <div className="w-full space-y-16 px-4">
      <div className="flex items-center gap-16 text-neutral-400">
        <button
          onClick={() => setActiveTab('infos')}
          className="hidden duration-150 hover:text-primary hover:underline sm:block"
        >
          Informação Adicional
        </button>
        <button
          onClick={() => setActiveTab('questions')}
          className="hidden duration-150 hover:text-primary hover:underline sm:block"
        >
          Questões
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className="duration-150 hover:text-primary hover:underline"
        >
          Avaliações
        </button>
      </div>

      {activeTab === 'infos' && <AdditionalInfo />}
      {activeTab === 'questions' && <Questions />}
      {activeTab === 'reviews' && <Reviews />}
    </div>
  );
}
