import React from 'react';
import { Button } from '@components/Form/Button';
import { Select } from '@components/Form/Select';
import { FilterBox } from './styled';

export const Filter = () => (
  <FilterBox>
    <Select
      placeholder='Tipo'
      onChange={(value) => console.log(value)}
      options={[
        { text: 'Tv', value: 'Tipo: Tv' },
        { text: 'Pelicula', value: 'Tipo: Pelicula' },
      ]}
    />
    <Select
      placeholder='Genero'
      onChange={(value) => console.log(value)}
      options={[
        { text: 'Todos', value: 'Genero: Todos' },
        { text: 'Accion', value: 'Genero: Accion' },
        { text: 'Comedia', value: 'Genero: Comedia' },
      ]}
    />
    <Button primary>Filtar</Button>
  </FilterBox>
);
