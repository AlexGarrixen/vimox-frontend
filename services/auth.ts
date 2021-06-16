import { request, requestApiRoute } from '@utils/request';
import routes from '@config/apiRoutes';
import {
  ResponsePostLogin,
  ResponseGetSession,
} from '@globalTypes/authServices';

export const signup = (values: {
  username: string;
  email: string;
  password: string;
}) =>
  request(routes.auth.signup, {
    method: 'post',
    data: values,
  }).then(({ data }) => data);

export const emailConfirmation = (token: string) =>
  request(routes.auth.emailConfirmation, {
    method: 'post',
    data: {
      emailToken: token,
    },
  }).then(({ data }) => data);

export const login = (email: string, password: string) =>
  request<ResponsePostLogin>(routes.auth.login, {
    method: 'post',
    auth: {
      username: email,
      password,
    },
  }).then(({ data }) => data);

export const forgotPassword = (email: string) =>
  request(routes.auth.forgotPassword, {
    method: 'post',
    data: { email },
  }).then(({ data }) => data);

export const resetPassword = (newPassword: string, resetToken: string) =>
  request(routes.auth.resetPassword, {
    method: 'put',
    data: { newPassword, resetToken },
  }).then(({ data }) => data);

export const getSession = () =>
  requestApiRoute<ResponseGetSession>(routes.auth.session).then(
    ({ data }) => data
  );
