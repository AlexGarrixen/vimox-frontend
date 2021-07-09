import React from 'react';
import { Button } from '@components/Form/Button';
import { Wrapper } from './styled';
import useLatestReleasesPagination from '@modules/Directory/hooks/useLatestReleasesPagination';
import useLatestReleases from '@modules/Directory/hooks/useLatestReleases';

const PaginationControls = () => {
  const { page, setPage } = useLatestReleasesPagination();
  const { data } = useLatestReleases();

  return !data || !data.series?.length ? null : (
    <Wrapper>
      <Button
        colorScheme='secondary'
        disabled={page === 1}
        onClick={() => setPage(Math.max(0, page - 1))}
        style={{ marginRight: 12 }}
      >
        Anterior
      </Button>
      <Button
        disabled={page === data.lastPage}
        onClick={() => setPage(data.nextPage)}
      >
        Siguiente
      </Button>
    </Wrapper>
  );
};

export default PaginationControls;
