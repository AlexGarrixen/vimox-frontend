import React from 'react';
import {
  useFormik,
  FormikValues,
  FormikConfig,
  FormikErrors,
  FormikTouched,
} from 'formik';

export const useForm = <Values extends FormikValues = FormikValues>(
  config: FormikConfig<Values>
) => {
  const { errors, touched, values, isValid, dirty, ...formik } = useFormik(
    config
  );

  const generateErrors = ({
    values,
    errors,
    touched,
  }: {
    values: Values;
    errors: FormikErrors<Values>;
    touched: FormikTouched<Values>;
  }) => {
    let errorsMap: { [K in keyof Values]?: string } = {};
    const valuesKeys = Object.keys(values);

    if (valuesKeys.length) {
      for (const key of valuesKeys) {
        errorsMap = {
          ...errorsMap,
          [key]: touched[key] && errors[key] ? errors[key] : null,
        };
      }
    }

    return errorsMap;
  };

  const isValidForm = React.useMemo(() => isValid && dirty, [isValid, dirty]);

  return {
    ...formik,
    errors: generateErrors({ errors, values, touched }),
    isValidForm,
    values,
  };
};
