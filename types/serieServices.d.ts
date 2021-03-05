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
  totalDuration: number;
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
    previewImage: string;
    order: number;
    thumbnail: string;
    duration;
  }[];
}

export interface GetSeriesParams {
  type?: 'tv' | 'movie';
  title?: string;
  sort_createdAt?: 'asc' | 'desc';
  limit_items?: number;
  page_index?: number;
}

export interface GetSeriesResponse {
  series: Serie[];
  count: number;
  lastPage: number;
}
