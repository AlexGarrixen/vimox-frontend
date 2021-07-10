import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useForm } from '@hooks/useForm';
import { forgotPassword } from '@services/auth';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('No es un email valido')
    .required('El email es requerido'),
});

const useForgotPasswordForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const form = useForm({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async (values, helpers) => {
      try {
        await forgotPassword(values.email);
        helpers.setSubmitting(false);
        onSuccess && onSuccess();
      } catch (reason) {
        toast.error(reason);
      }
    },
  });

  return form;
};

export default useForgotPasswordForm;
