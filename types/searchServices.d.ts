import { Serie } from './serieServices';

export type ResponseSearchSerie =
  | (Omit<Serie, 'episodes' | 'geners'> & {
      episodes: string[];
      geners: string[];
    })[]
  | null;
