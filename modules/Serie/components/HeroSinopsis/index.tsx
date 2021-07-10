import React from 'react';
import { Text } from '@components/DataDisplay/Text';
import { useReadMore } from '@hooks/useReadMore';

const Sinopsis = ({ text: textProp }: SinopsisProps) => {
  const { text, showReadMore, showFullText, handleToggle } = useReadMore(
    textProp,
    120
  );

  return (
    <Text colorScheme='secondary'>
      {text}
      {showReadMore && (
        <Text
          as='span'
          colorScheme='white'
          onClick={handleToggle}
          style={{ cursor: 'pointer' }}
        >
          {showFullText ? ' menos' : ' ...más'}
        </Text>
      )}
    </Text>
  );
};

type SinopsisProps = {
  text: string;
};

export default Sinopsis;
