import { Episode } from '@globalTypes/episodeServices';

export interface ContextValue {
  episode: Episode;
  nextEpisode: Episode | null;
  prevEpisode: Episode | null;
}
