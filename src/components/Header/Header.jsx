import Logo from "../../components/Logo/Logo";
import LogoutBtn from "../../components/LogoutBtn/LogoutBtn";
import SubTitle from "../../components/SubTitle/SubTitle";
import PageTitle from "../../components/Title/Title";

const Header = () => {
  return (
    <>
      <Logo />
      <PageTitle title="Medicine Store" />
      <SubTitle text="Dashboard" />
      <LogoutBtn />
    </>
  );
};

export default Header;
