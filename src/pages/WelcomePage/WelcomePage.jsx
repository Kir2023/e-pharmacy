import { Container } from "../../globalStyles";
import { Img, Section, WelcomeText } from "./WelcomePage.styled";
import img from "../../assets/images/welcome.png";

const WelcomePage = () => {
  return (
    <Section>
      <Container>
        <WelcomeText>Welcome to E-Pharmacy!</WelcomeText>
        <Img src={img} alt="Page not found" />
      </Container>
    </Section>
  );
};

export default WelcomePage;
