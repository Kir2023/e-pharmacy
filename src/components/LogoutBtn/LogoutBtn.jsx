import { useNavigate } from "react-router-dom";
import { Button, Icon } from "./LogoutBtn.styled";
import sprite from "../../../public/sprite.svg";

const LogoutBtn = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Button type="button" onClick={handleLogout}>
      <Icon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <use href={`https://kir2023.github.io/e-pharmacy-frontend/${sprite}#icon-logout`} fill="var(--main-color)" className="icon-logout" />
        </svg>
      </Icon>
    </Button>
  );
};

export default LogoutBtn;
