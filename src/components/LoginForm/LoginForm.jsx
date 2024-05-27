import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LoginBtn } from './LoginForm.styled';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Додати логіку відправки на сервер
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="email"
          id="email"
          {...register('email')}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <input
          type="password"
          id="password"
          {...register('password')}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <LoginBtn type="submit">Log in</LoginBtn>
    </form>
  );
};

export default LoginForm;
