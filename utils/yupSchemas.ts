import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string().email().required('El email es requerido'),
  password: Yup.string().required('La contraseña es requerida'),
});

export const signupSchema = Yup.object({
  username: Yup.string().required('El nombre de usuario es requerida'),
  email: Yup.string().email('Email invalido').required('El email es requerido'),
  password: Yup.string()
    .matches(
      /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/,
      'Debe contener 8 caracteres como minimo, un numero, un caracter especial, una letra en minúscula y otra en mayúscula'
    )
    .required('La contraseña es requerida'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'La contraseña no hace match')
    .required('Confirmacion de contraseña requerida'),
});

export const resetPasswordSchema = Yup.object({
  password: Yup.string()
    .matches(
      /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/,
      'Debe contener 8 caracteres como minimo, un numero, un caracter especial, una letra en minúscula y otra en mayúscula'
    )
    .required('La contraseña es requerida'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'La contraseña no hace match')
    .required('Confirmacion de contraseña requerida'),
});
