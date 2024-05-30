import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import {
  StyledForm,
  Input,
  LoginBtn,
  PasswordToggleBtn,
  InputWrapper,
} from "./LoginForm.styled";
import { useState } from "react";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const getPasswordIcon = () =>
    showPassword ? "./sprite.svg#icon-eye-on" : "./sprite.svg#icon-eye-off";

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={schema}
      // onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <div>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
            />
            <ErrorMessage name="email" component="span" />
          </div>
          <div>
            <InputWrapper>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
              />
              <PasswordToggleBtn type="button" onClick={handleTogglePassword}>
                <svg>
                  <use xlinkHref={getPasswordIcon()} />
                </svg>
              </PasswordToggleBtn>
            </InputWrapper>
            <ErrorMessage name="password" component="span" />
          </div>
          <LoginBtn type="submit" disabled={isSubmitting}>
            Log in
          </LoginBtn>
        </StyledForm>
      )}
    </Formik>
  );
};

export default LoginForm;
