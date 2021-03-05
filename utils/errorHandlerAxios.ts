import type { AxiosError } from 'axios';

export const errorHandler = (error: AxiosError) => {
  let errorMessage = '';

  if (error.response) {
    errorMessage = 'Se produjo un error, intentalo mas tarde';
    console.error(error.response);
  } else if (error.request) {
    errorMessage = 'Se produjo un error, intentalo mas tarde';
    console.error(error.request);
  } else {
    errorMessage = error.message;
    console.error(error.message);
  }

  return errorMessage;
};
