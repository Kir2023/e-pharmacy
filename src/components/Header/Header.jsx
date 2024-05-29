import Logo from "../../components/Logo/Logo";
import LogoutBtn from "../../components/LogoutBtn/LogoutBtn";
import SubTitle from "../../components/SubTitle/SubTitle";
import PageTitle from "../../components/Title/Title";
import { Wrapper } from "./Header.styled";

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <PageTitle title="Medicine Store" />
      <SubTitle text="Dashboard" />
      <LogoutBtn />
    </Wrapper>
  );
};

export default Header;
