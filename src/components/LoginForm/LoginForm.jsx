import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import {
  StyledForm,
  Input,
  LoginBtn,
  PasswordToggleBtn,
  InputWrapper,
} from "./LoginForm.styled";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const getPasswordIcon = () =>
    showPassword ? "./sprite.svg#icon-eye-on" : "./sprite.svg#icon-eye-off";

  const handleLogin = async (values, { setSubmitting, setFieldError }) => {
    try {
      console.log("Submitting values: ", values);
      const response = await axios.post(
        "https://https://e-pharmacy-backend-ez9m.onrender.com/api/user/login",
        values
      );
      console.log("Response: ", response);
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/dashboard");
      console.log("Login successful, token:", token);
    } catch (error) {
      console.error("Login error:", error);
      setFieldError("email", "Invalid email or password");
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={schema}
      onSubmit={handleLogin}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <Form className="styled-form">
            <Field
              as={Input}
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              autoComplete="off"
            />
            <ErrorMessage name="email" component="span" />

            <InputWrapper>
              <Field
                as={Input}
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
              />
              <PasswordToggleBtn type="button" onClick={handleTogglePassword}>
                <svg>
                  <use xlinkHref={getPasswordIcon()} />
                </svg>
              </PasswordToggleBtn>
            </InputWrapper>
            <ErrorMessage name="password" component="span" />

            <LoginBtn type="submit" disabled={isSubmitting}>
              Log in
            </LoginBtn>
          </Form>
        </StyledForm>
      )}
    </Formik>
  );
};

export default LoginForm;
