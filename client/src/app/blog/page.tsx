'use client';

import { useState } from 'react';
import Articles, { ArticlesProps } from '../../components/Articles';
import Helmet from '../../components/Helmet';
import Grid from '../../icons/grid';
import Rows from '../../icons/rows';
import Layout from '../../layout';

const articles = [
  {
    image: '/blog01.png',
    title: '7 formas de decoarar sua casa',
    slug: '7-formas-de-decoarar-sua-casa',
  },
  {
    image: '/blog02.png',
    title: 'Organização de cozinha',
    slug: 'organização-de-cozinha',
  },
  {
    image: '/blog03.png',
    title: 'Decore seu quarto',
    slug: 'decore-seu-quarto',
  },
  {
    image: '/blog01.png',
    title: '7 formas de decoarar sua casa',
    slug: '7-formas-de-decoarar-sua-casa',
  },
  {
    image: '/blog02.png',
    title: 'Organização de cozinha',
    slug: 'organização-de-cozinha',
  },
  {
    image: '/blog03.png',
    title: 'Decore seu quarto',
    slug: 'decore-seu-quarto',
  },
];

export default function Blog() {
  const [viewMode, setViewMode] = useState<ArticlesProps['viewMode']>('grid');

  return (
    <Layout>
      <section className="container mx-auto mb-8 space-y-8 px-4">
        <Helmet
          path="Home Blog"
          title="Blog"
          description="Ideias para casa e inspiração de design"
          image="/blog.png"
        />

        <div className="flex items-center justify-between">
          <h2 className="w-max border-b border-b-primary font-semibold">
            Todos os artigos
          </h2>

          <div className="flex items-center gap-2">
            <div
              className={`${
                viewMode === 'grid' ? 'bg-neutral-200' : ''
              } cursor-pointer rounded-full p-2 hover:bg-neutral-200`}
              onClick={() => setViewMode('grid')}
            >
              <Grid />
            </div>
            <div
              className={`${
                viewMode === 'rows' ? 'bg-neutral-200' : ''
              } cursor-pointer rounded-full p-2 hover:bg-neutral-200`}
              onClick={() => setViewMode('rows')}
            >
              <Rows />
            </div>
          </div>
        </div>

        <Articles articles={articles} viewMode={viewMode} />
      </section>
    </Layout>
  );
}
