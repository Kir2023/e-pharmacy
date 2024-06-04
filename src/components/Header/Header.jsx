import axios from "axios";
import Logo from "../../components/Logo/Logo";
import LogoutBtn from "../../components/LogoutBtn/LogoutBtn";
import SubTitle from "../../components/SubTitle/SubTitle";
import PageTitle from "../../components/Title/Title";
import { Wrapper } from "./Header.styled";

const Header = () => {
  const handleLogout = async () => {
    try {
      await axios.get('https://e-pharmacy-backend-ez9m.onrender.com/api/user/logout');
      localStorage.removeItem('token');
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <Wrapper>
      <Logo />
      <PageTitle title="Medicine Store" />
      <SubTitle text="Dashboard" />
      <LogoutBtn onLogout={handleLogout} />
    </Wrapper>
  );
};

export default Header;
