import React from 'react';
import { ProviderSerie } from './contexts/SerieStore';
import { Spacing } from '@components/Layout/Spacing';
import Hero from './sections/Hero';
import Episodes from './sections/Episodes';

const Serie = ({ serieId }: SerieProps) => (
  <ProviderSerie serieId={serieId}>
    <Hero />
    <Spacing size={80} />
    <Episodes />
    <Spacing size={30} />
  </ProviderSerie>
);

type SerieProps = {
  serieId: string;
};

export default Serie;
