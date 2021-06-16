import { Serie } from './serieServices';
import { Episode } from './episodeServices';

export interface UserSerie {
  lastEpisodeWatched: Omit<Episode, 'serie'> & { serie: string };
  _id: string;
  userId: string;
  serie: Serie;
}

export type ResponseGetUserSeries = UserSerie[];

export interface ResponsePostUserSerie
  extends Omit<UserSerie, 'lastEpisodeWatched'> {
  lastEpisodeWatched: string;
}

export type ResponseGetUserSerie = {
  lastEpisodeWatched: string;
  _id: string;
  userId: string;
  serie: string;
} | null;
