export interface Serie {
  _id: string;
  createdAt: string;
  titles: string[];
  name: string;
  sinopsis: string;
  imageSm: string;
  imageMd: string;
  imageLg: string;
  type: string;
  duration: number;
  geners: {
    _id: string;
    createdAt: string;
    name: string;
  }[];
  episodes: {
    _id: string;
    name: string;
    sinopsis: string;
    src: string;
    order: number;
    thumbnail: string;
    duration;
  }[];
  isInQueue: boolean;
}

export interface GetSeriesParams {
  type?: string;
  title?: string;
  sort_createdAt?: 'asc' | 'desc';
  limit_items?: number;
  page_index?: number;
}

export interface GetSeriesResponse {
  series: (Omit<Serie, 'episodes' | 'totalDuration'> & {
    episodes: string[];
  })[];
  count: number;
  lastPage: number;
}
