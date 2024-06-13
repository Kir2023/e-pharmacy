import { useNavigate } from "react-router-dom";
import logo from "../../../public/logo-mini.png";
import { LogoImg, LogoWrapper } from "./Logo.styled";

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <LogoWrapper onClick={handleClick}>
      <LogoImg src={logo} />
    </LogoWrapper>
  );
};

export default Logo;
