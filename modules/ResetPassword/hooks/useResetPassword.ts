import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useForm } from '@hooks/useForm';
import { resetPasswordSchema } from '@utils/yupSchemas';
import { resetPassword } from '@services/auth';

export const useResetPasswordForm = ({
  onSuccess,
}: {
  onSuccess?: () => void;
}) => {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values, helpers) => {
      try {
        await resetPassword(values.password, router.query.token as string);
        helpers.setSubmitting(false);
        onSuccess && onSuccess();
      } catch (reason) {
        toast.error(reason);
      }
    },
  });

  return form;
};

export default useResetPasswordForm;
