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
      <Button
        colorScheme='secondary'
        disabled={page === 1}
        onClick={onClickPrev}
        style={{ marginRight: 12 }}
      >
        Anterior
      </Button>
      <Button disabled={page === lastPage} onClick={onClickNext}>
        Siguiente
      </Button>
    </Root>
  );
};
