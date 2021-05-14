import React from 'react';
import { Typography } from '@components/DataDisplay/Typography';
import { useReadMore } from '@hooks/useReadMore';

type SinopsisProps = {
  text: string;
};

export const Sinopsis = ({ text: textProp }: SinopsisProps) => {
  const { text, showReadMore, showFullText, handleToggle } = useReadMore(
    textProp,
    120
  );

  return (
    <Typography>
      {text}
      {showReadMore && (
        <Typography
          as='span'
          white
          onClick={handleToggle}
          style={{ cursor: 'pointer' }}
        >
          {showFullText ? ' menos' : ' ...más'}
        </Typography>
      )}
    </Typography>
  );
};
