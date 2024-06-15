import LoginForm from "../../components/LoginForm/LoginForm";
import { DecorImg, Img, LoginContainer, Logo, Title } from "./LoginPage.styled";
import img from "../../assets/images/pill.png";
import decor from "../../assets/images/decor.png";
import logo from "../../../public/logo.png";

const LoginPage = () => {
  return (
    <LoginContainer>
      <Logo src={logo} alt="Logo" />
      <Title>
        Your medication, delivered Say goodbye to all{" "}
        <span>your healthcare</span> worries with us
      </Title>
      <LoginForm />
      <Img src={img} alt="Pill" />
      <DecorImg src={decor} alt="Decor element" />
    </LoginContainer>
  );
};

export default LoginPage;
