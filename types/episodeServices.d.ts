import { Serie } from './serieServices';

export interface Episode {
  _id: string;
  createdAt: string;
  name: string;
  sinopsis: string;
  src: string;
  thumbnail: string;
  duration: number;
  order: number;
  serie: Serie;
  release: Date;
}
export interface ResponseGetOneEpisode {
  episode: Episode;
  nextEpisode: Episode | null;
  prevEpisode: Episode | null;
}

export interface ResponseGetEpisodes {
  data: Episode[];
  lastPage: string | null;
  nextPage: string | null;
  prevPage: string | null;
  count: number;
}

export type ResponseGetNextEpisodes = Episode[];
