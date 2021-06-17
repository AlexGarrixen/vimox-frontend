import { Serie } from './serieServices';
import { Episode } from './episodeServices';

export interface UserSerie {
  lastEpisodeWatched: Omit<Episode, 'serie' & { serie: string }>;
  _id: string;
  userId: string;
  serie: Serie;
}

export type ResponseGetUserSeries = UserSerie[];

export type ResponsePostUserSerie = UserSerie;

export type ResponseGetUserSerie = {
  lastEpisodeWatched: Omit<Episode, 'serie' & { serie: string }>;
  _id: string;
  userId: string;
  serie: string;
} | null;
