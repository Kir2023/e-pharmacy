import LoginForm from '../../components/LoginForm/LoginForm';
import { Container } from '../../globalStyles';
import { DecorImg, Img, Title } from './LoginPage.styled';
import img from '../../assets/images/pill.png'
import decor from '../../assets/images/decor.png'

const LoginPage = () => {
  return (
    <Container>
      <Title>Your medication, delivered Say goodbye to all <span>your healthcare</span> worries with us</Title>
      <LoginForm />
      <Img src={img} alt="Pill"/>
      <DecorImg src={decor} alt="Decor element"/>
    </Container>
  );
};

export default LoginPage;
