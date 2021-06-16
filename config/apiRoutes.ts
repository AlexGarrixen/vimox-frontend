const apiRoutes = {
  auth: {
    login: '/auth/login',
    signup: '/auth/signup',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    emailConfirmation: '/auth/email-confirmation',
    renewToken: '/auth/renew-token',
    renewCredentials: '/auth/renew-credentials',
    session: '/auth/session',
  },
  series: {
    all: '/series',
    getOne: (serieId: string) => `/series/${serieId}`,
  },
  episodes: {
    all: '/episodes',
    getOne: (episodeId: string) => `/episodes/${episodeId}`,
    getNextEpisodes: (episodeId: string) =>
      `/episodes/${episodeId}/next-episodes`,
  },
  geners: {
    all: '/geners',
  },
  categories: {
    all: '/types',
  },
  user: {
    getSeries: (userId: string) => `/user/${userId}/series`,
    getOneSerie: (userId: string, serieId) =>
      `/user/${userId}/series/${serieId}`,
    postSerie: (userId: string) => `/user/${userId}/series`,
    lastEpisodeWatched: (userId: string, serieId: string) =>
      `/user/${userId}/series/${serieId}/last-episode-watched`,
    deleteSerie: (userId: string, serieId: string) =>
      `/user/${userId}/series/${serieId}`,
  },
  search: {
    serie: '/search/serie',
  },
};

export default apiRoutes;
