import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, Input, LoginBtn } from "./LoginForm.styled";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Додати логіку відправки на сервер
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          type="email"
          id="email"
          placeholder="Email address"
          {...register("email")}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <LoginBtn type="submit">Log in</LoginBtn>
    </Form>
  );
};

export default LoginForm;
