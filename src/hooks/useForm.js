import { useForm } from 'react-hook-form';

export const useContactForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Send data to server or email
  };

  return { register, handleSubmit, errors, onSubmit };
};
