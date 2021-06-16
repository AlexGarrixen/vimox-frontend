export interface ResponsePostLogin {
  user: {
    username: string;
    email: string;
    _id: string;
  };
  token: string;
  refreshToken: string;
}

export interface ResponseGetSession {
  session: {
    token: string;
    refreshToken: string;
    user: {
      _id: string;
      username: string;
      email: string;
    };
  };
}
