import { request, requestApiRoute } from '@utils/request';
import { getError } from '@utils/getErrorAxios';
import routes from '@config/apiRoutes';
import {
  PostLoginResponse,
  ResponseGetSession,
} from '@globalTypes/authServices';

interface SignupValues {
  username: string;
  email: string;
  password: string;
}

export const signup = async (values: SignupValues) => {
  try {
    const { data } = await request(routes.auth.signup, {
      method: 'post',
      data: values,
    });
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};

export const emailConfirmation = async (token: string) => {
  try {
    const { data } = await request(routes.auth.emailConfirmation, {
      method: 'post',
      data: {
        emailToken: token,
      },
    });
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const { data } = await request<PostLoginResponse>(routes.auth.login, {
      method: 'post',
      auth: {
        username: email,
        password,
      },
    });
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const { data } = await request(routes.auth.forgotPassword, {
      method: 'post',
      data: { email },
    });

    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};

export const resetPassword = async (
  newPassword: string,
  resetToken: string
) => {
  try {
    const { data } = await request(routes.auth.resetPassword, {
      method: 'put',
      data: { newPassword, resetToken },
    });

    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};

export const getSession = async () => {
  try {
    const { data } = await requestApiRoute<ResponseGetSession>(
      routes.auth.session
    );
    return data;
  } catch (reason) {
    const error = getError(reason);
    throw error.payload.message;
  }
};
