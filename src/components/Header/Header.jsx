import { useDispatch } from "react-redux";
import Logo from "../../components/Logo/Logo";
import LogoutBtn from "../../components/LogoutBtn/LogoutBtn";
import SubTitle from "../../components/SubTitle/SubTitle";
import PageTitle from "../../components/Title/Title";
import { Wrapper } from "./Header.styled";
import { logOutThunk } from "../../redux/auth/authOperations";
import { useNavigate } from "react-router-dom";
import { Notify } from "notiflix";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logOutThunk()).unwrap();
      navigate("/login");
    } catch (error) {
      Notify.failure("Logout error");
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
