export interface PostLoginResponse {
  user: {
    username: string;
    email: string;
    _id: string;
  };
  token: string;
  refreshToken: string;
}
