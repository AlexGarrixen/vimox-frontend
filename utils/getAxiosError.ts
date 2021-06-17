import type { AxiosError } from 'axios';

//custom error messages
const msgByStatusCode = {
  400: 'Solicitud incorrecta',
  401: 'Credenciales invalidas',
  404: 'Oops! No encontramos lo que buscabas',
  500: 'Oops! Algo salió mal',
};

export const getAxiosError = (error: AxiosError) => {
  let msg: string = msgByStatusCode[500];

  if (error.response) {
    const { status } = error.response;
    msg = msgByStatusCode[status];
  } else if (error.request) {
    console.error(error.request);
  } else {
    msg = error.message;
  }

  return msg;
};
