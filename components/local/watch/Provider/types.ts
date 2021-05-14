import { Episode } from '@globalTypes/episodeServices';

export interface ContextValue {
  episode: Episode;
  episodesSerie: Episode[];
}
