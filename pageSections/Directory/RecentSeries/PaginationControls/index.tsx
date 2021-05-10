import React from 'react';
import { Button } from '@components/Form/Button';
import { Root } from './styled';

type PaginationControlsProps = {
  lastPage: number;
  page: number;
  onClickPrev?: () => void;
  onClickNext?: () => void;
};

export const PaginationControls = ({
  page,
  lastPage,
  onClickNext,
  onClickPrev,
}: PaginationControlsProps) => {
  return (
    <Root>
      <Button disabled={page === 1} onClick={onClickPrev} margin='0 12px 0 0'>
        Anterior
      </Button>
      <Button primary disabled={page === lastPage} onClick={onClickNext}>
        Siguiente
      </Button>
    </Root>
  );
};
