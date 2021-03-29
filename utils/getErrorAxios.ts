import type { AxiosError } from 'axios';

interface ErrorOutput {
  statusCode: number;
  payload: {
    statusCode: number;
    error: string;
    message: string;
  };
}

export const getError = (error: AxiosError): ErrorOutput => {
  const output = {
    statusCode: 500,
    payload: {
      statusCode: 500,
      error: 'Internal Server Error',
      message: 'An internal server error occurred',
    },
  };

  if (error.response) {
    output.statusCode = error.response.status;
    output.payload = error.response.data;
  } else if (error.request) {
    console.error(error.request);
  } else {
    output.payload.message = error.message;
  }

  return output;
};
