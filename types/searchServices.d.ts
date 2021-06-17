import { Serie } from './serieServices';

export type ResponseSearchSerie = (Serie & { episodes: number })[] | null;
