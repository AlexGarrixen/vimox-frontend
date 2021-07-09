import { useContext } from 'react';
import { Context } from '@modules/Serie/contexts/SerieStore';

const useSerie = () => {
  const { serie } = useContext(Context);
  return serie;
};

export default useSerie;
