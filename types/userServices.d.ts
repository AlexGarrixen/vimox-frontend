import { Serie } from './serieServices';
import { Episode } from './episodeServices';

export interface UserSerie {
  lastEpisodeWatched: Omit<Episode, 'serie'> & { serie: string };
  _id: string;
  userId: string;
  serie: Serie;
}

export type GetUserSeries = UserSerie[];
