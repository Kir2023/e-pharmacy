import { Container } from "../../globalStyles";
import img from "../../assets/images/404.png";
import { Img, Section } from "./NotFoundPage.styled";

const NotFoundPage = () => {
  return (
    <Section>
      <Container>
        <Img src={img} alt="Page not found" />
      </Container>
    </Section>
  );
};

export default NotFoundPage;
