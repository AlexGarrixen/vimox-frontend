export interface Serie {
  _id: string;
  name: string;
  sinopsis: string;
  thumbnail: string;
  bannerImage: string;
  titles: string[];
  geners: string[];
  release: Date;
  createdAt: Date;
  type: string;
  duration: number;
  isInQueue: boolean;
}

export interface ResponseGetSeries {
  series: (Serie & { episodes: number })[];
  count: number;
  lastPage: number | null;
  nextPage: number | null;
  prevPage: number | null;
}
