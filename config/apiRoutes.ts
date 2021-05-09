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
  },
  geners: {
    all: '/geners',
  },
  user: {
    getSeries: (userId: string) => `/user/${userId}/series`,
    postSerie: (userId: string) => `/user/${userId}/series`,
    lastEpisodeWatched: (userId: string, serieId: string) =>
      `/user/${userId}/series/${serieId}/last-episode-watched`,
    deleteSerie: (userId: string, serieId: string) =>
      `/user/${userId}/series/${serieId}`,
  },
};

export default apiRoutes;
