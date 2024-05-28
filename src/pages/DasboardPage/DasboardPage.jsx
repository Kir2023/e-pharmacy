import Logo from "../../components/Logo/Logo";
import LogoutBtn from "../../components/LogoutBtn/LogoutBtn";
import PageTitle from "../../components/Title/Title";

const DasboardPage = () => {
  return (
    <>
      <Logo />
      <PageTitle title="Medicine Store" />
      <LogoutBtn />
    </>
  );
};

export default DasboardPage;
