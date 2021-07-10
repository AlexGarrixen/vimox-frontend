import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useForm } from '@hooks/useForm';
import { signupSchema } from '@utils/yupSchemas';
import { signup } from '@services/auth';

const useSignupForm = () => {
  const router = useRouter();

  const form = useForm({
    initialValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: signupSchema,
    onSubmit: async ({ passwordConfirmation, ...values }, helpers) => {
      try {
        await signup(values);
        helpers.setSubmitting(false);
        router.push(`/email-confirmation?email=${values.email}`);
      } catch (reason) {
        toast.error(reason);
      }
    },
  });

  return form;
};

export default useSignupForm;
