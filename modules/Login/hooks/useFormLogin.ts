import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useAuthMethods } from '@contexts/Auth/hooks';
import { useForm } from '@hooks/useForm';
import { loginSchema } from '@utils/yupSchemas';

const useLoginForm = () => {
  const router = useRouter();
  const { logIn } = useAuthMethods();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values, helpers) => {
      try {
        await logIn(values.email, values.password);
        helpers.setSubmitting(false);
        router.replace('/');
      } catch (reason) {
        toast.error(reason);
      }
    },
  });

  return form;
};

export default useLoginForm;
