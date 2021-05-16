import { Episode, ResponseGetNextEpisodes } from '@globalTypes/episodeServices';

export interface ContextValue {
  episode: Episode;
  nextEpisode: Episode | null;
  prevEpisode: Episode | null;
  nextEpisodes: ResponseGetNextEpisodes;
  serieId: string;
}
